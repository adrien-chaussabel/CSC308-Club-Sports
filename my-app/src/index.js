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

class Info extends React.Component{
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
        </div>
    }
}

class HomePage extends React.Component{
    render(){
        return <div>
             <Title/>
            <Menu/>
            <PlaceHolderImage/>
            <Info/>
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
