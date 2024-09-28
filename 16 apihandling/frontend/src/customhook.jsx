import axios from 'axios'
import React, { useEffect, useState } from 'react'


const customhook =(urlPath) => {
    
    const [products, setProducts] = useState([])
    const[error,setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        
       ;( async () => {
        try {
            
          setLoading(true);
          setError(false);
          // console.log(error);
          //what if theres an error like e.g. ('/api/productsd')
          const response = await axios.get(urlPath)
          console.log(response.data);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          setError(true);
          // console.log(error)
          setLoading(false);
        }
       } )()
       
    }, [])
    
    return {products,error,loading}
  
}

export default customhook
