import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa';
import './style/Sidebar.css';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

  render () {
    return (
      <div className="sidebar">
        <div>
          <NavLink to="/ai">
            <FontAwesome.FaLock className="element"/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/ai-log">
            <FontAwesome.FaFile className="element"/>
          </NavLink>
        </div>
        <div><FontAwesome.FaCog className="element"/></div>
      </div>
    )
  }
}

export default Sidebar;