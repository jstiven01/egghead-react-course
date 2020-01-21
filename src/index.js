import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './index.css';
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
/* 
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
} */

/* function Message({message}){
    return(
        <div>
            {
                message ? (
                    <div>{message}</div>
                ) : (
                    <div>NO Message because of Null</div>
                )
            }
        </div>
    )
} */


/*  Basic CSS Styling
const element = (
    <div>
        <div className='box box--small' style={{paddingLeft:'20px'}}>box</div>
    </div>
; 
*/
// Making Function component Box
/* function Box({style, ...rest}){
    console.log(style)
    return (
        <div
        className= "box box--small"
        style={{paddingLeft:20, ...style}}
        {...rest}
        />
    )
}
// CHECK STYLED COMPONENTS, EMOTION and GLAMOROUS
const element = (
    <div>
        <Box style={{backgroundColor: 'lightblue'}} >
            small box
        </Box>
    </div>
) */
/* const state = {eventCount: 0, username: ''}

function App(){
    return (
        <div>
            <p>
                There have been {state.eventCount} events
            </p>
            <p>
                <button onClick={increment}>This is a button</button>
            </p>
            <p>You typed: {state.username}</p>
            <p>
                <input onChange={updateUsername} />
            </p>
        </div>

    )
}
function increment(){
    setState({
        eventCount: state.eventCount + 1,
    })
}

function updateUsername (event){
    setState({username: event.target.value,})
}

function setState(newState) {
    Object.assign(state, newState)
    renderApp()
}

function renderApp() {
//ReactDOM.render(<SayHelloAsComponent firstName='Friedrich React' lastName='Deleuze Component' />, document.getElementById('root'));
ReactDOM.render(<App />
    , document.getElementById('root')
)
}

renderApp()
 */

 //Use Class Components with React

/*  class Counter extends React.Component {
     state = {
         count: 0
     }
     handleClick = () => {
         this.setState(({count}) => ({
             count: count + 1,
         }))
     }

     render(){
         return (
             <button onClick={this.handleClick}>
                 {this.state.count}
             </button>
         )
     }
 } */
 
 // Basic Forms with React
 class NameForm extends React.Component {
     handleSubmit = event => {
         event.preventDefault();
         console.log({target: event.target});
         console.log('event[]: ',event.target[0].value);
         console.log('event.elements: ',event.target.elements.username.value)
         console.log('this input',this.inputNode.value)
     }

     render(){
         return (
             <form onSubmit={this.handleSubmit}>
                 <label>Name : </label>
                 <input type="text" name="username" ref={node => (this.inputNode = node)}/>
                 <button type="submit">Submit</button>
             </form>
         )
     }

 }

 ReactDOM.render(
     <NameForm />, document.getElementById('root')
 )