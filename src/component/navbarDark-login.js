import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/logoo.png';
import Logout from '../pages/logout';
import { loggedUser,  verCode} from '../component/session';

 function NavDarkLogin() {

  let firstChar;

  if(loggedUser && verCode ) {
    const name = verCode;
    firstChar = name.charAt(0).toUpperCase();
  } else {
    window.location = '/login'
  }

  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <Link to="/">
            <img src={logoDark} alt="logo"/>
          </Link>
        </div>

        <div className="menu">
          <h3>Welcome <span id="fr">{ firstChar }</span></h3>
          <Logout />
        </div>

      </div>
    </nav>
  )
}

export default NavDarkLogin;