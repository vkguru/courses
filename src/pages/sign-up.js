import React, { Component } from 'react'

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', password_confirmation: '' };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
      console.log(response)
      return response.json();
    });

    event.preventDefault();
  }

  render() {

    return (
      <div className="formHolder">

        <h3>REGISTER</h3>

        <form className="cr-form" onSubmit={this.handleSubmit}>

          <div className="form-group-reg">
            <label>Name</label>
            <input type="text" className="pay-form-control" name="name" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div className="form-group-reg">
            <label>Email Address</label>
            <input type="text" className="pay-form-control" name="email"  value={this.state.value} onChange={this.handleChange} />
          </div>

          <div className="form-group-reg">
            <label>Password</label>
            <input type="password" className="pay-form-control" name="password" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div className="form-group-reg">
            <label>Confirm Password</label>
            <input type="password" className="pay-form-control" name="password_confirmation" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div className="form-group-reg">
            <button type="submit" className="bfl submit">Submit</button>
          </div>

        </form>
      </div>
    )
  }
}
