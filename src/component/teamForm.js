import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';

class TeamForm extends Component {
  render() {
    return (
        <Mailchimp
        action='https://dodo.us10.list-manage.com/subscribe/post?u=26622333f91e30792644adb18&amp;id=42f5dd2cc8'
        fields={[
          {
            name: 'MMERGE3',
            placeholder: 'Company name',
            type: 'text',
            required: true
          },
          {
            name: 'EMAIL',
            placeholder: 'Email Address',
            type: 'email',
            required: true
          },
          {
            name: 'MMERGE4',
            placeholder: 'Size of Team ',
            type: 'text',
            required: true
          },
          {
            name: 'MMERGE6',
            placeholder: 'What Other Courses Around Prototype Will Your Team',
            type: 'text',
            required: true
          }
        ]}

        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Submit"
          }
        }

        className='team-form'
        buttonClassName='submit'
        
        />
    );
  }
}

export default TeamForm;
