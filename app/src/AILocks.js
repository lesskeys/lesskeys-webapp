import React, { Component } from 'react';
import './style/AILocks.css';
import Sidebar from './Sidebar';
import Lock from './Lock';

class AILocks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      locks: []
    }
  }
  
  async componentDidMount() {
    const response = await fetch('/ai/locks');
    const list = await response.json();
    this.setState({ locks: list, isLoading: false});
  }
  
  render () {
    
    const lockList = this.state.locks.map(l => {
      return ([
        <Lock data={l} />
      ])
    })
    
    return (
      <div>
        <Sidebar/>
        <div className="mainAI">
          {lockList}
        </div>
      </div>
    )
  }
}

export default AILocks;