import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/AILog.css'
import 'react-datepicker/dist/react-datepicker.css'
import Sidebar from './Sidebar'
import Log from './Log'
import DatePicker from 'react-datepicker'

class AILog extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      log: [],
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
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

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render () {

    const logList = this.state.log.map(l => {
      return ([
        <Log key={this.state.log.indexOf(l)} data={l} filter={this.state.startDate}/>
      ])
    })

    return (
      <div>
        <Sidebar/>
        <div className="mainAI">
          <div className="filterSection">
            <DatePicker className="filterDate" selected={this.state.startDate} onChange={this.handleChange}/>
          </div>
          <div className="seperator"/>
          {logList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
  }
}

export default connect(mapStateToProps)(AILog);