import React, { Component } from 'react';
import NavDarkLogin from '../component/navbarDark-login';

export default class RegMembers extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      errors: {}
    };
  }

  createForm() {

    return this.state.users.map((el, i) => 
      <div className="form-group-reg" key={i}>

        <label>User Email</label>

        <div className="reg-input" style={{display: 'none'}}>

          <input type="text" className="pay-form-control" value='dsdsd' name="team_name" onChange={this.handleChange.bind(this, i)} />

        </div>

        <div className="reg-input">

          <input type="email" className="pay-form-control" name="email" value={el||''} onChange={this.handleChange.bind(this, i)} />
          
          <svg onClick={this.removeForm.bind(this)} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.3472" cy="12.6773" r="12.0914" fill="#444545"/>
            <rect x="6.99414" y="11.3721" width="11.8914" height="2.76551" fill="white"/>
          </svg>

        </div>

      </div>
    )
  }

  // handleChange = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // }

  handleChange(i, event) {
    let users = [...this.state.users];
    users[i] =  event.target.value;
    this.setState({ users });
  }

  addForm() {
    this.setState(prevState => ({ users: [...prevState.users, '']}))
  }

  removeForm(i) {
    let users = [...this.state.users];
    users.splice(i,1);
    this.setState({ users });
 }

  handleSubmit = (event) => {

    // const token = sessionStorage.getItem('_cctoktims');
    
    // fetch('https://dodocourses.herokuapp.com/api/auth/user-register', {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`,
    //     'Authentication': token
    //   },
    //   body: JSON.stringify(this.state),
    // })
    // .then(function(response) {
    //   if (response.ok) {
    //     console.log(response)
    //     return response.json();
    //   } else {
    //     // const err = document.querySelectorAll('.err-txt');
    //     // err.forEach(e => {
    //     //   e.style.display = "block";
    //     // });
    //     console.log('not working');
    //   }
    // })

    // .then(data => console.log(data));

    console.log(this.state)
    
    event.preventDefault();
  }


  render() {

    const teamName = localStorage.getItem('team_name');

    return (
      <>
        
        <NavDarkLogin />

        <div className="reg-title">
          <h3>Teams Members Registration</h3>
        </div>

        <div className="formHolder">

          <form className="cr-form" onSubmit={this.handleSubmit}>
            
            <div className="form-group-reg">

              <label>User Email</label>

              <div className="reg-input" style={{display: 'none'}}>

                <input type="text" className="pay-form-control" name="team_name" value={teamName} onChange={this.handleChange} />

              </div>

              <div className="reg-input">

                <input type="email" className="pay-form-control" name="email"  value="" onChange={this.handleChange} />

                <svg onClick={this.addForm.bind(this)} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.3472" cy="13.6002" r="12.0914" fill="#444545"/>
                <path d="M5.98442 12.2934H10.5737V7.70416H13.3142V12.2934H17.9034V15.0339H13.3142V19.6232H10.5737V15.0339H5.98442V12.2934Z" fill="white"/>
                </svg>

              </div>

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
