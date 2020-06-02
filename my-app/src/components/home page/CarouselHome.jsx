import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const styles = {
  marginTop: '-310px',
  marginLeft: '55px',
  maxWidth: '700px',
};

function Gallery() {
  return (
    <div style={styles}>
      <Carousel
        dynamicHeight
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        autoPlay
        transitionTime={300}
        showArrows={false}
      >
        <div>
          <img width="700" height="455" src="https://www.sanluisobispo.com/sports/college/cal-poly/tm6s8x/picture221492215/alternates/LANDSCAPE_768/IdahoCalPolyFootball0155" alt="Football" />
        </div>
        <div>
          <img width="700" height="455" src="https://www.dailybulletin.com/wp-content/uploads/migration/2014/201403/SPORTS_140319431_AR_0_YZOYHTSKYTWC.jpg?w=535" alt="NCAA" />
        </div>
        <div>
          <img width="700" height="445" src="/PlaceHolderImage.jpg" alt="Rugby" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;