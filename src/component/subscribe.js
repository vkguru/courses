import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';

class Subscribe extends Component {
  render() {
    return (
        <Mailchimp
        action='https://dodo.us10.list-manage.com/subscribe/post?u=26622333f91e30792644adb18&amp;id=056f5c4280'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'username@email.com',
            type: 'email',
            required: true,
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe"
          }
        }
        className='sub-form'
        />
    );
  }
}

export default Subscribe;
