import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/* const element = React.createElement('div', {
    className: 'container',
    children: 'Hello M** World'
}); */

//const element = <div className='container'> Hello JSX World</div>

//Selclosing REact elememt
const content = 'Hello Self Tag Element'
const className = 'container'
const props = {
    className: className,
    children: content
}

const element = (
    <div {...props} />
);

console.log(element);

ReactDOM.render(element, document.getElementById('root'));

