import React from 'react';
import 'swiper/swiper-bundle.css';
import Susan from '../asset/img/susan.jpg';
import Omotayo from '../asset/img/Omotayo.png'
import Steph from '../asset/img/Steph.png'

function Instructor() {

  return (
    <section className="section sub">
        <h2>Our Instructors</h2>

      <div className="courses-instructors">

        <div className="instructor">
          <img src={Susan} alt="Susan Onigbinde" />

          <div className="instructor-detail">

            <div className="name">  
              <h4>Susan Onigbinde</h4>
              <p>Founder DODO Design Agency</p>
            </div>

            <div className="social">

              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <a href="https://www.linkedin.com/in/susan-onigbinde-7609808/"  >
                <path d="M4.93994 2.00002C4.93968 2.53046 4.72871 3.03906 4.35345 3.41394C3.97819 3.78883 3.46937 3.99929 2.93894 3.99902C2.40851 3.99876 1.89991 3.78779 1.52502 3.41253C1.15014 3.03727 0.939676 2.52846 0.939942 1.99802C0.940207 1.46759 1.15117 0.958988 1.52644 0.584103C1.9017 0.209218 2.41051 -0.00124153 2.94094 -0.000976312C3.47137 -0.000711096 3.97998 0.210257 4.35486 0.585517C4.72975 0.960777 4.94021 1.46959 4.93994 2.00002ZM4.99994 5.48002H0.999942V18H4.99994V5.48002ZM11.3199 5.48002H7.33994V18H11.2799V11.43C11.2799 7.77002 16.0499 7.43002 16.0499 11.43V18H19.9999V10.07C19.9999 3.90002 12.9399 4.13002 11.2799 7.16002L11.3199 5.48002Z" fill="#2D9CDB"/>
                </a>
              </svg>

            </div>


          </div>

          <div className="instructor-summary">
            <p>Susan Onigbinde is Founder of DODO and is a Business Designer and Design Researcher that has worked with brands like the Rockefeller Foundation and Union Bank. She is passionate about helping companies utilize design practices to bring better solutions to market and satisfying experiences to customers.</p>
          </div>

        </div>


      </div>

      <div className="testimony">
        <div className="cr-slide">
            <div className="cr-slide-text">
              We were positively impacted by your session. We are sincerely looking forward to having you with us again."
            </div>
          <div className="cr-testifr">
            <img src={Omotayo} alt="Omotayo"/>
            <div className="cr-testifr-info">
              <h3>Omotayo Isabemoi</h3>
              <h4>Product Manager, First Bank</h4>
            </div>
          </div>
        </div>

        <div className="cr-slide">
            <div className="cr-slide-text">
              If you are planning to run Design Sprints in Nigeria, you should connect with DODO</div>
            <div className="cr-testifr">
              <img src={Steph} alt="Steph"/>
              <div className="cr-testifr-info">
                <h3>Steph Crouchon</h3>
                <h4>CEO & Founder, Design Sprint LTD</h4>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Instructor;
