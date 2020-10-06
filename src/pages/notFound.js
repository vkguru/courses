import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <div style={{textAlign: 'center', paddingTop: '2rem'}}>
      <h4 style={{fontSize: '2rem', fontFamily: 'Gilroy SemiBold'}}>The Page You are looking does not exist</h4>
      <Link to="/" className="courses-link">Home</Link>
    </div>
  )
}
