import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/App.css';
import Login from './Login';
import Ring from './Ring';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
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
          <Route path='/login' component={Login} />
          <Route path='/ring' render={() => (
            this.state.isLoggedIn ? (
              <Ring/>
            ) : (
              <Redirect to="/login" />
            )
          )} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
