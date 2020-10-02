import React, { Component } from 'react';

export default class Login extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '', 
      login: false, 
      error: '',
    };
  }

  componentDidMount(){
    this.checkIfSuccessful()
  }

  checkIfSuccessful(){
    const accessCode = sessionStorage.getItem('sjfsj');
    const user = sessionStorage.getItem('uni_email');

    //Authenticates User
    if(this.state.email === user && this.state.password === accessCode) {
      console.log('successful');
      this.setState({login: true})
      window.location = '/course-board';
      
    } else {
      console.log('error');
    }

    // Check if User is still logged In
    if(accessCode && user) {
      window.location = '/course-board';
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
    .then(response => { 
      if(response.ok) {
        console.log(response)
        return response.json()
      } else {
        this.setState({error: 'Email address or password is wrong'});
        document.querySelector('.error').style.visibility = 'visible';
        // console.log('Bad request');
      }
    })
    .then(data => {
      console.log('Success:', data);
      sessionStorage.setItem('sjfsj', data.user.code);
      sessionStorage.setItem('uni_email', data.user.email);
      this.checkIfSuccessful()
      
    })
    .catch( error => error)

    event.preventDefault();
  }


  render() {


    return (
      <div className="formHolder">

        <h3>LOGIN</h3>

          <form className="cr-form" onSubmit={this.handleSubmit}>

          <div className="error"><p>{this.state.error}</p></div>

            <div className="form-group-reg">
              <label>Email Address</label>
              <input type="text" className="pay-form-control" name="email" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form-group-reg">
              <label>Access Code</label>
              <input type="password" className="pay-form-control" name="password" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form-group-reg">
              <button type="submit" className="bfl submit">Login</button>
            </div>

          </form>

      </div>
    )
  }
}
