import React from 'react';
import NavDark from '../component/navbar-dark'
import TabContent from '../component/tabContent';
import videoPreload from '../asset/img/video-preload.jpg';
import Footer from '../component/footer';
import Logout from './logout';
import { loggedUser,  verCode} from '../component/session';
import Accordion from '../component/accordion';

export default function CourseBoard() {

  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
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
        
        <div className="cr-hlder">

          <div className="cr-level">
            <p className="cr-level-text">Unit 1</p>
            <div className="cr-level-point">1</div>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Unit 2</p>
            <div className="cr-level-point">2</div>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Unit 3</p>
            <div className="cr-level-point">3</div>
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

          <div className="acc-holder">
            <button className="accordion">jkbasahj</button>
            <div className="panel">nabfhaahj</div>
          </div>

          <ul>
            <li>Course one</li>
          </ul>

          <Accordion title="Unit 1" paragraph="A new Paragraph" />
          <Accordion title="Unit 2" paragraph="A new Paragrapher" />
        </div>
      </div>

      <div className="video-preview">

          <div className="tab">

            <TabContent />

          </div>

        </div>  

        <Logout />
        <Footer />
    </section>
  )
}
