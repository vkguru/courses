import React from 'react';
import NavDark from '../component/navbar-dark'

export default function Teams() {
  return (
    <>
      <NavDark />

      <div className="formHolder">

          <h3>TEAMS WAITLIST</h3>

          <form className="cr-form">

            <div className="form-group-reg">
              <label>Company Name</label>
              <input type="text" className="pay-form-control" name="name" />
            </div>

            <div className="form-group-reg">
              <label>Email Address</label>
              <input type="email" className="pay-form-control" name="email"  />
            </div>

            <div className="form-group-reg">
              <label>Size of Team</label>
              <input type="text" className="pay-form-control" name="password" />
            </div>

            <div className="form-group-reg">
              <label>What Other Courses Around Prototype Will Your Team Love To Learn?</label>
              <input type="text" className="pay-form-control" name="password_confirmation" />
            </div>

            <div className="form-group-reg">
              <button type="submit" className="bfl submit">Submit</button>
            </div>

          </form>
        </div>
      </>
  )
}
