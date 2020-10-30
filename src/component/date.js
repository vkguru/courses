import React from 'react';

 function DateCal() {

  const regDate = localStorage.getItem('date_created');
  const date = new Date(regDate);
  date.setDate(date.getDate() + 90)
  const dd = date.getDate();
  const mm = date.getMonth();

  //Array of months in a year
  const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  //Specific month in the end
  const monthInYear = months[mm];

  const yy = date.getFullYear();

  //Days in a month in English

  const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

  const dayInEnglish = days[dd];

  const futureDate = `${dayInEnglish} ${monthInYear}, ${yy}`;

  return (
    <>
      <div className="notice">
        <h2>Your access to this course expires on <span>{futureDate}</span>.</h2>
      </div>
    </>
  )
}

export default DateCal;
