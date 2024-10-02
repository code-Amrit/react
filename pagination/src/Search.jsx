import React from 'react'
import { useGlobalContext } from './context'

const search = () => {
  const data = useGlobalContext();
  return (
    <div>
      search{data}
    </div>
  )
}

export default search
