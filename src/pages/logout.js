import React, { Component } from 'react'

export default class Logout extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      errors: {}
    };
  }


  handleSubmit = (event) => {
    
    fetch('https://dodocourses.herokuapp.com/api/auth/logout', {
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
        console.log('error')
      }
    })
    .then(data => {
      console.log('Success:', data);
      console.log('You are logged out');
    });
    
  }
  render() {
    return (
      <>
        <button onClick={this.handleSubmit}>Logout</button>
      </>
    )
  }
}
