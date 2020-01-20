import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const element = React.createElement('div', {
    className: 'container',
    children: 'Hello M** World'
});

console.log(element);

ReactDOM.render(element, document.getElementById('root'));

