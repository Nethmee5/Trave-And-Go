import { useLocation } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PlaceDetails = () => {
  const { state } = useLocation();
  const { title, country, description, image } = state;

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <CardMedia sx={{ height: 300 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="h6" component="div">
            {country}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceDetails;
