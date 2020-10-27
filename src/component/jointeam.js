import React from 'react';
import { Link } from 'react-router-dom';
import team from '../asset/img/team.jpg';

function Jointeam() {

  // const [sendMail, setSendMail] = useState({

  // })

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
      <section className="section sub-grey">

        <h3 className="sub-grey-heading">Join as a team</h3>
        <p className="sub-grey-text">Teams of 5 or more gets a discount</p>

        <div className="team-img">
          <img src={team} alt="Team" />
        </div>

        <div className="cta-team">
          <Link to="/teams" className="courses-link">Join As A Team</Link>
        </div>
      
      </section>

      <section className="section sub">
        <div className="subc-text">
          <p>Interested in getting updates, free tools and videos on how to make your offerings more innovative and customer-friendly?</p>
          <form action="https://dodo.us10.list-manage.com/subscribe/post?u=26622333f91e30792644adb18&amp;id=4657c52afa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" onSubmit={handleSubmit} className="validate" noValidate>
            <input type="email" placeholder="username@email.com" name="EMAIL" id="mce-EMAIL" className="required form-control"/>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="submit button"/>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display:'none'}}></div>
              <div className="response" id="mce-success-response" style={{display:'none'}}></div>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_26622333f91e30792644adb18_4657c52afa" tabIndex="-1" value="" /></div>
              {/* <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="submit button" /></div> */}
            </div> 
            {/* <input type="submit" value="Subscribe" className="submit"/> */}
          </form>
        </div>
        
      </section>
    </>
  )
}

export default Jointeam;