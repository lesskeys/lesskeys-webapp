import React, { Component } from 'react';
import './style/AILocks.css';
import Sidebar from './Sidebar';
import Lock from './Lock';

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

class AILocks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      locks: [],
      error: false
    }
  }

  showError = () => {
    this.setState({
      error: true
    })
  }
  
  async componentDidMount() {
    const response = await fetch('/ai/locks');
    const list = await response.json();
    this.setState({ locks: list, isLoading: false});
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
          {lockList}
        </div>
      </div>
    )
  }
}

export default AILocks;