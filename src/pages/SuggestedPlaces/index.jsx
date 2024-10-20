import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sliderImages from '../../components/Carousel/visitedPlaces';
import { Button } from '@mui/material';
import './index.css';

const SuggestedPlaces = () => {
  const navigate = useNavigate();
  const visitedPlaces = useSelector((state) => state.places.visitedPlaces);

  const visitedCountries = sliderImages
    .filter((place) => visitedPlaces.includes(place.id))
    .map((place) => place.country);

  const suggestedPlacesByCountry = sliderImages.filter((place) =>
    visitedCountries.includes(place.country)
  );

  const additionalSuggestedPlaces = sliderImages.filter(
    (place) => !visitedCountries.includes(place.country)
  );

  const combinedSuggestedPlaces = [
    ...suggestedPlacesByCountry,
    ...additionalSuggestedPlaces.slice(0, 5),
  ];

  return (
    <div className="suggested-places">
      <h2>Suggested Places</h2>
      <Button
        sx={{ marginTop: '20px', backgroundColor: 'gray', color: '#000' }}
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Back
      </Button>
      <div className="places-list">
        {combinedSuggestedPlaces.length > 0 ? (
          combinedSuggestedPlaces.map((place) => (
            <div key={place.id} className="place-card">
              <img
                src={place.image}
                alt={place.title}
                className="place-image"
              />
              <div className="place-details">
                <h3 className="place-title">{place.title}</h3>
                <p className="place-description">{place.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No suggested places available.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestedPlaces;
