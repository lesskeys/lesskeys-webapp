import React, { Component } from 'react'
import lesskeys from '../lesskeys.svg'
import '../style/Header.css'

class Header extends Component {

  render () {
    return (
      <div className="generalHeader">
        <img src={lesskeys} className="headerLogo" alt="lesskeys" />
        <div className="headerText">
          LessKeys Webapp
        </div>
      </div>
    );
  }
}

export default Header;