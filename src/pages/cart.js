import React, {useState} from 'react';
import NavDark from '../component/navbar-dark';
import Footer from '../component/footer';
import productImage from '../asset/img/product.jpg'
import Signup from '../pages/sign-up';

function Cart() {
  const back = () =>  window.history.back();
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  let popup;

  if(modalIsOpen) {
    popup = 
        <div className="modal">
            <div className="modal-hld">
              <div className="cls" onClick={() => setmodalIsOpen(false)}>Close</div>
              <Signup />
            </div>
        </div>
  }

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

        <h3 className="cart-hd">Cart</h3>

      </div>

      <div className="cart-prod">

        <div className="cart-prod-detail">

          <div className="prod-img">
            <img src={productImage} alt="product" />
          </div>

          <div className="prod-text">
            <h3>Prototyping for Businesses Masterclass</h3>
            <p>Introduction to Selling Workshop</p>
          </div>
        </div>

        <div className="prod-qty">
          {/* <select>
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
          </select> */}
        </div>

        <div className="prod-price">
          <h3>NGN 5,000</h3>
          <p>Team discount reflects as quantity increases</p>
        </div>

        <div className="del">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="#c4c4c4" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.61542 -0.0286255C7.80804 -0.0286255 6.35604 1.47322 6.35604 3.28891V3.6923H2.69235C2.18373 3.6923 1.76927 4.10676 1.76927 4.61537V5.53845H0.846191V7.3846H2.69235V21.2308C2.69235 22.7492 3.94311 24 5.46158 24H16.5385C18.057 24 19.3077 22.7492 19.3077 21.2308V7.3846H21.1539V5.53845H20.2308V4.61537C20.2308 4.10676 19.8163 3.6923 19.3077 3.6923H15.644V3.28799C15.644 1.47322 14.192 -0.0286255 12.3847 -0.0286255H9.61542ZM9.61542 1.87476H12.3847C13.1268 1.87476 13.7407 2.4803 13.7407 3.28799V3.6923H8.2585V3.28799C8.2585 2.4803 8.87234 1.87568 9.6145 1.87568L9.61542 1.87476ZM4.5385 7.3846H9.26927C9.38373 7.39661 9.49727 7.41322 9.61542 7.41322H12.3847C12.5028 7.41322 12.6154 7.39661 12.7308 7.3846H17.4616V21.2308C17.4616 21.7505 17.0582 22.1538 16.5385 22.1538H5.46158C4.94188 22.1538 4.5385 21.7505 4.5385 21.2308V7.3846ZM6.38465 9.23076V20.3077H8.23081V9.23076H6.38465ZM10.077 9.23076V20.3077H11.9231V9.23076H10.077ZM13.7693 9.23076V20.3077H15.6154V9.23076H13.7693Z" />
          </svg>
        </div>
      </div>

      <div className="prod-pricing">
        <div className="pricing-container">
          <p>Subtotal: <span>NGN 5,000</span></p>
          <p>Subcharge: <span>-</span></p>
          <p id="total">Total <span>NGN 5,000</span></p>
          {/* <Link to='/register' className="courses-link b-nxt">Checkout</Link> */}
          <button onClick={() => setmodalIsOpen(true)} className="courses-link b-nxt">Checkout</button>
        </div>
      </div>

      <div className="cr-modal">
          {popup}
      </div>

      <Footer />
    </>
  )
}

export default Cart;