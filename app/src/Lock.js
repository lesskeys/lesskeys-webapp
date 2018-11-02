import React, { Component } from 'react';
import './style/AILocks.css';
import * as FontAwesome from 'react-icons/fa';

class Lock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: props.data,
      name: props.data.name,
      ip: props.data.address,
      inEditMode: false
    }
  }

  toggleEditable = () => {
    this.setState({
      inEditMode: !this.state.inEditMode
    })
  }

  updateName (evt) {
    this.setState({
      name: evt.target.value
    })
  }

  updateIp (evt) {
    this.setState({
      ip: evt.target.value
    })
  }

  render () {

    if (this.state.inEditMode) {
      return (
        <div className="lockContainer">
          <div className="lockItemName">
            <input type="text" value={this.state.name} onChange={(e) => this.updateName(e)} />
          </div>
          <div className="lockItemIp">
            <input type="text" value={this.state.ip} onChange={(e) => this.updateIp(e)} />
          </div>
          <div className="lockItemButtonContainer">
            <div className="abort" onClick={this.toggleEditable}>
              <FontAwesome.FaTimes className="icon" />
            </div>
            <div className="save" onClick={this.toggleEditable}>
              <FontAwesome.FaCheck className="icon" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="lockContainer">
            <div className="lockItemName">
              {this.state.name}
            </div>
            <div className="lockItemIp">
              {this.state.ip}
            </div>
            <div className="lockItemButtonContainer">
              <div className="edit" onClick={this.toggleEditable}>
                <FontAwesome.FaPen className="icon" />
              </div>
            </div>
          </div>
      )
    }
  }
}

export default Lock;