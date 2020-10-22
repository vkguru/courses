import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroPlaylist() {
  return (
    <>
      <p>
        <Link to="/course-board" className="accordion__link">
          <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
          History/About
        </Link>
      </p>
      <p>
        <Link to="/course-board/2" className="accordion__link">
          <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
          Why prototype? Why test?
        </Link>
      </p>
      <p>
        <Link to="/course-board/3" className="accordion__link">
          <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
          Types of Prototypes
        </Link>
      </p>
    </>
  )
}
