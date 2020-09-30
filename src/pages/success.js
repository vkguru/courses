import React from 'react';
import Navbar from '../component/navbar-dark';
import { Link } from 'react-router-dom';

export default function Success() {

  

    fetch('https://dodocourses.herokuapp.com/api/auth/code')
    .then(response => {
      if(response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return (
    <section className="section" id="bg-grey">
      <Navbar />
      <div className="success-modal">
        <div className="ms">

          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.0001 0.777771C18.6049 0.777771 14.3085 2.08108 10.6541 4.52289C6.99963 6.9647 4.15136 10.4353 2.46941 14.4959C0.78746 18.5565 0.347386 23.0246 1.20484 27.3353C2.06229 31.646 4.17875 35.6056 7.28658 38.7135C10.3944 41.8213 14.354 43.9378 18.6647 44.7952C22.9754 45.6527 27.4436 45.2126 31.5041 43.5307C35.5647 41.8487 39.0354 39.0004 41.4772 35.346C43.919 31.6916 45.2223 27.3951 45.2223 23C45.2223 17.1063 42.881 11.454 38.7135 7.28651C34.5461 3.11903 28.8938 0.777771 23.0001 0.777771ZM37.514 15.5417L19.264 33.7778L8.48618 23C8.11782 22.6316 7.91088 22.132 7.91088 21.6111C7.91088 21.0902 8.11782 20.5906 8.48618 20.2222C8.85453 19.8539 9.35413 19.6469 9.87506 19.6469C10.396 19.6469 10.8956 19.8539 11.264 20.2222L19.2917 28.25L34.764 12.7917C34.9463 12.6093 35.1629 12.4646 35.4012 12.3659C35.6395 12.2672 35.8949 12.2164 36.1528 12.2164C36.4108 12.2164 36.6662 12.2672 36.9045 12.3659C37.1428 12.4646 37.3593 12.6093 37.5417 12.7917C37.7241 12.9741 37.8688 13.1906 37.9675 13.4289C38.0662 13.6672 38.117 13.9226 38.117 14.1805C38.117 14.4385 38.0662 14.6939 37.9675 14.9322C37.8688 15.1705 37.7241 15.387 37.5417 15.5694L37.514 15.5417Z" fill="#009A49"/>
          </svg>

          <div className="content">

            <h3>Your payment was successful</h3>
    
            <p id="me">An email has been sent to the email address provided with an access code. 
              Kindly follow the instructions to access the course</p>

            <Link to="/" className="cr-link">Go Back Home</Link>
          </div>


        </div>
      </div>
    </section>
  )
}
