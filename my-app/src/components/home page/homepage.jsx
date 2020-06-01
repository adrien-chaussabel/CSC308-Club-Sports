import React from 'react';
import '../../app.css';
import Title from './title';
import Info from './info';
import Events from '../events/events';
import Gallery from './carouselHome';


const HomePage = () => (
  <div>
    <Events />
    <Title />
    <Info />
    <Gallery />
  </div>
);

export default HomePage;
