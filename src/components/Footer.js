// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
          <span className="company-name">Your Company Name</span>
        </div>
        <div className="right-content">
          <span className="github-mail">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
        </div>
      </div>
      <div className="copyright">&copy; 2023 Your Company Name. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
