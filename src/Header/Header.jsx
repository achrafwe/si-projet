
import React, { Component } from 'react';
import logo from '../images/logo.png';
import logouniv from '../images/logouniv.png';
import Link from '@mui/material/Link';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="main" >
          <Link href='/SeprProfil'>
          <img className="logo-left" src={logo} alt='ensim-logo'/>
          </Link>
           <img className="logo-right" src={logouniv} alt="univ-logo" />
        </div>
      </nav>
    );
  }
}
export default Header;
