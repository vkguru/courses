import React from 'react';
import productTeam from '../asset/img/product-teams.jpg';
// import innovation from '../asset/img/innovatio-and-strategy.jpg';
import entrepreneur from '../asset/img/entrepreneur.jpg';

function Masterclass() {
  return (
    <section className="section sub">
      <h2>Who's this Masterclass for?</h2>

      <div className="row scr">

        <div className="crd_ lrt">
          <img src={productTeam} alt="Product Teams"/>
          <div className="lrt-txt">
            <h4>PRODUCT AND INNOVATION TEAMS</h4>
            <p>Innovation, strategy, venture and e-business teams in FMCGs, Financial, SAAS, e-commerce, tech companies’ product teams seeking to bring competitive products to markets, or seeking to improve their existing products for competitive advantage and profitability.</p>
          </div>
        </div>

        <div className="crd_ lrt">
          <img src={entrepreneur} alt="Product Teams"/>
          <div className="lrt-txt">
            <h4>Entrepreneurs</h4>
            <p>Business owners, entrepreneurs, who want to bring a solution, product or experience to the market, and are seeking to de-risk their investment by gaining knowledge of their users.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Masterclass;
