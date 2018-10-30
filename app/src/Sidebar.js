import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa';
import './style/Sidebar.css';

class Sidebar extends Component {

  render () {
    return (
      <div className="sidebar">
        <div><FontAwesome.FaLock className="element"/></div>
        <div><FontAwesome.FaFile className="element"/></div>
        <div><FontAwesome.FaCog className="element"/></div>
      </div>
    )
  }
}

export default Sidebar;