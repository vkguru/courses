import React from 'react';
import NavDark from '../component/navbar-dark';
import Footer from '../component/footer';
import paystackLogo from '../asset/img/paystack-logo.png';
import Quickteller from '../asset/img/Quickteller-logo.png';
import productImage from '../asset/img/product.jpg'


function Pay() {
  const back = () =>  window.history.back();
  return (
    <>
      <NavDark />

      <div className="cart-intro">

        <button className="back" onClick={back}>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.75 7.50156H3.925L8.4625 2.05157C8.67467 1.79629 8.77675 1.46719 8.74627 1.13666C8.7158 0.806128 8.55527 0.501239 8.3 0.289065C8.04473 0.0768921 7.71563 -0.0251853 7.38509 0.00528938C7.05456 0.035764 6.74967 0.196295 6.5375 0.451565L0.2875 7.95156C0.245451 8.01122 0.207849 8.07389 0.175 8.13907C0.175 8.20157 0.175 8.23907 0.0875002 8.30157C0.0308421 8.44489 0.0011764 8.59745 0 8.75156C0.0011764 8.90568 0.0308421 9.05824 0.0875002 9.20156C0.0875002 9.26406 0.0874998 9.30157 0.175 9.36407C0.207849 9.42924 0.245451 9.49191 0.2875 9.55157L6.5375 17.0516C6.65503 17.1927 6.8022 17.3061 6.96856 17.3839C7.13491 17.4617 7.31636 17.5019 7.5 17.5016C7.79206 17.5021 8.07511 17.4004 8.3 17.2141C8.42657 17.1091 8.5312 16.9803 8.60789 16.8348C8.68458 16.6894 8.73182 16.5303 8.74692 16.3665C8.76201 16.2028 8.74466 16.0377 8.69586 15.8807C8.64705 15.7237 8.56775 15.5779 8.4625 15.4516L3.925 10.0016H18.75C19.0815 10.0016 19.3995 9.86987 19.6339 9.63545C19.8683 9.40103 20 9.08309 20 8.75156C20 8.42004 19.8683 8.1021 19.6339 7.86768C19.3995 7.63326 19.0815 7.50156 18.75 7.50156Z" fill="#231F20"/>
          </svg>
          Back
        </button>

        <h3 className="cart-hd">Payment</h3>

      </div>

      <div className="checkout">

        <div className="checkout-form">

          <h3>Express Checkout</h3>

          <div className="checkout-pay">

            <div className="pay-btn">
              <img src={paystackLogo} alt="Paystack Logo" />
            </div>

            <div className="pay-btn">
              <img src={Quickteller} alt="Paystack Logo" />
            </div>

          </div>

          <div className="divider">
            <p> Or </p>
          </div>

          <div className="product-form">

            <h4>Credit Card Details</h4>

            <form className="payment-form">

              <div className="form-group-fl">
                <label>Card Number</label>
                <input type="text" className="pay-form-control" />
              </div>

              <div className="form-group-fl">
                <label>Cardholder Name</label>
                <input type="text" className="pay-form-control" />
              </div>

              <div className="fr">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" className="pay-form-control" placeholder="MM/YY" />
                </div>

                <div className="form-group">
                  <label>CVC/CVV</label>
                  <input type="text" className="pay-form-control" />
                </div>
              </div>

              <h4>Billing Information</h4>

              <div className="fr">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="pay-form-control" />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="pay-form-control" />
                </div>
              </div>

              <div className="form-group-fl">
                <label>Company’s Name</label>
                <input type="text" className="pay-form-control" />
              </div>

              <div className="form-group-fl">
                <label>Address</label>
                <input type="text" className="pay-form-control" />
              </div>

              <div className="form-group-fl">
                <label>City</label>
                <input type="text" className="pay-form-control" />
              </div>

              <div className="fr">
                <div className="form-group">
                  <label>State</label>
                  <input type="text" className="pay-form-control" placeholder="MM/YY" />
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" className="pay-form-control" />
                </div>
              </div>

              <div className="form-group-fl">
                <label>Phone Number</label>
                <input type="tel" className="pay-form-control" />
              </div>

              <div className="form-group-fl">
                <label>Email Address</label>
                <input type="email" className="pay-form-control" />
              </div>

              <div id="checkout-cta">
                <button className="courses-link b-pay">Make Payment</button>
              </div>

            </form>
          </div>
        </div>

        {/* Checkout price and product */}

        <div className="checkout-product">

          <div className="c-p-d">
            
            <div className="tx-lr">
              <div className="prod-checkgroup-img">
                <img src={productImage} alt="Product" />
              </div>

              <div className="prod-text-ck">
                <h3>Prototyping for Businesses Masterclass</h3>
                <p>Introduction to Selling Workshop</p>
              </div>

              <div className="checkout-output">
              <div className="sel-output">

                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>

                </div>

                <div className="price">
                  <h3>NGN 20,000</h3>
                </div>
              </div>

            </div>

            <hr />

            <div className="tx-lr fl">

            <p>Subtotal: <span>NGN 20,000</span></p>
            <p>Tax: <span>NGN 1000</span></p>
            <p id="total">Total <span>NGN 21,000</span></p>

            </div>

          </div>

          
          
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Pay;
