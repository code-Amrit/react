import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// function MyApp(){
//     return(
//         <div>
//             <h1>custom !!!</h1>
//         </div>
//     )
// }
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>vist google</a>
)
const anotherUser = " Amrit";
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit Google',
    anotherUser //can t wite if else or logic here js denies it as it is in object

)

ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
    // anotherElement
     <App/>  // <MyApp/> //MyApp ()
  
)
