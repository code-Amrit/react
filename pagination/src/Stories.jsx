import React, {useEffect} from 'react'

const stories = () => {

  let api = 'https://dummyjson.com/products?limit=10'

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json()
      console.log(data);   
      
} catch (error) {
console.error('Error fetching data:', error);
}
};



  useEffect(() => {
    fetchApiData(api);
    
  }, [])
  

  return (
    <>
     <h1>My Tech News Post</h1>
    </>
  )
}

export default stories
