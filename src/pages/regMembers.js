import React, { Component } from 'react';
import NavDarkLogin from '../component/navbarDark-login';

export default class RegMembers extends Component {

  constructor() {
    super();
    this.state = {
      "users": [
        {
         team_name: 'teamX',
         email: ''
        },
        {
          team_name: 'teamX',
          email: ''
        }
      ],
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    
    fetch('https://dodocourses.herokuapp.com/api/auth/user-register', {
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
        // const err = document.querySelectorAll('.err-txt');
        // err.forEach(e => {
        //   e.style.display = "block";
        // });
        console.log('not working');
      }
    });

   const validInput = this.formValidation(); 

    if(validInput === true) {
      // window.location = "/teams/checkout";
    }
    
    event.preventDefault();
  }


  render() {

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

                <input type="email" className="pay-form-control" name="email"  value={this.state.value} onChange={this.handleChange} />

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <input type="email" className="pay-form-control" name="email"  value={this.state.value} onChange={this.handleChange} />

              </div>

              {/* <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email2"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div> */}

              {/* <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email3"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email4"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email5"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email6"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email7"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email8"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div>

              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email9"  value={this.state.value} onChange={this.handleChange} />

                </div>

              </div> */}

              <div className="form-group-reg">
                <button type="submit" className="tm submit">Register</button>
              </div>
          </form>
        </div>
      </>
    )
  }
}
