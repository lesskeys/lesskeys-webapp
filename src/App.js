import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './style/App.css'
import Login from './Login'
import LoginAdmin from './LoginAdmin'
import Ring from './Ring'
import AILocks from './AILocks'
import AILog from './AILog'

class App extends Component {

  isLoggedIn () {
    return !(this.props.user == null)
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
              <Ring/>
          )} />
          <Route path='/ai' render={() => (
            this.isLoggedIn() ? (
              <AILocks/>
            ) : (
              <Redirect to="/admin" />
            )
          )} />
          <Route path='/ai-log' render={() => (
            this.isLoggedIn() ? (
              <AILog/>
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

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
  }
}

export default connect(mapStateToProps)(App);
