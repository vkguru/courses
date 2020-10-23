import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/DODO-Workshops-logo.png';
// import { loggedUser,  verCode} from './session';

 function NavDark() {

  // const [menu, setMenu] = useState("Welcome");
  
  // const menu = document.querySelector('.menu-text');

  // if(loggedUser && verCode ) {
  //   // document.querySelector('.menu-text').innerHTML = 'Welcome!';
  //   // console.log(menu);
  //   this.props = 'Welcome';
  // } else {
    
  // }

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
          {/* <Link className="menu-text dark" to="/login">LOGIN</Link> */}
        </div>

      </div>
    </nav>
  )
}

export default NavDark;