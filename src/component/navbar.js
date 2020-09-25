import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/img/logo.png';

 function Nav() {
  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>

        <div className="menu">
          <Link className="menu-text" to="/register">SIGN UP</Link>
          <Link className="menu-text" to="/login">LOGIN</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;