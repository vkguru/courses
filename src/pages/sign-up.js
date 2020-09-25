import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Signup extends Component {

  constructor() {
    super();
    this.state = { 
      name: '', 
      email: '', 
      password: '', 
      password_confirmation: '', 
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  formValidation = () => {
    const { name, email, password, password_confirmation } = this.state;
    let isValid = true;

    const errors = {};

    if(name < 1) {
      errors.nameLength = "Your name is required";
      isValid = false;
    }

    if(password < 8) {
      errors.passwordLength = "Your Password length has to be 8 characters or more";
      isValid = false;
    }

    if(password_confirmation < 8) {
      errors.passwordConfirmLength = "Your Password length has to be 8 characters or more";
      isValid = false;
    }

    if(password !== password_confirmation) {
      errors.correctPassword = "Your passwords do not match";
      isValid = false;
    }

    if(password.length < 8 && password_confirmation.length < 8) {
      errors.doubleConfirm = "Your Password length must be 8 characters or more";
      isValid = false;
    }

    if(!email.includes("@") && !email.includes(".com")) {
      errors.emailPattern = "Email has to be a valid email";
      isValid = false;
    }

    this.setState({errors});
    return isValid;
  }


  handleSubmit = (event) => {
    
    fetch('https://dodocourses.herokuapp.com/api/auth/register', {
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
        console.log('Bad request');
        const err = document.querySelectorAll('.err-txt');
        err.forEach(e => {
          e.style.display = "block";
        });
      }
    });

   const validInput = this.formValidation(); 

    if(validInput === true) {
      window.location = "/login";
    }
    
    event.preventDefault();
  }

  render() {

    return (
      <div className="formHolder">

        <h3>REGISTER</h3>

        <form className="cr-form" onSubmit={this.handleSubmit}>

        {/* <div className="error-l">
          {Object.keys(this.state.errors).map((key)=>{
            return<p key={key}>{this.state.errors[key]}</p>
          })}
        </div> */}

          <div className="form-group-reg">
            <label>Name</label>
            <input type="text" className="pay-form-control" name="name" value={this.state.value} onChange={this.handleChange} />
            <p className="err-txt">{this.state.errors.nameLength}</p>
          </div>

          <div className="form-group-reg">
            <label>Email Address</label>
            <input type="email" className="pay-form-control" name="email"  value={this.state.value} onChange={this.handleChange} />
            <p className="err-txt">{this.state.errors.emailPattern}</p>
          </div>

          <div className="form-group-reg">
            <label>Password</label>
            <input type="password" className="pay-form-control" name="password" value={this.state.value} onChange={this.handleChange} />
            {/* <p className="err-txt">{this.state.errors.passwordLength}</p> */}
            <p className="err-txt">{this.state.errors.correctPassword}</p>
            <p className="err-txt">{this.state.errors.doubleConfirm}</p>
          </div>

          <div className="form-group-reg">
            <label>Confirm Password</label>
            <input type="password" className="pay-form-control" name="password_confirmation" value={this.state.value} onChange={this.handleChange} />
            <p className="err-txt"> {this.state.errors.correctPassword}</p>
            <p className="err-txt">{this.state.errors.doubleConfirm}</p>
          </div>

          <div className="form-group-reg">
            <button type="submit" className="bfl submit">Submit</button>
          </div>

          <p className="cra">
            Already have an account? 
            <span>
              <Link to="/login">
                Login
              </Link>
            </span>
          </p>

        </form>
      </div>
    )
  }
}
