import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/AILog.css'
import 'react-datepicker/dist/react-datepicker.css'
import Sidebar from './Sidebar'
import Log from './Log'
import DatePicker from 'react-datepicker'
import Select from 'react-select';

const logTypes = [
  { value: 'ALL', label: 'ALL' },
  { value: 'UNLOCK', label: 'UNLOCK' },
  { value: 'LOGIN', label: 'LOGIN' },
  { value: 'SYSTEM', label: 'SYSTEM' }
];

class AILog extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
      log: [],
      filter: {
        date: new Date(),
        type: logTypes[0]
      }
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
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

  handleDateChange(selected) {
    this.setState({
      filter: {
        date: selected,
        type: this.state.filter.type
      }
    });
  }

  handleTypeChange(selected) {
    this.setState({
      filter: {
        date: this.state.filter.date,
        type: selected
      }
    });
  }

  render () {

    const logList = this.state.log.map(l => {
      return ([
        <Log key={this.state.log.indexOf(l)} data={l} filter={this.state.filter}/>
      ])
    })

    return (
      <div>
        <Sidebar/>
        <div className="mainAI">
          <div className="filterSection">
            <DatePicker className="filterDate" selected={this.state.filter.date} onChange={this.handleDateChange}/>
            <Select className="filterType" value={this.state.filter.type} onChange={this.handleTypeChange} options={logTypes} />
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