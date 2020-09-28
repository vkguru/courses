import React from 'react';
import { Link } from 'react-router-dom';
import team from '../asset/img/team.jpg';

function Jointeam() {
  return (
    <>
      <section className="section sub-grey">

        <h3 className="sub-grey-heading">Join as a team</h3>
        <p className="sub-grey-text">Teams of 5 or more gets a discount</p>

        <div className="team-img">
          <img src={team} alt="Team" />
        </div>

        <div className="cta-team">
          <Link to="/cart" className="courses-link">Join As A Team</Link>
        </div>
      
      </section>

      <section className="section sub">
        <div className="subc-text">
          <p>Subscribe to gain more knowledge get free tools, ebooks and resources for free in your mail</p>
          <form>
            <input type="email" placeholder="username@email.com" className="form-control"/>
            <input type="submit" value="Subscribe" className="submit"/>
          </form>
        </div>
        
      </section>
    </>
  )
}

export default Jointeam;