import React, { Component } from 'react';
import NavbarDark from '../component/navbar-dark';

export default class TeamReg extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      team_name: '', 
      text: 'Submit',
      errors: {}
    };
  }

  changeText = (text) => {
    this.setState({text})
  }

  formValidation = () => {
    const { name, email } = this.state;
    let isValid = true;

    const errors = {};

    if(name < 1) {
      errors.nameLength = "Your Team Name is required";
      isValid = false;
    }

    if(!email.includes("@") && !email.includes(".com")) {
      errors.emailPattern = "Email has to be a valid email";
      isValid = false;
    }

    this.setState({errors});
    return isValid;
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    
    fetch('https://dodocourses.herokuapp.com/api/auth/team-register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(function(response) {
      if (response.ok) {
        console.log(response)
        return response.json();
      } else {
        const err = document.querySelectorAll('.err-txt');
        err.forEach(e => {
          e.style.display = "block";
        });
      }
    });

   const validInput = this.formValidation(); 

    if(validInput === true) {
      window.location = "/teams/checkout";
      sessionStorage.setItem('email_team', this.state.email );
    }
    
    event.preventDefault();
  }

  render() {
    return (
      <>

        <NavbarDark />

        <div className="reg-title">
          <h3>Team Registration</h3>
        </div>

        <div className="formHolder">

          <form className="cr-form" onSubmit={this.handleSubmit}>

            <div className="form-group-reg">
              <label>Team Name</label>
              <input type="text" className="pay-form-control" name="team_name" value={this.state.value} onChange={this.handleChange} />
              <p className="err-txt">{this.state.errors.nameLength}</p>
            </div>

            <div className="form-group-reg">
              <label>Email Address</label>
              <input type="email" className="pay-form-control" name="email" value={this.state.value} onChange={this.handleChange} />
              <p className="err-txt">{this.state.errors.emailPattern}</p>
            </div>

            <div className="form-group-reg">
              <button type="submit" className="bfl submit" onClick={ () => { this.changeText("Loading...")}  }>{this.state.text}</button>
            </div>


          </form>
        </div>
      </>
    )
  }
}
