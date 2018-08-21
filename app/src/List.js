import React, {Component} from 'react';
import './style/List.css';

class List extends Component {

  render () {

    const rows = this.props.users.map(u => {
      return ([
        <div class="listItemName">
          {u.firstName}
        </div>, 
        <div class="listItemButton">
          <button class="ringButton" >klingeln</button>
        </div>
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