import React, { Component } from 'react';
import './style/Modal.css';

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

  updateInputValue (evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render () {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" onClick={this.cancelRing}>
        <div className="modal">
          <div className="modalHeader">
            Klingeln bei {this.props.user.firstName}
          </div>
          <button onClick={this.cancelRing}>zurück</button>
          <div className="messageContainer">
            <textarea className="messageInput" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
          </div>
          <div className="modalFooter">
            Speichern
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;