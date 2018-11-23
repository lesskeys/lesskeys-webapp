import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/LogRequestModal.css'
import Select from 'react-select'

const requestTypes = [
  { value: 'UNLOCK', label: 'UNLOCK' },
  { value: 'GENERAL', label: 'GENERAL' }
]

class LogRequestModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      requestType: ''
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

  render () {
    if (!this.props.show) {
      return null
    }

    var options = { year: 'numeric', month: 'numeric', day: 'numeric' , hour: 'numeric' , minute: 'numeric' }

    return (
      <div className="requestBackdrop" onClick={(e) => this.onClickOutside(e)}>
        <div className="requestModal">
          <div className="grid">
            <div className="header">
              Request log for {this.props.date.toLocaleDateString('de-DE', options)}
            </div>
            <div className="center">
              <Select className="requestType" onChange={this.handleTypeChange} options={requestTypes} />
              <textarea className="requestMessage" maxLength="500" value={this.state.message} onChange={evt => this.updateMessage(evt)}/>
            </div>
            <div className="footer">

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