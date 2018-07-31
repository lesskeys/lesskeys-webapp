import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    users: []
  };

  async componentDidMount() {
    const response = await fetch('/ring/list');
    const list = await response.json();
    this.setState({ users: list, isLoading: false});
  }

  render() {
    const {users, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Ring list">
          <h2>Tenants</h2>
          {users.map(user =>
            <div key={user.userId}>
              {user.email}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
