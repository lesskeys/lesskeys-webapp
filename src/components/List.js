import React, {Component} from 'react';
import '../style/List.css';
import Modal from './Modal.js';

class List extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false,
      chosenUser: null
    }
  }

  toggleModal = (user) => {
    this.setState({
      isOpen: !this.state.isOpen,
      chosenUser: user
    });
  }

  render () {

    const rows = this.props.users.map(u => {
      return ([
        <div className="listItemName">
          {u.firstName}
        </div>, 
        <div className="listItemButton">
          <button className="ringButton" onClick={() => this.toggleModal(u)}>klingeln</button>
        </div>,
        <div className="listSeparator"/>
      ]);
    })

    return (
      <div>
        <div className="listContainer">
          {rows}
        </div>
        <Modal show={this.state.isOpen} user={this.state.chosenUser} cancel={this.toggleModal}/>
      </div>
    )
  }
}

export default List;