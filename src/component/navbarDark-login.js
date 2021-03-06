import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../asset/img/DODO-Workshops-logo-black.png';
import Logout from '../pages/logout';
import DateCal from '../component/date';
import { loggedUser,  verCode} from '../component/session';

 function NavDarkLogin() {

  const isAdmin = localStorage.getItem('is_admin');

  let firstChar;

  if(loggedUser && verCode ) {
    const name = verCode;
    firstChar = name.charAt(0).toUpperCase();
  } else {
    window.location = '/login'
  }

  const [notify, setNotify] = useState(false)

  // const handleNotify = () => {
  //   if(notify) {
  //     setNotify(!notify)
  //   }
  // }

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
            <h3>Welcome <span id="fr">{ firstChar }</span></h3>
            <p>
              {/* <svg onClick={() => {setNotify(!notify)}} id="Capa_1" enableBackground="new 0 0 511.156 511.156" height="22" viewBox="0 0 511.156 511.156" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112z"/><path d="m255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283c0-31.398-25.544-56.942-56.941-56.942h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36z"/><path d="m442.747 435.044h-374.338c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z"/></svg> */}
              <svg onClick={() => {setNotify(!notify)}} height="17pt" viewBox="-21 0 512 512" width="17pt" xmlns="http://www.w3.org/2000/svg"><path d="m213.34375 512c38.636719 0 70.957031-27.542969 78.378906-64h-156.757812c7.425781 36.457031 39.746094 64 78.378906 64zm0 0"/><path d="m362.933594 255.980469c-.085938 0-.171875.019531-.257813.019531-82.324219 0-149.332031-66.988281-149.332031-149.332031 0-22.636719 5.207031-44.035157 14.273438-63.277344-4.695313-.445313-9.453126-.722656-14.273438-.722656-82.472656 0-149.332031 66.855469-149.332031 149.332031v59.476562c0 42.21875-18.496094 82.070313-50.945313 109.503907-10.816406 9.238281-15.617187 23.957031-11.734375 38.316406 4.523438 16.703125 21.035157 27.371094 38.359375 27.371094h347.199219c18.175781 0 35.308594-11.777344 38.996094-29.589844 2.859375-13.78125-2.046875-27.542969-12.734375-36.523437-31.019532-26.003907-48.960938-64.214844-50.21875-104.574219zm0 0"/><path d="m469.34375 106.667969c0 58.910156-47.753906 106.664062-106.667969 106.664062-58.910156 0-106.664062-47.753906-106.664062-106.664062 0-58.910157 47.753906-106.667969 106.664062-106.667969 58.914063 0 106.667969 47.757812 106.667969 106.667969zm0 0" fill="red"/></svg>
            </p>

            <p>
              { isAdmin?
              <Link className="help" to="/teams/members-registration">Admin Board</Link>
              :
              ''
              }
            </p>

            <p><a href="mailto:hello@dodo.ng" className="help">Help</a></p>
            <Logout color="dark" />
          </div>

        </div>
      </nav>

      <div className="notification" id={notify === true? 'dl' : 'dn'}>
       <DateCal />
      </div>

    </>
  )
}

export default NavDarkLogin;