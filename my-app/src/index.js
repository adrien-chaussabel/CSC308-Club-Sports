import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class LinkTo extends React.Component{
    render() {
        return <a href = 'calendar.html'> link to cal</a>
    }
}


class Menu extends React.Component{
    render() {
        return <div className="menu"> 
            <img src='/CalPolyLogo.png' alt = 'Cal Poly Logo'/>
            <h1> Club Sports Hub </h1>
            <a class="active" href="#home">Login</a>
            <a href="#news">Forms</a>
            <a href="#contact">Sports</a>
            <a href="calendar.html">Calendar</a>
            <a href="#home">Home</a>
        </div>;
    }
}

class Info extends React.Component{
    render(){
        return <div className="info"> 
            <div id="rectangle" ></div>
            <h1>TEAM OF THE WEEK</h1>
            <h2>WOMEN'S RUGBY</h2>
            <h3>Follow them and <br/>
                come to their home <br/>
                game on Saturday <br/>
                February 8th!</h3>
        </div>
    }
}
  
class Combine extends React.Component{
    render(){
        return <div>
            <LinkTo/>
            <Menu/>
            <Info/>
        </div>
    }
}

ReactDOM.render(<div> <Combine/> </div>, document.getElementById('root'));

serviceWorker.unregister();
