import React, { Component } from 'react';
import { Button, Table } from 'reactstrap'
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

    const userList = users.map(user => {
      const email = user.email;
      return <tr key={user.userId}>
        <td style={{whiteSpace: 'nowrap'}}>{user.firstName}</td>
        <td>
          <Button size="sm" color="primary">Ring</Button>
        </td>
      </tr>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Table className="mt-4">
          <thread>
            <tr>
              <th width="20%">Name</th>
              <th width="10%">Actions</th>
            </tr>
          </thread>
          <tbody>
          {userList}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
