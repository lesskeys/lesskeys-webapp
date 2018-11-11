import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/App.css';
import Login from './Login';
import LoginAdmin from './LoginAdmin'
import Ring from './Ring';
import AILocks from './AILocks';
import AILog from './AILog';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: null
    }
  }

  updateLoggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  setUser = (u) => {
    this.setState({
      user: u
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
            this.state.isLoggedIn ? (
              <Redirect to="/ring" />
            ) : (
              <Redirect to="/login" />
            )
          )} />
          <Route path='/login' render={() => <Login loginFunction={this.updateLoggedIn} />} />
          <Route path='/admin' render={() => <LoginAdmin loginFunction={this.updateLoggedIn} setUser={this.setUser} />} />
          <Route path='/ring' render={() => (
            this.state.isLoggedIn ? (
              <Ring/>
            ) : (
              <Redirect to="/login" />
            )
          )} />
          <Route path='/ai' render={() => (
            this.state.isLoggedIn || true ? (
              <AILocks user={this.state.user} />
            ) : (
              <Redirect to="/admin" />
            )
          )} />
          <Route path='/ai-log' render={() => (
            this.state.isLoggedIn || true ? (
              <AILog user={this.state.user} />
            ) : (
              <Redirect to="/admin" />
            )
          )} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
