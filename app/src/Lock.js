import React, { Component } from 'react';
import './style/AILocks.css';
import * as FontAwesome from 'react-icons/fa';

class Lock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: props.data,
      inEditMode: false
    }
  }

  render () {

    if (this.state.inEditMode) {

    } else {
      return (
        <div className="lockContainer">
            <div className="lockItemName">
              {this.state.data.name}
            </div>
            <div className="lockItemIp">
              {this.state.data.address}
            </div>
            <div className="lockItemButton">
              <FontAwesome.FaPen className="icon"/>
            </div>
          </div>
      )
    }
  }
}

export default Lock;