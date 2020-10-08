import React from 'react';
import { Link } from 'react-router-dom';
import videoPreload from '../asset/img/video-preload.jpg';
import AccordionContent from '../component/accordionContent';

function Masterclassin() {
  return (
    <section className="section sub-grey">
      <h2 className="sub-grey-heading">What's Inside This Masterclass</h2>

        <div className="video-preview">
          <img src={videoPreload} alt="video preview" />

          <div className="row">

            
          </div>

          <div className="table-content">
            <h3>Course Table of Contents</h3>

            <p>5 Sections • 11 Lectures • 3.4 Hours total length</p>
          </div>

          <AccordionContent />

          <div className="vid-summary-cta">
            <Link to="/cart" className="courses-link">Join the Masterclass Now</Link>
          </div>

        </div>  
        
    </section>
  )
}

export default Masterclassin;