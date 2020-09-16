import React from 'react';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="ft">
      <div>&copy; {date} DODO Design Agency</div>
    </footer>
  )
}

export default Footer;
