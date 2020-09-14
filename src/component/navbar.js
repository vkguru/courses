import React from 'react';
import logo from '../asset/img/logo.png';

 function Nav() {
  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;