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

  async checkCreds () {
    const response = await fetch('/ai/login', {
      method: 'post',
      body: {
        "username": this.state.username,
        "password": this.state.password
      }
    })
    response.text().then((text) => {
      if (text === 'true') {
        this.setState({
          isSubmitted: true
        })
      } else {
        this.setState({
          isWrong: true,
          admin: '',
          password: ''
        })
      }
    })
  }

  onFormSubmit = () => {
    this.props.loginFunction()
    this.checkCreds()
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
              <input type="text" placeholder="Benutzername" value={this.state.code} onChange={(e) => this.updateUsernameValue(e)} />
            </label>
            <label>
              Passwort
              <input type="password" placeholder="Passwort" value={this.state.code} onChange={(e) => this.updatePasswordValue(e)} />
            </label>
            <input type="submit" value="Senden" onClick={this.onFormSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAdmin;