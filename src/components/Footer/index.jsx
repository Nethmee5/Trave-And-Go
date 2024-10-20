import React from 'react';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>TRAVEL AND GO</h3>
        <p>
          Made with <span className="heart">&#10084;</span>
        </p>
        <ul className="socials">
          <li>
            <IconButton color="primary" href="#">
              <Facebook />
            </IconButton>
          </li>
          <li>
            <IconButton color="primary" href="#">
              <Instagram />
            </IconButton>
          </li>
          <li>
            <IconButton color="primary" href="#">
              <LinkedIn />
            </IconButton>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Travel And Go</a>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
