import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonOne() {
  return (
    <>
      <p>
        <Link to="/course-board/4" className="accordion__link">
          <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
          Setting goals and determining the right questions
        </Link>
      </p>
      <p>
        <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
        Think as you build
      </p>
      <p>
        <svg width='15' height='15' viewBox='0 0 19 19' fill='none'><circle cx='9.458' cy='9.75' r='9' fill='#272C2E'></circle><path d='M14.85 9.75l-8.088 4.382V5.368L14.85 9.75z' fill='#fff'></path></svg>
        Planning for success
      </p>
    </>
  )
}
