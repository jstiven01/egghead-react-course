import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/* const element = React.createElement('div', {
    className: 'container',
    children: 'Hello M** World'
}); */

//const element = <div className='container'> Hello JSX World</div>

//Selclosing REact elememt
/* const content = 'Hello Self Tag Element'
const className = 'container'
const props = {
    className: className,
    children: content
}

const element = (
    <div {...props} />
); */

/* const Message = props => <div>{props.msg}</div>
const element = (
    <div className="container">
        <Message msg="Hello JSX with Props" />
        <Message msg="Wonderful IT" />
    </div>
);
 */

//Function component
/* function SayHelloAsFunction(props){
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>
    )
}

//Validation PropTypes
SayHelloAsFunction.propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
} */

class SayHelloAsComponent extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }
    render() {
        const {firstName, lastName} = this.props
        return (
            <div>
                Hello React component {firstName} {lastName}
            </div>
        )
    }
}

ReactDOM.render(<SayHelloAsComponent firstName='Friedrich React' lastName='Deleuze Component' />, document.getElementById('root'));

