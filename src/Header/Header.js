
import React, { Component } from 'react';
import logo from '../images/logo.png';
import logouniv from '../images/logouniv.png';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="main" >
          <img className="logo-left" src={logo} alt='ensim-logo'/>
           <img className="logo-right" src={logouniv} alt="univ-logo" />
        </div>
      </nav>
    );
  }
}
export default Header;
