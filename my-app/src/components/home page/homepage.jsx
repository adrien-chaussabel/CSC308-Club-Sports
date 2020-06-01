import React from 'react';
import '../../app.css';
import Title from './Title';
import Info from './Info';
import Events from '../events/events';
import Gallery from './CarouselHome';


const HomePage = () => (
  <div>
    <Events />
    <Title />
    <Info />
    <Gallery />
  </div>
);

export default HomePage;
