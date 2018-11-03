import React, { Component } from 'react';
import './style/AILocks.css';
import Sidebar from './Sidebar';
import Lock from './Lock';
import NewLock from './LockNew';

const Failure = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className="failure">
      <div className="text">
        Änderungen haben nicht funktioniert!
      </div>
    </div>
  )
}

const NewLockNotification = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className="notification">
      <div className="text">
        Neues Türschloss wurde hinzugefügt!
      </div>
    </div>
  )
}

class AILocks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      locks: [],
      error: false,
      lockAdded: false
    }
  }

  async componentDidMount() {
    const response = await fetch('/ai/locks');
    const list = await response.json();
    this.setState({ locks: list, isLoading: false});
  }

  showError = () => {
    this.setState({
      error: true
    })
  }

  newLockAdded = () => {
    this.componentDidMount()
    this.setState({
      lockAdded: true
    })
  }
  
  render () {
    
    const lockList = this.state.locks.map(l => {
      return ([
        <Lock data={l} error={this.showError} />
      ])
    })
    
    return (
      <div>
        <Sidebar/>
        <div className="mainAI">
          <Failure show={this.state.error} />
          <NewLockNotification show={this.state.lockAdded} />
          {lockList}
          <NewLock error={this.showError} reload={this.newLockAdded} user={this.props.user} />
        </div>
      </div>
    )
  }
}

export default AILocks;