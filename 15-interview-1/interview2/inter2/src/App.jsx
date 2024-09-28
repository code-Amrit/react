import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("app rendered",Math.random());
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 1
  })
 

  const clickme = ()=>{
    
     setValue({
      value: 1 
     })
    // setValue(3)
    // setValue(1)
    // console.log("logged");
}

 //useeffect ch dependency nhi rakhni value nu but value.value rakh sakte hain
useEffect(()=>{
  console.log("useeffect");
},[value.value])


  return (
    <>
      <h1>Main Value:{value.value}</h1>
      <button
      onClick={clickme}
      >Click to multiply by 5</button>
      
    </>
  )
}

export default App
