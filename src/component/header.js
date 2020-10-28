import React from 'react';
import Banner from '../asset/img/courses-banner.jpg';

 function Header() {
  return (
    <header className="hero">
      <div className="hero-banner">
        <div className="banner-img">
          <img src={Banner} alt="courses banner" />
        </div>

        <div className="banner-text">
          <h1>Prototyping for Businesses Masterclass</h1>
          <h2>Introduction to Selling Workshop</h2>
          <div className="vid-btn">
            <a href="#pre">
              <svg width="82" height="51" viewBox="0 0 82 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="11.6133" y="8.18408" width="58.8969" height="36.4567" fill="white"/>
                <path d="M80.2228 10.9122C80.8565 14.8906 81.1733 18.8122 81.1733 22.6769V28.1331L80.2228 39.8978C79.7159 43.1942 78.6386 45.5812 76.9911 47.0589C75.2168 48.6503 72.5554 49.6733 69.0068 50.128C65.585 50.3553 61.4978 50.5258 56.7453 50.6395C51.9927 50.7532 48.0957 50.81 45.054 50.81H40.4916C26.4241 50.6963 17.2359 50.469 12.9269 50.128L11.4061 49.9575L8.93477 49.6165L6.5585 48.764L4.08718 47.0589L2.18617 44.2456L1.14061 41.0913L0.760406 39.8978C0.253469 35.9194 0 31.9978 0 28.1331V22.6769L0.760406 10.9122C1.26734 7.61582 2.34458 5.22877 3.99213 3.75107C5.76641 2.04604 8.4912 1.02302 12.1665 0.682013C15.5883 0.454676 19.6438 0.284172 24.333 0.170503C29.0222 0.0568345 32.8876 0 35.9292 0H40.4916C51.8977 0 61.4028 0.227338 69.0068 0.682013C72.5554 1.02302 75.2168 2.04604 76.9911 3.75107C77.498 4.20575 77.9416 4.74568 78.3218 5.37086C78.702 5.99604 79.0188 6.62121 79.2723 7.24639C79.5258 7.87157 79.7159 8.46833 79.8426 9.03668C79.9693 9.60502 80.0961 10.0597 80.2228 10.4007V10.9122ZM51.5175 25.9165L54.1789 24.723L32.3172 14.4928V34.9532L51.5175 25.9165Z" fill="#FF0000"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;