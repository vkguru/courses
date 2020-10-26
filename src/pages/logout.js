import React, { Component } from 'react'

export default class Logout extends Component {

  constructor(props) {
    super();
    this.state = { 
      email: '', 
      errors: {}
    };
  }


  handleSubmit = () => {
    localStorage.removeItem('uni_email');
    localStorage.removeItem('sjfsj');
    const currentPage = window.location.origin + '/course-board';
    const hostOrign = window.location.origin;
    const pathName = window.location.pathname;
    console.log(currentPage);

    if(!currentPage === `${hostOrign}/course-board`) {
      window.location = '/login'; 
    } else {
      window.location = `${hostOrign}${pathName}`;
    }
     
  }
  render() {
    return (
      <>
        <button onClick={this.handleSubmit} className={`logout ${this.props.color}`}>Logout</button>
      </>
    )
  }
}
