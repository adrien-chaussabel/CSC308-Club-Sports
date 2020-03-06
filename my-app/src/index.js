import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';
import Events from './components/events/events';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Menu extends React.Component{
    render() {
        return <Router>
            <div className="menu"> 
                <img src='/CalPolyLogo.png' alt='Cal Poly Logo'/>
                <h1>CLUB SPORTS HUB</h1>
                <Link to="/login">LOGIN</Link>
                <Link to="/forms">FORMS</Link>
                <a href="/.">SPORTS</a>
                <Link to="calendar">CALENDAR</Link>
                <Link to="/">HOME</Link>
            </div>; 
            
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>;
                </Route>
            </Switch>
        </Router>
    }
}


class Title extends React.Component {
    render() {
      return <div className="title"> 

      <h3>CAL POLY CLUB SPORTS</h3>
    </div> 
    }
}

class AltTitle extends React.Component {
    render() {
      return <div className="title"> 

      <h3>LOGIN PAGE</h3>
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


class Info extends React.Component{
    // TODO: Make text wrap instead of having breaks
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
            <img src='/instagram.png' className='instagramIcon' alt='Instagram'></img>
            </a>
        </div>
    }
}

class HomePage extends React.Component{
    render(){
        return <div>
            <Events/>
            <Title/>
            <PlaceHolderImage/>
            <Info/>
        </div>;
    }
}

class LoginPage extends React.Component{
    render(){
        return <div>
            <Events/>
            <AltTitle/>
            <PlaceHolderImage/>
            <Info/>
        </div>;
    }
}

  
ReactDOM.render(<Menu/>, document.getElementById('root'));


serviceWorker.unregister();
