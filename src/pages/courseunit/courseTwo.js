import React from 'react';
import { Link } from 'react-router-dom';
import NavDarkLogin from '../../component/navbarDark-login';
import Footer from '../../component/footer';
import { loggedUser,  verCode} from '../../component/session';
import PlaylistContent from '../../component/playlistContent';
import ReactPlayer from 'react-player/lazy';
import poster from '../../asset/img/courses-banner.jpg';
import './cr.css';

export default function CourseTwo() {


  if(loggedUser && verCode ) {
    console.log('courses');
  } else {
    window.location = '/login'
  }

  return (
    <section className="section">

      <NavDarkLogin />

      <div className="cr-progress">

        <h3>Track Your Progress</h3>
        
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
          {/* {props.title} */}
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

            <div id="next">
              <Link to="/course-board/2" className="next">Next</Link>
            </div>
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
