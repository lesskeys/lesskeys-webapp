import React, { Component } from 'react';
import './style/AILocks.css';
import * as FontAwesome from 'react-icons/fa';

class NewLock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      creating: false,
      name: '',
      ip: ''
    }
  }

  toggleCreating = () => {
    this.setState({
      creating: !this.state.creating
    })
  }

  render () {
    if (!this.state.creating) {
      return (
        <div className="plainContainer">
          <div className="newLockButtonContainer" onClick={this.toggleCreating} >
            <FontAwesome.FaPlusCircle className="icon"/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="lockContainer">
          <div className="lockItemName">
            <input type="text" value={this.state.name} onChange={(e) => this.updateName(e)} />
          </div>
          <div className="lockItemIp">
            <input type="text" value={this.state.ip} onChange={(e) => this.updateIp(e)} />
          </div>
          <div className="lockItemButtonContainer">
            <div className="abort" onClick={this.toggleCreating}>
              <FontAwesome.FaTimes className="icon" />
            </div>
            <div className="save" onClick={this.toggleCreating}>
              <FontAwesome.FaCheck className="icon" />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NewLock;