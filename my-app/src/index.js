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

class PlaceHolderImage extends React.Component{
    render(){
        return <div className="teamOfTheWeek">
            <img src='/PlaceHolderImage.jpg' alt= 'Placeholder'></img>
        </div>;
    }
}

class HomePage extends React.Component{
    render(){
        return <div>
            <Menu/>
            <PlaceHolderImage/>
        </div>;
    }
}
  
ReactDOM.render(<HomePage/>, document.getElementById('root'));


/*
var element = React.createElement('h1', {className:'greeting'}, 'Hello word!');


ReactDOM.render(element, document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
