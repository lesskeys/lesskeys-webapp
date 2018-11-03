import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style/Login.css';

const WrongInput = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className="wrongInput">
      Benutzername oder Passwort ist falsch!
    </div>
  )
}

class LoginAdmin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isSubmitted: false,
      isWrong: false
    }
  }

  updateUsernameValue (evt) {
    this.setState({
      username: evt.target.value
    })
  }

  updatePasswordValue (evt) {
    this.setState({
      password: evt.target.value
    })
  }

  onFormSubmit = () => {
    fetch('/ai/login', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset-UTF-8"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.value === 'true') {
        this.props.loginFunction()
        this.setState({
          isSubmitted: true
        })
        this.props.setUser(data.user)
      } else {
        this.setState({
          isWrong: true,
          admin: '',
          password: ''
        })
      }
    })
  }

  render () {

    if (this.state.isSubmitted) {
      return <Redirect to="/ai" />
    }

    return (
      <div className="background">
        <div className="center">
          <div className="head">
            Admin Login
          </div>
          <div className="form">
            <WrongInput show={this.state.isWrong} />
            <label>
              Benutzername
              <input type="text" placeholder="Benutzername" value={this.state.username} onChange={(e) => this.updateUsernameValue(e)} />
            </label>
            <label>
              Passwort
              <input type="password" placeholder="Passwort" value={this.state.password} onChange={(e) => this.updatePasswordValue(e)} />
            </label>
            <input type="submit" value="Senden" onClick={this.onFormSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAdmin;