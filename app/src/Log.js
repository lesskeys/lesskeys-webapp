import React, { Component } from 'react';
import './style/AILog.css';
import * as FontAwesome from 'react-icons/fa';

class Log extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: props.data
    }
  }

  render () {

    return (
      <div className="logContainer">
        <div className="logItemDate">
          {this.props.data.logTime.slice(0, -1).split('T')[0]}
        </div>
        <div className="logItemEvent">
          {this.props.data.event}
        </div>
      </div>
    )
  }
}

export default Log;