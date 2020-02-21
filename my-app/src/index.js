import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class Test extends React.Component {
    render() {
      return <a href='page2.js'>Hello World!</a>;
    }
  }
  
ReactDOM.render(<Test />, document.getElementById('root'));

/*
var element = React.createElement('h1', {className:'greeting'}, 'Hello word!');


ReactDOM.render(element, document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
