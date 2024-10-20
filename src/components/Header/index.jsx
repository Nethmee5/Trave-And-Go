import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Header = () => {
  const navigate = useNavigate();

  const handleSuggestPlaces = () => {
    navigate('/suggested-places');
  };

  return (
    <div className="header">
      <h1 className="heading">Travel Everywhere World</h1>
      <p className="text">We make people alive</p>
      <p className="button" onClick={handleSuggestPlaces}>
        Suggest Places
      </p>
    </div>
  );
};

export default Header;
