import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/LogRequestModal.css'
import Select from 'react-select'

const requestTypes = [
  { value: 'UNLOCK', label: 'UNLOCK' },
  { value: 'GENERAL', label: 'GENERAL' }
]

const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

const UserSelect = (props) => {
  var users = props.userList.map(u => ({ value: u.userId, label: u.email }))

  if (props.type === 'GENERAL') {
    return (
      <Select className="requestType" onChange={props.handleUserChange} options={users} />
    ) 
  } else {
    return null
  }
}

class LogRequestModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      requestType: '',
      date: props.date.toLocaleDateString('de-DE', options),
      userId: 0
    }
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
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

  handleUserChange(selected) {
    this.setState({
      userId: selected.value
    })
  }

  requestLog = () => {
    fetch('/ai/log/request', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset-UTF-8"
      },
      body: JSON.stringify( this.state.requestType === 'UNLOCK' ? {
        date: this.state.date,
        type: this.state.requestType,
        message: this.state.message
      } : {
        date: this.state.date,
        type: this.state.requestType,
        message: this.state.message,
        userId: this.state.userId
      })
    }).then((response) => {
      return response.text;
    }).then((data) => {
      console.log(data)
      if (!(data === 'true')) {
        this.props.failure()
      }
      this.props.toggleModal()
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
            <UserSelect type={this.state.requestType} userList={this.props.userList} handleUserChange={this.handleUserChange} />
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
    userList: store.userListReducer.userList
  }
}

export default connect(mapStateToProps)(LogRequestModal)