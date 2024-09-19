import { useState } from 'react';
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(0);

  // let counter =  50 ;

  const addValue = ()=>{
    // console.log("Clicked",Math.random());
    // counter++;
    // console.log("added",counter);
    if(counter === 20){
      setCounter(counter=20);
    } else{
      // setCounter(++counter);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
    }

  const removeValue = ()=>{
    // console.log("removed",counter);
    if(counter === 0){
      setCounter(counter = 0);
    }else{
      setCounter(--counter);
      
    }
  }




  return (
    <>
     
     <h1> Chai aur react </h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
