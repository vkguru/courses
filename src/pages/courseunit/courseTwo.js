import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDarkLogin from '../../component/navbarDark-login';
import Footer from '../../component/footer';
import { loggedUser,  verCode} from '../../component/session';
import PlaylistContent from '../../component/playlistContent';
import ReactPlayer from 'react-player/lazy';
import poster from '../../asset/img/courses-banner.jpg';
import Progress from '../../component/progress';
import DateCal from '../../component/date';
import './cr.css';

export default function CourseTwo() {


  if(loggedUser && verCode ) {
    console.log('courses');
  } else {
    window.location = '/login'
  }

  const [isComplete, setIsComplete] = useState(false);

  let progressOne = localStorage.getItem('lesxx1');
  let stored = localStorage.getItem('storage');

  const handleComplete = ({played}) => {
    console.log(played)
    if(played >= 0.8 & !isComplete) {
      setIsComplete(true);
      localStorage.setItem('storage', 8.3)
    }
  }

  if(stored === null) {
    stored = 0
  }

  const currentProgress = Number(progressOne) + Number(stored);
  console.log(currentProgress);

  return (
    <section className="section">

      <NavDarkLogin />

      <DateCal />

      <Progress width={currentProgress} />

      <div className="course-board">

        <div className="vid-res">

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
              onProgress={handleComplete}
            />

            <div id="next">
              <Link to={stored? "/course-board/3" : "/course-board/2" } className={stored? "is-complete" : "not-complete"}>Next</Link>
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
