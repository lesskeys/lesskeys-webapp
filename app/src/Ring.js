import React, { Component } from 'react';

class Ring extends Component {
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

    if (this.props.show) {
      return null;
    }

    return (
      <div>
        <div>
          <h2>Klingeln bei {this.props.user.firstName}</h2>
          <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
          <button onClick={this.cancelRing}>zurück</button>
        </div>
      </div>
    );
  }
}

export default Ring;