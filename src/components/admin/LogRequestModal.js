import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/LogRequestModal.css'
import Select from 'react-select'

const requestTypes = [
  { value: 'UNLOCK', label: 'UNLOCK' },
  { value: 'GENERAL', label: 'GENERAL' }
]

const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

class LogRequestModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      requestType: '',
      date: props.date.toLocaleDateString('de-DE', options)
    }
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }

  updateMessage = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  cancelRequest = () => {
    this.setState({
      message: ''
    })
    this.props.toggleModal()
  }

  onClickOutside = (evt) => {
    if (!evt.target.closest('.requestModal')) {
      this.cancelRequest()
    }
  }

  handleTypeChange(selected) {
    this.setState({
      requestType: selected.value
    })
  }

  requestLog = () => {
    fetch('/ai/log/request', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset-UTF-8"
      },
      body: JSON.stringify({
        date: this.state.date,
        type: this.state.requestType.value,
        message: this.state.message
      })
    }).then((response) => {
      return response.text;
    }).then((data) => {
      if (!(data === 'true')) {
        this.props.failure()
      }
    })
  }

  render () {
    if (!this.props.show) {
      return null
    }

    return (
      <div className="requestBackdrop" onClick={(e) => this.onClickOutside(e)}>
        <div className="requestModal">
          <div>
            <div className="header">
              Request log for {this.props.date.toLocaleDateString('de-DE', options)}
            </div>
            <Select className="requestType" onChange={this.handleTypeChange} options={requestTypes} />
            <textarea className="requestMessage" maxLength="500" value={this.state.message} onChange={evt => this.updateMessage(evt)}/>
            <div className="requestButton" onClick={this.requestLog} >
              Request
            </div>
          </div>
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

export default connect(mapStateToProps)(LogRequestModal)