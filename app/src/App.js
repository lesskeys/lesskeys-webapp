import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/App.css';
import Login from './Login';
import LoginAdmin from './LoginAdmin'
import Ring from './Ring';
import AILocks from './AILocks';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  updateLoggedIn = () => {
    this.setState({
      isLoggedIn: true
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
          <Route path='/admin' render={() => <LoginAdmin loginFunction={this.updateLoggedIn} />} />
          <Route path='/ring' render={() => (
            this.state.isLoggedIn ? (
              <Ring/>
            ) : (
              <Redirect to="/login" />
            )
          )} />
          <Route path='/ai' render={() => (
            this.state.isLoggedIn ? (
              <AILocks/>
            ) : (
              //<Redirect to="/admin" />
              <AILocks/>
            )
          )} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
