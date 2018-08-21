import React, { Component } from 'react';
import './style/App.css';
import Header from './Header';
import List from './List';
import Ring from './Ring';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      users: [],
      isList: true,
      chosenUser: null
    };
  }

  async componentDidMount() {
    const response = await fetch('/ring/list');
    const list = await response.json();
    this.setState({ users: list, isLoading: false});
  }

  toggleList = (user) => {
    this.setState({
      isList: !this.state.isList,
      chosenUser: user
    })
  }

  render() {
    
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <Header/>
        <List users={this.state.users} show={this.state.isList} ring={this.toggleList}/>
        <Ring user={this.state.chosenUser} show={this.state.isList} cancel={this.toggleList}/>
      </div>
    );
  }
}

export default App;
