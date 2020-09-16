import React from 'react';
import videoPreload from '../asset/img/video-preload.jpg';
import innovationVid from '../asset/img/innovation-vid.jpg';
import designThinking from '../asset/img/design-thinking.jpg';
import designSprint from '../asset/img/design-sprint.jpg';

function Masterclassin() {
  return (
    <section className="section sub-grey">
      <h2 className="sub-grey-heading">What's Inside This Masterclass</h2>

        <div className="video-preview">
          <img src={videoPreload} alt="video preview" />

          <div className="row">

            <div className="vid-crd">
              
              <div className="vid-nxt" style={{backgroundImage: `url(${innovationVid})`}}>
                <div className="vid-text">
                  <h5 className="sec">Section 1</h5>
                  <h5 className="vid-title">Innovation and strategy</h5>
                </div>
              </div>

              <div className="vid-nxt" style={{backgroundImage: `url(${designThinking})`}}>
                <div className="vid-text">
                  <h5 className="sec">Section 2</h5>
                  <h5 className="vid-title">Design Thinking</h5>
                </div>
              </div>

              <div className="vid-nxt" style={{backgroundImage: `url(${designSprint})`}}>
                <div className="vid-text">
                  <h5 className="sec">Section 3</h5>
                  <h5 className="vid-title">Design Sprint</h5>
                </div>
              </div>
            </div>

            
          </div>

          <div className="vid-summary">
            <h4>Some Materials that are included: (for free)</h4>

              <ul className="vid-list">
                <li>Tincidunt habitasse bibendum faucibus lorem ac pharetra interdum sodales.</li>
                <li>Tincidunt habitasse bibendum faucibus lorem ac pharetra interdum sodales incidunt habitasse bibendum faucibus lorem ac pharetra interdum sodales.</li>
                <li>Tincidunt habitasse bibendum faucibus lorem ac pharetra interdum sodales.</li>
                <li>Tincidunt habitasse bibendum faucibus lorem ac pharetra interdum sodales.</li>
              </ul>

          </div>

          <div className="vid-summary-cta">
            <a href="/" className="courses-link">Join the Masterclass Now</a>
          </div>

        </div>  
        
    </section>
  )
}

export default Masterclassin;