import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

export default function Provider() {
  const publicKey = "pk_test_c001786a4a1509bc3aea633b6aba21620837e88a";
  const amount = 5000 * 100; // Remember, set in kobo!
  const emailGet = sessionStorage.getItem( "email" );
  const [email, setEmail] = useState(emailGet);
  const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      // phone,
    },
    publicKey,
    text: "Pay Now to Join Masterclass",
    onSuccess: () => {
      window.location = '/success'
    },
    onClose: () => {},
  }

  return (
    <>
        <div className="item">
          <div className="item-details">
            {/* <p>{amount}</p> */}
          </div>
        </div>
          <form>

            <div className="form-group-py">
              <label>Name</label>
              <input
                type="text"
                id="name" value={name}
                onChange={(e) => setName(e.target.value)}
                className="pay-form-control"
              />
            </div>

            <div className="form-group-py">
              <label>Email</label>
              <input
                type="text"
                id="email" value={emailGet}
                onChange={(e) => setEmail(emailGet)}
                className="pay-form-control"
              />
            </div>
            {/* <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="pay-form-control"
            /> */}

          </form>
          <PaystackButton {...componentProps} className="submit py" />
    </>
  )
}
