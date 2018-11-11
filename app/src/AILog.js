import React, { Component } from 'react';
import './style/AILog.css';
import Sidebar from './Sidebar';
import Log from './Log';

class AILog extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      log: []
    }
  }

  async componentDidMount() {
    const response = await fetch('/ai/log', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset-UTF-8"
      },
      body: JSON.stringify({
        userId: '1'
      })
    });
    const list = await response.json();
    this.setState({ log: list, isLoading: false});
  }

  render () {

    const logList = this.state.log.map(l => {
      return ([
        <Log data={l} />
      ])
    })

    return (
      <div>
        <Sidebar/>
        <div className="mainAI">
          {logList}
        </div>
      </div>
    )
  }
}

export default AILog;