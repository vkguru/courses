import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/logoo.png';
import Logout from '../pages/logout';

 function NavDarkLogin() {
  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <Link to="/">
            <img src={logoDark} alt="logo"/>
          </Link>
        </div>

        <div className="menu">
          <p>Welcome sessio</p>
          <Logout />
        </div>

      </div>
    </nav>
  )
}

export default NavDarkLogin;