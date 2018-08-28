import React, { Component } from 'react';
import './style/Login.css';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      code: ''
    }
  }

  updateInputValue (evt) {
    this.setState({
      code: evt.target.value
    })
  }

  render () {
    return (
      <div className="background">
        <div className="center">
          <div className="head">
            Login
          </div>
          <form className="form">
            <label>
              Authentifizierungscode
              <input type="text" placeholder="Code" value={this.state.code} onChange={(e) => this.updateInputValue(e)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;