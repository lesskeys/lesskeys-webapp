import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style/Login.css';

const WrongInput = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className="wrongInput">
      Authentifizierungscode ist falsch!
    </div>
  )
}

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      code: '',
      isSubmitted: false,
      isWrong: false
    }
  }

  updateInputValue (evt) {
    this.setState({
      code: evt.target.value
    })
  }

  onFormSubmit = () => {
    this.props.loginFunction()
    if (this.state.code === 'code') {
      this.setState({
        isSubmitted: true
      })
    } else {
      this.setState({
        isWrong: true,
        code: ''
      })
    }
  }

  render () {

    if (this.state.isSubmitted) {
      return <Redirect to="/ring" />
    }

    return (
      <div className="background">
        <div className="center">
          <div className="head">
            Login
          </div>
          <div className="form">
            <WrongInput show={this.state.isWrong} />
            <label>
              Authentifizierungscode
              <input type="text" placeholder="Code" value={this.state.code} onChange={(e) => this.updateInputValue(e)} />
            </label>
            <input type="submit" value="Senden" onClick={this.onFormSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;