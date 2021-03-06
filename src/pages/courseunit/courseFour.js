import React, { useState } from 'react';
import NavDarkLogin from '../../component/navbarDark-login';
import Footer from '../../component/footer';
import { loggedUser,  verCode} from '../../component/session';
import PlaylistContent from '../../component/playlistContent';
import ReactPlayer from 'react-player/lazy';
import poster from '../../asset/img/courses-banner.jpg';
import arrowDown from '../../asset/img/down-arrow.svg';
import Progress from '../../component/progress';
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
  let progressThree = localStorage.getItem('thirdkcnjc');

  let progressFour = localStorage.getItem('prfour');

  const handleComplete = ({played}) => {
    console.log(played)
    if(played >= 0.8 & !isComplete) {
      setIsComplete(true);
      localStorage.setItem('prfour', 8.3)
    }
  }


  const currentProgress = Number(progressOne) + Number(stored) + Number(progressThree);
  const currentProgressOne = Number(progressFour);
  console.log(currentProgress);
  console.log(currentProgressOne);
  

  return (
    <section className="section">

      <NavDarkLogin />

      <Progress width={currentProgress} widthOne={currentProgressOne} />

      <div className="course-board">

        <div className="vid-res">
          <div className="layer">
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
                className="p"
              />
            </div>
              
            <div id="next">
                <a href="text.pdf" className="is-complete" download>
                  Download PDF
                  
                  <span>
                    <img src={arrowDown} alt="arrow-down"/>
                  </span>

                </a>
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
