import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import image from '../asset/img/holder.jpg';
import Omotayo from '../asset/img/Omotayo.png'
import Steph from '../asset/img/Steph.png'

function Instructor() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  return (
    <section className="section sub">
        <h2>Our Instructors</h2>

      <div className="courses-instructors">

        <div className="instructor">
          <img src={image} alt="Susan Onigbinde" />

          <div className="instructor-detail">

            <div className="name">  
              <h4>Susan Onigbinde</h4>
              <p>CEO DODO Design Agency</p>
            </div>

            <div className="social">

              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.1621 2.65593C20.3986 2.99362 19.589 3.2154 18.7601 3.31393C19.6338 2.79136 20.2878 1.96894 20.6001 0.999927C19.7801 1.48793 18.8811 1.82993 17.9441 2.01493C17.3147 1.34151 16.4804 0.89489 15.571 0.744511C14.6616 0.594133 13.728 0.748418 12.9153 1.18338C12.1026 1.61834 11.4564 2.30961 11.0772 3.14972C10.6979 3.98983 10.6068 4.93171 10.8181 5.82893C9.15516 5.74558 7.52838 5.31345 6.04334 4.56059C4.55829 3.80773 3.24818 2.75097 2.19805 1.45893C1.82634 2.09738 1.63101 2.82315 1.63205 3.56193C1.63205 5.01193 2.37005 6.29293 3.49205 7.04293C2.82806 7.02202 2.17869 6.84271 1.59805 6.51993V6.57193C1.59825 7.53763 1.93242 8.47354 2.5439 9.22099C3.15538 9.96843 4.00653 10.4814 4.95305 10.6729C4.33667 10.84 3.69036 10.8646 3.06305 10.7449C3.32992 11.5762 3.85006 12.3031 4.55064 12.824C5.25123 13.3449 6.09718 13.6337 6.97005 13.6499C6.10253 14.3313 5.10923 14.8349 4.04693 15.1321C2.98464 15.4293 1.87418 15.5142 0.779053 15.3819C2.69075 16.6114 4.91615 17.264 7.18905 17.2619C14.8821 17.2619 19.0891 10.8889 19.0891 5.36193C19.0891 5.18193 19.0841 4.99993 19.0761 4.82193C19.8949 4.23009 20.6017 3.49695 21.1631 2.65693L21.1621 2.65593Z" fill="#2D9CDB"/>
              </svg>

              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.93994 2.00002C4.93968 2.53046 4.72871 3.03906 4.35345 3.41394C3.97819 3.78883 3.46937 3.99929 2.93894 3.99902C2.40851 3.99876 1.89991 3.78779 1.52502 3.41253C1.15014 3.03727 0.939676 2.52846 0.939942 1.99802C0.940207 1.46759 1.15117 0.958988 1.52644 0.584103C1.9017 0.209218 2.41051 -0.00124153 2.94094 -0.000976312C3.47137 -0.000711096 3.97998 0.210257 4.35486 0.585517C4.72975 0.960777 4.94021 1.46959 4.93994 2.00002ZM4.99994 5.48002H0.999942V18H4.99994V5.48002ZM11.3199 5.48002H7.33994V18H11.2799V11.43C11.2799 7.77002 16.0499 7.43002 16.0499 11.43V18H19.9999V10.07C19.9999 3.90002 12.9399 4.13002 11.2799 7.16002L11.3199 5.48002Z" fill="#2D9CDB"/>
              </svg>

            </div>


          </div>

          <div className="instructor-summary">
            <p>Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas</p>
          </div>

        </div>


        <div className="instructor">
          <img src={image} alt="Susan Onigbinde" />

          <div className="instructor-detail">

            <div className="name">  
              <h4>Susan Onigbinde</h4>
              <p>CEO DODO Design Agency</p>
            </div>

            <div className="social">

              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.1621 2.65593C20.3986 2.99362 19.589 3.2154 18.7601 3.31393C19.6338 2.79136 20.2878 1.96894 20.6001 0.999927C19.7801 1.48793 18.8811 1.82993 17.9441 2.01493C17.3147 1.34151 16.4804 0.89489 15.571 0.744511C14.6616 0.594133 13.728 0.748418 12.9153 1.18338C12.1026 1.61834 11.4564 2.30961 11.0772 3.14972C10.6979 3.98983 10.6068 4.93171 10.8181 5.82893C9.15516 5.74558 7.52838 5.31345 6.04334 4.56059C4.55829 3.80773 3.24818 2.75097 2.19805 1.45893C1.82634 2.09738 1.63101 2.82315 1.63205 3.56193C1.63205 5.01193 2.37005 6.29293 3.49205 7.04293C2.82806 7.02202 2.17869 6.84271 1.59805 6.51993V6.57193C1.59825 7.53763 1.93242 8.47354 2.5439 9.22099C3.15538 9.96843 4.00653 10.4814 4.95305 10.6729C4.33667 10.84 3.69036 10.8646 3.06305 10.7449C3.32992 11.5762 3.85006 12.3031 4.55064 12.824C5.25123 13.3449 6.09718 13.6337 6.97005 13.6499C6.10253 14.3313 5.10923 14.8349 4.04693 15.1321C2.98464 15.4293 1.87418 15.5142 0.779053 15.3819C2.69075 16.6114 4.91615 17.264 7.18905 17.2619C14.8821 17.2619 19.0891 10.8889 19.0891 5.36193C19.0891 5.18193 19.0841 4.99993 19.0761 4.82193C19.8949 4.23009 20.6017 3.49695 21.1631 2.65693L21.1621 2.65593Z" fill="#2D9CDB"/>
              </svg>

              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.93994 2.00002C4.93968 2.53046 4.72871 3.03906 4.35345 3.41394C3.97819 3.78883 3.46937 3.99929 2.93894 3.99902C2.40851 3.99876 1.89991 3.78779 1.52502 3.41253C1.15014 3.03727 0.939676 2.52846 0.939942 1.99802C0.940207 1.46759 1.15117 0.958988 1.52644 0.584103C1.9017 0.209218 2.41051 -0.00124153 2.94094 -0.000976312C3.47137 -0.000711096 3.97998 0.210257 4.35486 0.585517C4.72975 0.960777 4.94021 1.46959 4.93994 2.00002ZM4.99994 5.48002H0.999942V18H4.99994V5.48002ZM11.3199 5.48002H7.33994V18H11.2799V11.43C11.2799 7.77002 16.0499 7.43002 16.0499 11.43V18H19.9999V10.07C19.9999 3.90002 12.9399 4.13002 11.2799 7.16002L11.3199 5.48002Z" fill="#2D9CDB"/>
              </svg>

            </div>


          </div>

          <div className="instructor-summary">
            <p>Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas</p>
          </div>

        </div>

      </div>

      <div className="testimony">

      <Swiper
      slidesPerView={3}
      loop
      centeredSlides
      grabCursor
      height={500}
      // autoplay
      navigation
      // pagination={{ clickable: true }}
      >
        <SwiperSlide>
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

        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>

        
      </Swiper>

      </div>
    </section>
  )
}

export default Instructor;
