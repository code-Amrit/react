import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
//  const [multi, setMulti]= useState(1)
  // let multi = value * 5;
  

const multibyfive = ()=>{
    //  setMulti(value*5)
    setValue(value+1)
}

  

  return (
    <>
      <h1>Main Value:{value}</h1>
      <button
      onClick={multibyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {value * 5}</h2>
    </>
  )
}

export default App
