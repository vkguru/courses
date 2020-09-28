import React, { Component } from 'react';

export default class Signup extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  formValidation = () => {
    const { email } = this.state;
    let isValid = true;

    const errors = {};

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
        const err = document.querySelectorAll('.err-txt');
        err.forEach(e => {
          e.style.display = "block";
        });
      }
    });

   const validInput = this.formValidation(); 

    if(validInput === true) {
      window.location = "/checkout";
    }
    
    event.preventDefault();
  }

  render() {

    return (
      <div className="formHolder">

        <form className="cr-form" onSubmit={this.handleSubmit}>

          <div className="form-group-reg">
            <label>Email Address</label>
            <input type="email" className="pay-form-control" name="email"  value={this.state.value} onChange={this.handleChange} />
            <p className="err-txt">{this.state.errors.emailPattern}</p>
          </div>

          <div className="form-group-reg">
            <button type="submit" className="bfl submit">Submit</button>
          </div>


        </form>
      </div>
    )
  }
}
