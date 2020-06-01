import React from 'react';
import '../../app.css';

const Info = () => (
  <div className="info">
    <div id="rectangle" />
    <h1>TEAM OF THE WEEK</h1>
    <h2>
      WOMEN&apos;S
      {' '}
      <br />
      RUGBY
    </h2>
    <h3>
      Follow them and
      <br />
      come to their home
      <br />
      game on Saturday
      <br />
      February 8th!
    </h3>
    <img src="/PlaceHolderImage.jpg" alt="Team of the week" />
    <a href="https://instagram.com">
      <img src="/instagram.png" className="instagramIcon" alt="Instagram" />
    </a>
  </div>
);

export default Info;
