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
          Prototyping for Businesses and Teams: The Masterclass
        </h2>
      </div>

      <div className="intro-sub">
        <h3>What will you gain?</h3>

        <p>Bringing a fully developed offering to the market is incredibly cost intensive for any company or team. With the huge amount of resources spent, you want to de-risk any potential mishaps surrounding your product or service’ entry and success in the market, you also want to bring a product to the market that customers enjoy using and has competitive advantage. This is where prototyping comes in. Prototyping goes beyond just testing a digital product, you can test business models, value propositions, price points and more. In this Masterclass we will show you how.</p>

        <p>We’ve taken great detail to design this Masterclass for teams and entrepreneurs that seek real actionable data to back their ideas or improve their products performance in the market.</p>
      </div>

      <div className="heading">
        <h2>We've Had Past Engagements With These Brands</h2>
      </div>

      <div className="brands">
        <img src={Union} alt="Union Bank Logo" />
        <img src={Firstbank} alt="First Bank Logo" />
        <img src={DesignSprint} alt="Design Sprint" />
      </div>

      <div className="intro-sub">

        <p>In this course you will learn what goes into building a prototype for anything you want to test for, from your value proposition to a real service. We will cover how to build prototypes to learn from your audience and answer questions you have around your offering. You will learn to test the right way in order to get real information that you will be able to use to improve on your offering before launching into market.</p>

        <p>At the end of this class, you and your team will be able to build rough prototypes, testing with real customers and iterate for more successful products.</p>

        <p>To hire a Design Research and Strategy agency to carry out this session would rack up millions in cost. Take advantage of our early bird offer of N3,500 complete with intimate videos, free worksheets and tools.</p>
        
      </div>

      <div className="cta">
        <Link to="/cart" className="courses-link">Join the Masterclass Now</Link>
      </div>
    </section>
  )
}

export default Intro;
