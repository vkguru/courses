import React from 'react';

 function DateCal() {

  const regDate = localStorage.getItem('date_created');
  const date = new Date(regDate);
  date.setDate(date.getDate() + 90)
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();
  const futureDate = `${dd}/${mm}/${yy}`;

  return (
    <>
      <div className="notice">
        <h2>Your access to this course expires on</h2>
        <h2 className="exp-date">{futureDate}</h2>
      </div>
    </>
  )
}

export default DateCal;
