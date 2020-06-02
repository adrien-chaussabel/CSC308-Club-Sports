import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  marginTop: '50px',
  marginLeft: '65px',
  maxWidth: '600px',
};

function SportCarousel() {
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
          <img width="600" height="375" src="https://www.sanluisobispo.com/sports/college/cal-poly/tm6s8x/picture221492215/alternates/LANDSCAPE_768/IdahoCalPolyFootball0155" alt="Hong Kong" />
        </div>
        <div>
          <img width="600" height="375" src="https://www.dailybulletin.com/wp-content/uploads/migration/2014/201403/SPORTS_140319431_AR_0_YZOYHTSKYTWC.jpg?w=535" alt="Singapore" />
        </div>
        <div>
          <img width="600" height="375" src="https://bhsuathletics.com/images/2016/11/17/Erickson_Rachel_2.jpg" alt="Japan" />
        </div>
      </Carousel>
    </div>
  );
}

export default SportCarousel;
