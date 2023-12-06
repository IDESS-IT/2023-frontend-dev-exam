import React from 'react';
import './Footer_Style.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; Copyright {currentYear}. All Rights Reserved | <a href="https://www.idessit.com">IDESS Interactive Technologies (IDESS IT) Inc.</a></p>
    </footer>
  );
};

export default Footer;