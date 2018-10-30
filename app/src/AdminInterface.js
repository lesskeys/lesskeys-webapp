import React, { Component } from 'react';
import './style/AILocks.css';
import Sidebar from './Sidebar';

class AdminInterface extends Component {
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
        <div className="lockContainer">
          <div className="lockItemName">
            {l.name}
          </div>
          <div className="lockItemIp">
            {l.address}
          </div>
        </div>
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

export default AdminInterface;