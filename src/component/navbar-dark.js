import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/DODO-Workshops-logo.png';
import { loggedUser,  verCode} from './session';
import Logout from '../pages/logout';

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
        <p className="menu-text dark" props="menu"></p>

          { loggedUser && verCode?
            <Logout color="menu-text dark" />
            :
            <Link className="menu-text dark" to="/login">Login</Link>
          }

          { loggedUser && verCode?
            <Link className="menu-text dark" to="/course-board">dashboard</Link>
            :
            ''
          }
        </div>

      </div>
    </nav>
  )
}

export default NavDark;