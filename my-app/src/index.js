import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

// Comment out when revert
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
