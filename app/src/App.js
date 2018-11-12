import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './style/App.css'
import Login from './Login'
import LoginAdmin from './LoginAdmin'
import Ring from './Ring'
import AILocks from './AILocks'
import AILog from './AILog'
import store from './store'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = store.getState();
  }

  isLoggedIn = () => {
    return this.state.user == null
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
              <Redirect to="/login" />
          )} />
          <Route path='/login' render={() => <Login/>} />
          <Route path='/admin' render={() => <LoginAdmin/>} />
          <Route path='/ring' render={() => (
              <Redirect to="/login" />
          )} />
          <Route path='/ai' render={() => (
            this.state.isLoggedIn ? (
              <AILocks user={this.state.user} />
            ) : (
              <Redirect to="/admin" />
            )
          )} />
          <Route path='/ai-log' render={() => (
            this.state.isLoggedIn ? (
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
