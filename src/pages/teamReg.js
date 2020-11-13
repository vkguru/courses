import React, { Component } from 'react';
import NavbarDark from '../component/navbar-dark';

export default class TeamReg extends Component {

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
              <input type="text" className="pay-form-control" name="teamname"  value="" onChange="" />
              {/* <p className="err-txt">{this.state.errors.emailPattern}</p> */}
            </div>

            <div className="form-group-reg">
              <label>Email Address</label>
              <input type="email" className="pay-form-control" name="email"  value="" onChange="" />
              {/* <p className="err-txt">{this.state.errors.emailPattern}</p> */}
            </div>

            <div className="form-group-reg">
              <button type="submit" className="bfl submit">{this.validInput? 'Loading...' : 'Submit'}</button>
            </div>


          </form>
        </div>
      </>
    )
  }
}
