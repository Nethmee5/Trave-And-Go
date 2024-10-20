import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';  
import { toggleVisited } from '../../redux/placesSlice';  
import { Button } from '@mui/material';
import './index.css';
import sliderImages from './visitedPlaces';  

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const visitedPlaces = useSelector((state) => state.places.visitedPlaces);  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleToggleVisited = (id) => {
    dispatch(toggleVisited(id));  
  };
  const handleViewMore = (item) => {
    navigate('/place-details/${id}', { state: item }); 
  };
  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImages.map((item) => (
          <Card className="slider" key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title} - {item.country}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions className="card-actions">
              <Checkbox
                {...label}
                checked={visitedPlaces.includes(item.id)} 
                onChange={() => handleToggleVisited(item.id)}  
              />
              <h5>{visitedPlaces.includes(item.id) ? 'Visited' : 'Mark As Visited'}</h5>
              <Button variant='contained' onClick={() => handleViewMore(item)}>View More</Button>        
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
