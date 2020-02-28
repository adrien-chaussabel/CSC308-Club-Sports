import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class Menu extends React.Component{
    render() {
        return <div className="menu"> 
            <img src='/CalPolyLogo.png' alt='Cal Poly Logo'/>
            <h1>CLUB SPORTS HUB</h1>
            <a class="active" href="#home">LOGIN</a>
            <a href="#news">FORMS</a>
            <a href="#contact">SPORTS</a>
            <a href="#about">CALENDAR</a>
            <a href="#home">HOME</a>
        </div>; 
    }
}

class Title extends React.Component {
    render() {
      return <div className="title"> 

      <h3>CAL POLY CLUB SPORTS</h3>
    </div> 
    }
  }

class PlaceHolderImage extends React.Component{
    render(){
        return <div className="placeholderImage">
            <img src='/PlaceHolderImage.jpg' alt= 'Placeholder'></img>
        </div>;
    }
}

class TeamOfTheWeek extends React.Component{
    render(){
        return <div className="info"> 
            <div id="rectangle" ></div>
            <h1>TEAM OF THE WEEK</h1>
            <h2>WOMEN'S <br/>RUGBY</h2>
            <h3>Follow them and <br/>
                come to their home <br/>
                game on Saturday <br/>
                February 8th!</h3>
            <img src='/PlaceHolderImage.jpg' alt='Team of the week'></img>
            <a href="https://instagram.com">
            <img src='/instagram.png' class='instagramIcon' alt='Instagram'></img>
            </a>
        </div>
    }
}

class EventBox extends React.Component{
    //Class that is going to render each event.
    render() {
        return <div className="event">
            <h2>{this.props.date}</h2>
            <h1>{this.props.club}</h1>
            <h2>{this.props.location}</h2>
            <h2>{this.props.time}</h2>
            <h3>see details</h3>
        </div>
    }
}

class EventsList extends React.Component{
    render() {
        return <div>
        <EventBox 
            date="Feb 1st" 
            club="MENS SOCCER"
            location="UCLA"
            time="2:00p.m"></EventBox>
        <EventBox
            date="Feb 6th"
            club="DISTANCE CLUB"
            location="BBQ Fundraiser on Dexter Lawn"
            time="11:00a.m"></EventBox>
        <EventBox
            date="Feb 8th"
            club="WOMENS RUGBY"
            location="CalPoly"
            time="12:00p.m"></EventBox>
        <EventBox
            date="Feb 12th"
            club="SWIM CLUB"
            location="Stanford University"
            time="1:00p.m"></EventBox>
        </div>
    }
}

class HomePage extends React.Component{
    render(){
        return <div>
            <Title/>
            <Menu/>
            <PlaceHolderImage/>
            <TeamOfTheWeek/>
        </div>;
    }
}
  
ReactDOM.render(<HomePage/>, document.getElementById('root'));


serviceWorker.unregister();
