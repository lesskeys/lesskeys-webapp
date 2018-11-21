import React, { Component } from 'react';
import '../../style/AILog.css';

class Log extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: props.data
    }
  }

  render () {

    var event = new Date(this.props.data.logTime);
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' , hour: 'numeric' , minute: 'numeric' };

    return (
      <div className="logContainer">
        <div className="logItemDate">
          {event.toLocaleDateString('de-DE', options)}
        </div>
        <div className="logItemType">
          {this.props.data.type}
        </div>
        <div className="logItemEvent">
          {this.props.data.event}
        </div>
        <div className="logItemActor">
          {this.props.data.actor}
        </div>
      </div>
    )
  }
}

export default Log;