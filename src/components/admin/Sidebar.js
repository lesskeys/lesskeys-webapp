import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/fa'
import '../../style/Sidebar.css'
import { NavLink } from 'react-router-dom'
import lesskeys from '../../lesskeys.svg'

class Sidebar extends Component {

  render () {
    return (
      <div className="sidebar">
        <img src={lesskeys} className="logo" alt="lesskeys" />
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
      </div>
    )
  }
}

export default Sidebar;