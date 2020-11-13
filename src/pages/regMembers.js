import React, { Component } from 'react';
import NavDarkLogin from '../component/navbarDark-login';

export default class RegMembers extends Component {

  constructor() {
    super();
    this.state = {
      createForm: ''
    }
  }

  newForm = (el) => {
    
    this.setState({el})
  }


  render() {

    let form = `<div className="reg-input">

                  <input type="email" className="pay-form-control" name="email"  value="" onChange="" />
                
                  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.3472" cy="13.6002" r="12.0914" fill="#444545"/>
                  <path d="M5.98442 12.2934H10.5737V7.70416H13.3142V12.2934H17.9034V15.0339H13.3142V19.6232H10.5737V15.0339H5.98442V12.2934Z" fill="white"/>
                  </svg>

                </div>`

    return (
      <>
        
        <NavDarkLogin />

        <div className="reg-title">
          <h3>Teams Members Registration</h3>
        </div>

        <div className="formHolder">
          <form className="cr-form">
              <div className="form-group-reg">

                <label>User Email</label>

                <div className="reg-input">

                  <input type="email" className="pay-form-control" name="email"  value="" onChange="" />
                
                  <svg onClick={() => {this.setState({form})} } width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.3472" cy="13.6002" r="12.0914" fill="#444545"/>
                  <path d="M5.98442 12.2934H10.5737V7.70416H13.3142V12.2934H17.9034V15.0339H13.3142V19.6232H10.5737V15.0339H5.98442V12.2934Z" fill="white"/>
                  </svg>

                </div>

              </div>

              <div className="form-group-reg">
                <button type="submit" className="tm submit">Register</button>
              </div>
          </form>
        </div>
      </>
    )
  }
}
