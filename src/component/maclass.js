import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
import AccordionContent from '../component/accordionContent';
import poster from '../asset/img/courses-banner.jpg';

function Masterclassin() {
  return (
    <section className="section sub-grey" id="pre">
      <h2 className="sub-grey-heading">What's Inside This Masterclass</h2>

        <div className="video-preview">
          <ReactPlayer 
            url='https://dodo.ng/asset/video/Services.mp4' 
            width='100%'
            height='100%'
            controls={true}
            config={{ file: { 
              attributes: {
                controlsList: 'nodownload',
                poster: poster
              }
            }}}
          />

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