import React, { useEffect, useState } from 'react';
import NavDarkLogin from '../component/navdarkadmin-login';
import {Link} from 'react-router-dom';

export default function RegisteredTeam() {

  const token = localStorage.getItem('admtok');
  const teamName = localStorage.getItem('team_name');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    document.title = `Courses | Team Members`;
    getUsers()
    
  });

  async function getUsers() {
    try {
      const res = await fetch('https://dodocourses.herokuapp.com/api/auth/get-registered-users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Authentication': token
        }
      });
      const data = await res.json();
      setResults(data.users);
      setLoading(false);
    } catch(err) {
      console.log(err)
    }
  }

  const sendInvite = (id) => {
    fetch(`https://dodocourses.herokuapp.com/api/auth/send-invite/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Authentication': token
    }
    })
    .then(res => {
      if(res.ok) {
        setNotify(id);
      }
    })
    .catch(err => console.log(err))
    console.log(id)

    return sendInvite;
  }

  const back = () =>  window.history.back();

  
  

  return (
    <>
      
      <NavDarkLogin />

      <div className="cart-intro">

        <button className="back" onClick={back}>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.75 7.50156H3.925L8.4625 2.05157C8.67467 1.79629 8.77675 1.46719 8.74627 1.13666C8.7158 0.806128 8.55527 0.501239 8.3 0.289065C8.04473 0.0768921 7.71563 -0.0251853 7.38509 0.00528938C7.05456 0.035764 6.74967 0.196295 6.5375 0.451565L0.2875 7.95156C0.245451 8.01122 0.207849 8.07389 0.175 8.13907C0.175 8.20157 0.175 8.23907 0.0875002 8.30157C0.0308421 8.44489 0.0011764 8.59745 0 8.75156C0.0011764 8.90568 0.0308421 9.05824 0.0875002 9.20156C0.0875002 9.26406 0.0874998 9.30157 0.175 9.36407C0.207849 9.42924 0.245451 9.49191 0.2875 9.55157L6.5375 17.0516C6.65503 17.1927 6.8022 17.3061 6.96856 17.3839C7.13491 17.4617 7.31636 17.5019 7.5 17.5016C7.79206 17.5021 8.07511 17.4004 8.3 17.2141C8.42657 17.1091 8.5312 16.9803 8.60789 16.8348C8.68458 16.6894 8.73182 16.5303 8.74692 16.3665C8.76201 16.2028 8.74466 16.0377 8.69586 15.8807C8.64705 15.7237 8.56775 15.5779 8.4625 15.4516L3.925 10.0016H18.75C19.0815 10.0016 19.3995 9.86987 19.6339 9.63545C19.8683 9.40103 20 9.08309 20 8.75156C20 8.42004 19.8683 8.1021 19.6339 7.86768C19.3995 7.63326 19.0815 7.50156 18.75 7.50156Z" fill="#231F20"/>
          </svg>
          Back
        </button>

        <h3 className="cart-hd">Registered Memebers</h3>

      </div>

      <div className="team">
        <h4>{teamName}</h4>
      </div>

      <div className="team sp">

      {loading === true ? 

        <div className="spinner"></div>

        : 

          <table className="team-members">

            <thead className="team-members-hd">
              <tr>
                <th>Email Address</th>
                <th>Code</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="team-members-tb">
              {results.map((result, index) => (
                <tr key={result.id} className={(index+1) % 2 === 0 ? `tra` : `tro` }>
                  <td>{result.email}</td>
                  <td>{result.code}</td>
                  <td>
                    <button className="invite-btn" onClick={()=>{sendInvite(result.id)}}>
                      Send Invite 
                    </button>
                      {notify === result.id ?
                        <svg width="15" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5955" cy="10.0769" r="9.72241" fill="#009A49"/>
                        <path d="M8.64638 12.4329L6.11131 9.89781L5.24805 10.755L8.64638 14.1533L15.9416 6.85816L15.0844 6.00098L8.64638 12.4329Z" fill="white"/>
                        </svg>
                        :
                        ''
                      }
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        }

      </div>

      <div className="team ds">
        <Link to="/teams/members-registration" className="courses-link">Return to Dashboard</Link>
      </div>

    </>
  )
}
