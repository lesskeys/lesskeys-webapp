import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class Ring extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      users: []
    };
  }

  async componentDidMount() {
    const response = await fetch('/ring/list');
    const list = await response.json();
    this.setState({ users: list, isLoading: false});
  }

  render () {

    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <Header/>
        <List users={this.state.users} show={this.state.isList} />
      </div>
    )
  }
}

export default Ring;