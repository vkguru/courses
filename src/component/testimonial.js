import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonial extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="assets/1.jpeg" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}
