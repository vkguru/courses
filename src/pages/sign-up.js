import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    const data = { name: 'Victor', email: 'test@gmail.com', password: 12345678, password_confirmation: 12345678  };

    fetch('https://dodocourses.herokuapp.com/api/auth/register', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    return (
      <div>
        
      </div>
    )
  }
}
