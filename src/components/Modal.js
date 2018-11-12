import React, { Component } from 'react';
import '../style/Modal.css';

class Modal extends Component {
  constructor (props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  cancelRing = () => {
    this.props.cancel(null);
    this.setState({
      inputValue: ''
    });
  }

  onClickOutside (evt) {
    if (!evt.target.closest('.modal')) {
      this.cancelRing()
    }
  }

  updateInputValue (evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  sendRingMessage = () => {
    fetch('/ring/send', {
      method: 'put',
      headers: {
        "Content-Type": "application/json; charset-UTF-8"
      },
      body: JSON.stringify({
        userId: this.props.user.userId,
        message: this.state.inputValue
      })
    })
    this.cancelRing()
  }

  render () {

    if (!this.props.show) {
      return null
    }

    return (
      <div className="backdrop" onClick={(e) => this.onClickOutside(e)}>
        <div className="modal">
          <div className="modalHeader">
            Klingeln bei {this.props.user.firstName}
          </div>
          <div className="modalBody">
            <textarea className="messageArea" maxLength="100" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
          </div>
          <div className="modalFooter">
            <div className="cancelButton" onClick={this.cancelRing}>
              Abbrechen
            </div>
            <div className="sendButton" onClick={this.sendRingMessage}>
              Senden
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;