
import './App.css'
import Search from './Search.jsx'
import Stories from './Stories.jsx'
import Pagination from './Pagination.jsx'
import { useGlobalContext } from './context.jsx'
// import { useContext } from 'react'
// import { AppContext } from './context.jsx'

function App() {
//  const data = useContext(AppContext)
 const data = useGlobalContext();

  return (
    <>
      <h1>hi{data}</h1>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}

export default App
