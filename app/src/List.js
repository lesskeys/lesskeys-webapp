import React, {Component} from 'react';
import './style/List.css';

class List extends Component {

  render () {

    if (!this.props.show) {
      return null;
    }

    const rows = this.props.users.map(u => {
      return ([
        <div class="listItemName">
          {u.firstName}
        </div>, 
        <div class="listItemButton">
          <button class="ringButton" onClick={() => this.props.ring(u)}>klingeln</button>
        </div>,
        <div class="listSeparator"/>
      ]);
    })

    return (
      <div class="listContainer">
        {rows}
      </div>
    )
  }
}

export default List;