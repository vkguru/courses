import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/DODO-Workshops-logo-black.png';
import Logout from '../pages/logout';
// import DateCal from '../component/date';
import { loggedUser,  verCode} from '../component/session';

 function NavDarkLogin() {

  // let firstChar;

  if(loggedUser && verCode ) {
    // const name = verCode;
    // firstChar = name.charAt(0).toUpperCase();
  } else {
    window.location = '/login'
  }

  // const [notify, setNotify] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-hld">
          <div className="logo">
            <Link to="/">
              <img src={logoDark} alt="logo"/>
            </Link>
          </div>

          <div className="menu">
            {/* <h3>Welcome <span id="fr">{ firstChar }</span></h3>
            <p>
              <svg onClick={() => {setNotify(!notify)}} height="17pt" viewBox="-21 0 512 512" width="17pt" xmlns="http://www.w3.org/2000/svg"><path d="m213.34375 512c38.636719 0 70.957031-27.542969 78.378906-64h-156.757812c7.425781 36.457031 39.746094 64 78.378906 64zm0 0"/><path d="m362.933594 255.980469c-.085938 0-.171875.019531-.257813.019531-82.324219 0-149.332031-66.988281-149.332031-149.332031 0-22.636719 5.207031-44.035157 14.273438-63.277344-4.695313-.445313-9.453126-.722656-14.273438-.722656-82.472656 0-149.332031 66.855469-149.332031 149.332031v59.476562c0 42.21875-18.496094 82.070313-50.945313 109.503907-10.816406 9.238281-15.617187 23.957031-11.734375 38.316406 4.523438 16.703125 21.035157 27.371094 38.359375 27.371094h347.199219c18.175781 0 35.308594-11.777344 38.996094-29.589844 2.859375-13.78125-2.046875-27.542969-12.734375-36.523437-31.019532-26.003907-48.960938-64.214844-50.21875-104.574219zm0 0"/><path d="m469.34375 106.667969c0 58.910156-47.753906 106.664062-106.667969 106.664062-58.910156 0-106.664062-47.753906-106.664062-106.664062 0-58.910157 47.753906-106.667969 106.664062-106.667969 58.914063 0 106.667969 47.757812 106.667969 106.667969zm0 0" fill="red"/></svg>
            </p> */}
            <p><Link to="/course-board" className="help">Course Board</Link></p>
            <p><Link to="/teams/members-registration" className="help">Register Members</Link></p>
            <p><Link to="/teams/registered-members" className="help">Send Invite</Link></p>
            <p><a href="mailto:hello@dodo.ng" className="help">Help</a></p>
            <Logout color="dark" />
          </div>

        </div>
      </nav>

      {/* <div className="notification" id={notify === true? 'dl' : 'dn'}>
       <DateCal />
      </div> */}

    </>
  )
}

export default NavDarkLogin;