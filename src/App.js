import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  
import store from './redux/store';     
import Navbar from "components/Navbar";   
import HomePage from "pages/HomePage";   
import SuggestedPlaces from './pages/SuggestedPlaces';
import PlaceDetails from './pages/PlacesDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/suggested-places" element={<SuggestedPlaces />} />
          <Route path="/place-details/:id" element={<PlaceDetails />} /> 
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
