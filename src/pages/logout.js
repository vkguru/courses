import React, { Component } from 'react'

export default class Logout extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      errors: {}
    };
  }


  handleSubmit = () => {
    sessionStorage.clear();
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
        <button onClick={this.handleSubmit}>Logout</button>
      </>
    )
  }
}
