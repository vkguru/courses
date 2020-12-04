import React, { Component } from 'react';
import NavDarkLogin from '../component/navdarkadmin-login';
import { Link } from 'react-router-dom';

export default class RegMembers extends Component {

  constructor() {
    super();
    const teamName = localStorage.getItem('team_name');
    this.state = {
      users: [{team_name:teamName, email: ""}],
    };
  }

  createForm() {

    return this.state.users.map((el, i) => 
      <div className="form-group-reg" key={i}>

        <label>User Email</label>

        <div className="reg-input" style={{display: 'none'}}>

          <input type="text" className="pay-form-control" value={el.team_name} name="team_name" onChange={this.handleChange.bind(this, i)} />

        </div>

        <div className="reg-input">

          <input type="email" className="pay-form-control" name="email" value={el.email} onChange={this.handleChange.bind(this, i)} />
          
          <div className="icons">

            <svg onClick={this.addForm.bind(this)} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.3472" cy="13.6002" r="12.0914" fill="#444545"/>
              <path d="M5.98442 12.2934H10.5737V7.70416H13.3142V12.2934H17.9034V15.0339H13.3142V19.6232H10.5737V15.0339H5.98442V12.2934Z" fill="white"/>
            </svg>

            <svg onClick={this.removeForm.bind(this)} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.3472" cy="12.6773" r="12.0914" fill="#444545"/>
              <rect x="6.99414" y="11.3721" width="11.8914" height="2.76551" fill="white"/>
            </svg>

          </div>

        </div>

      </div>
    )
  }


  handleChange(i, event) {
    let users = [...this.state.users];
    users[i][event.target.name] = event.target.value;
    this.setState({ users });
  }

  addForm() {
    const teamName = localStorage.getItem('team_name');
    this.setState(prevState => ({ users: [...prevState.users, {team_name: teamName, email: ""},]}));
  }

  removeForm(i) {
    let users = [...this.state.users];
    users.splice(i,1);
    this.setState({ users });
  }

  handleSubmit = (event) => {

    const token = localStorage.getItem('admtok');
    
    fetch('https://dodocourses.herokuapp.com/api/auth/user-register', {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Authentication': token
      },
      body: JSON.stringify(this.state),
    })
    .then(function(response) {
      if (response.ok) {
        console.log(response)
        document.querySelector('.success').style.display = 'block';
        document.querySelector('.success-message').style.display = 'block';
        return response.json();
      } else {
        document.querySelector('.error-treg').style.display= 'block';
        document.querySelector('.error-treg p').style.display= 'block';
        setTimeout(() => {
          document.querySelector('.error-treg').style.display= 'none';
          document.querySelector('.error-treg p').style.display= 'none';
        }, 7000);
        console.log('not working');
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

    // console.log(JSON.stringify(this.state))
    
    event.preventDefault();
  }


  render() {

    return (
      <>
        
        <NavDarkLogin />

        <div className="reg-title">
          <h3>Team Members Registration</h3>
        </div>

        <div className="formHolder">

          <form className="cr-form" onSubmit={this.handleSubmit}>

            <div className="error-treg">
              <p>Sorry, the registration wasn't successful kindly try again.</p>
            </div>

            <div className="success">
              <p className='success-message'>Registration successful! You can now send invites to registered team members <Link className="slink" to="/teams/registered-members">here</Link></p>
            </div>

            {this.createForm()}

            <div className="form-group-reg">
              <button type="submit" className="tm submit">Register</button>
            </div>

          </form>

        </div>
      </>
    )
  }
}
