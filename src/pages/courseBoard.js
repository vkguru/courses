import React, {useState} from 'react';
import NavDark from '../component/navbar-dark'
import TabContent from '../component/tabContent';
import videoPreload from '../asset/img/video-preload.jpg';
import Footer from '../component/footer';
import Logout from './logout';
import { loggedUser,  verCode} from '../component/session';
import AccordionContent from '../component/accordionContent';

export default function CourseBoard() {

  let acc = document.querySelectorAll("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

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

          <div className="acc-holder">
            <button className="accordion" onClick={() => setAccordionIsOpen(!accordionIsOpen)}>Introduction</button>
            <div className={panelClass}>
              <p>History/About</p>
              <p>Why prototype? Why test?</p>
              <p>Types of Prototypes</p>
            </div>
          </div>

          <div className="acc-holder">
            <button className="accordion" onClick={() => setAccordionIsOpen(!accordionIsOpen)}>Introduction</button>
            <div className={panelClass}>
              <p>History/Aboutjhvhv</p>
              <p>Why prototype? Why test?</p>
              <p>Types of Prototypes</p>
            </div>
          </div>

        </div>
      </div>

      <div className="video-preview">

          <div className="tab">

            <TabContent />

          </div>

        </div>  
        <AccordionContent />

        <Logout />
        <Footer />
    </section>
  )
}
