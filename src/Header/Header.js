
import React from 'react';
import logo1 from './logo1.png';
import logo2 from './logo2.png';

function Header() {
  return (
    <nav>
      <div className="logo-left">
        <img src={logo1} alt="Logo 1" />
      </div>
      <div className="logo-right">
        <img src={logo2} alt="Logo 2" />
      </div>
    </nav>
  );
}

export default Header;
