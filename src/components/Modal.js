import React, { Component } from 'react';
import '../style/Modal.css';

class Modal extends Component {
  constructor (props) {
    super(props);

    this.state = {
      inputValue: '',
      sender: ''
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

  updateSender (evt) {
    this.setState({
      sender: evt.target.value
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
        message: this.state.inputValue,
        sender: this.state.sender
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
          <div className="modalSeperator" />
          <input type="text" placeholder="Absender" value={this.state.sender} onChange={evt => this.updateSender(evt)}/>
          <textarea className="messageArea" maxLength="100" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
          <div className="modalFooter">
            <div className="sendButton" onClick={this.sendRingMessage}>
              Senden
            </div>
            <div className="cancelButton" onClick={this.cancelRing}>
              Abbrechen
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;