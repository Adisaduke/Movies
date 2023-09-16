import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='media-icons'>
        {/* Add your social media icons or links here */}
        <a href='#'><i className='fab fa-facebook-f'></i></a>
        <a href='#'><i className='fab fa-twitter'></i></a>
        <a href='#'><i className='fab fa-instagram'></i></a>
      </div>
      <div className='links'>
        <ul>
          <li><a href='#'>Conditions of Use</a></li>
          <li><a href='#'>Privacy & Policy</a></li>
          <li><a href='#'>Press Room</a></li>
        </ul>
      </div>
      <div className='copyright'>
        <p>&#169; 2023 MovieBox by Adisa Rasak Opeyemi</p>
      </div>
    </div>
  );
}

export default Footer;
