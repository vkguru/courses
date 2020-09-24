import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '', 
      login: false, 
      store: null 
    };
  }

  componentDidMount()
  {
    this.storeCollector()
  }

  storeCollector()

  {
    let store = JSON.parse(localStorage.getItem('login'));
    if(store && store.login) {
      this.setState({login: true, store: store})
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    
    fetch('https://dodocourses.herokuapp.com/api/auth/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Success:', data);
      localStorage.setItem('login', JSON.stringify({
        login: true,
        store: data.token
      }))
      this.storeCollector()
    })

    event.preventDefault();
  }


  render() {


    return (
      <div className="formHolder">

        <h3>LOGIN</h3>

        {
          !this.state.login?
          <form className="cr-form" onSubmit={this.handleSubmit}>

            <div className="form-group-reg">
              <label>Email Address</label>
              <input type="text" className="pay-form-control" name="email" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form-group-reg">
              <label>Password</label>
              <input type="password" className="pay-form-control" name="password" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form-group-reg">
              <button type="submit" className="bfl submit">Login</button>
            </div>

          </form>

          :

          <Redirect to="/course-board" />
        }

      </div>
    )
  }
}
