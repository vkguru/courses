import React, {useState} from 'react';
import NavDark from '../component/navbar-dark'
import videoPreload from '../asset/img/video-preload.jpg';
import Footer from '../component/footer';
import { loggedUser,  verCode} from '../component/session';
import PlaylistContent from '../component/playlistContent';

export default function CourseBoard() {

  const [accordionIsOpen, setAccordionIsOpen] = useState(() => false);

  let panelClass = 'panel';

  if(accordionIsOpen) {
    panelClass += 'plk'
  }

  if(loggedUser && verCode ) {
    console.log('courses');
  } else {
    window.location = '/login'
  }

  return (
    <section className="section">

      <NavDark />

      <div className="cr-progress">

        <h3>Your Progress</h3>
        
        <div className="cr-hlder">

          <div className="cr-level">
            <div className="cr-level-point">0</div>
            <p className="cr-level-text">Introduction</p>
          </div>

          <div className="cr-level">
            <div className="cr-level-point">1</div>
            <p className="cr-level-text">Building and planning</p>
          </div>

          <div className="cr-level">
            <div className="cr-level-point">2</div>
            <p className="cr-level-text">Testing and Learning</p>
          </div>

          <div className="cr-level">
            <div className="cr-level-point">3</div>
            <p className="cr-level-text">Iterating and Improving</p>
          </div>

          <div className="cr-level">
            <div className="cr-level-point">4</div>
            <p className="cr-level-text">Conclusion</p>
          </div>

        </div>

      </div>

      <div className="course-board">

        <div className="vid-res">
          <img src={videoPreload} alt="video preview" />
        </div>

        <div className="course-board-menu">

          <div className="course-name">

            <h3>Prototyping for Businesses Masterclass</h3>

          </div>

          <div className="course-fit">
            <PlaylistContent />
          </div>
          
        </div>
      </div> 
        <Footer />
    </section>
  )
}
