import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/logoo.png';

 function NavDark() {
  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <Link to="/">
            <img src={logoDark} alt="logo"/>
          </Link>
        </div>

        <div className="menu">
          <Link className="menu-text dark" to="/register">SIGN UP</Link>
          <Link className="menu-text dark" to="/login">LOGIN</Link>
        </div>

      </div>
    </nav>
  )
}

export default NavDark;