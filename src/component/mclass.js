import React from 'react';
import productTeam from '../asset/img/product-teams.jpg';
import innovation from '../asset/img/innovatio-and-strategy.jpg';
import entrepreneur from '../asset/img/entrepreneur.jpg';

function Masterclass() {
  return (
    <section className="section sub">
      <h2>Who's this Masterclass for?</h2>

      <div className="row">

        <div className="crd lrt">
          <img src={productTeam} alt="Product Teams"/>
          <div className="lrt-txt">
            <h4>Product Team</h4>
            <p>Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas</p>
          </div>
        </div>

        <div className="crd lrt">
          <img src={innovation} alt="Product Teams"/>
          <div className="lrt-txt">
            <h4>Innovation and Strategy</h4>
            <p>Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas</p>
          </div>
        </div>

        <div className="crd lrt">
          <img src={entrepreneur} alt="Product Teams"/>
          <div className="lrt-txt">
            <h4>Entrepreneurs</h4>
            <p>Sed eget gravida nunc venenatis, in. Id porta aliquam a amet, fames sit tortor nibh egestas</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Masterclass;
