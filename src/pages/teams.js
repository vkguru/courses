import React, { Component } from 'react';
import NavDark from '../component/navbar-dark';

export default class Teams extends Component {

  handleSubmit(evt) {
    evt.preventDefault();
  };

  render() {

    return (
      <>
        <NavDark />

        <div className="formHolder">

            <h3>TEAMS WAITLIST</h3>

            <form onSubmit={this.handleSubmit} className="cr-form" action="https://dodo.us10.list-manage.com/subscribe/post?u=26622333f91e30792644adb18&amp;id=42f5dd2cc8" method="post">

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
                <textarea className="pay-form-control" rows="5"></textarea>
              </div>

              <div className="form-group-reg">
                <button type="submit" className="bfl submit">Submit</button>
              </div>

            </form>
          </div>
        </>
    )
  }
}
