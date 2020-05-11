/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  marginTop: '-310px',
  marginLeft: '55px',
  maxWidth: '600px',
};

function Gallery() {
  return (
    <div style={styles}>
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        transitionTime={300}
        showArrows={false}
      >
        <div>
          <img width="600" height="375" src="https://www.sanluisobispo.com/sports/college/cal-poly/tm6s8x/picture221492215/alternates/LANDSCAPE_768/IdahoCalPolyFootball0155" alt="Football" />
        </div>
        <div>
          <img width="600" height="375" src="https://www.dailybulletin.com/wp-content/uploads/migration/2014/201403/SPORTS_140319431_AR_0_YZOYHTSKYTWC.jpg?w=535" alt="NCAA" />
        </div>
        <div>
          <img width="600" height="375" src="/PlaceHolderImage.jpg" alt="Rugby" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
