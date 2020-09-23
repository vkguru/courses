import React from 'react';
import { Link } from 'react-router-dom'
import Union from '../asset/img/unionbank.svg';
import Firstbank from '../asset/img/first-bank.svg';
import DesignSprint from '../asset/img/DesignSprint.svg';


function Intro() {
  return (
    <section className="section int">
      <div className="intro-hd">
        <h2>
          Prototyping for Businesses Masterclass is brought to you by DODO
        </h2>
      </div>

      <div className="intro-sub">
        <h3>What will you gain</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nec augue aliquam a lacus, sed massa. Vestibulum, nec sit malesuada urna, fames pulvinar sodales magna pellentesque. Tristique ultrices ut leo gravida posuere ut eget at. Quis a diam sed nunc. Sit eget dui sit aliquet.</p>

        <p>Nisl laoreet odio turpis pharetra ac non. Nulla etiam quis justo massa pulvinar eget. Imperdiet scelerisque aliquam, aliquet auctor id interdum commodo cras. Urna, tellus elit volutpat velit. Netus mi cras venenatis id cras arcu. Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas. Tellus posuere augue sit eu nisl. Eu praesent quam semper volutpat a vestibulum pulvinar.Tellus facilisi nisl lectus lacus, purus. Placerat velit morbi ridiculus sit amet.</p>
      </div>

      <div className="brands">
        <img src={Union} alt="Union Bank Logo" />
        <img src={Firstbank} alt="First Bank Logo" />
        <img src={DesignSprint} alt="Design Sprint" />
      </div>

      <div className="cta">
        <Link to="/cart" className="courses-link">Join the Masterclass Now</Link>
      </div>
    </section>
  )
}

export default Intro;
