import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class LinkTo extends React.Component{
    render() {
        return <a href = 'calendar.html'> link to cal</a>
    }
}


class DivTest extends React.Component{
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
  
ReactDOM.render(<div> <DivTest/> </div>, document.getElementById('root'));

serviceWorker.unregister();
