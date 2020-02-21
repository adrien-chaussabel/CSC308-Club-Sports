import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class DivTest extends React.Component{
    render() {
        return <div className="menu"> 
            <a class="active" href="#home">Login</a>
            <a href="#news">Forms</a>
            <a href="#contact">Sports</a>
            <a href="#about">Calendar</a>
            <a href="#home">Home</a>
            <h1> Club Sports Hub </h1>
        </div>; 
    }
}

  
ReactDOM.render(<DivTest />, document.getElementById('root'));


/*
var element = React.createElement('h1', {className:'greeting'}, 'Hello word!');


ReactDOM.render(element, document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
