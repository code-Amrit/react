import React, {useEffect, useState} from 'react'
import axios from 'axios'


const stories = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
 
  const getProducts = async () => {
    setLoading(true)
    const res = await axios.get('https://dummyjson.com/products?limit=10');
    const data = await res.data.products

    console.log("res",res);
    
    console.log("data",data);
    setProducts(data)
    setLoading(false)  
  }

  useEffect(() => {
    getProducts()
  }, []);

  const handlePagination = async()=>{
    setLoading(true)
    const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page*10}`);
    const data = await res.data.products
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    handlePagination()
  }, [page]);

  const handleNext = async ()=>{
    if (page >=9) {
      setPage(0)
    } else {
      setPage((prev)=> prev + 1)
    }
    
  }
  const handlePrev = async ()=>{
    if (page <= 0) {
      setPage(9)
    } else {
      setPage((prev)=> prev - 1)
    }
    
  }



  return (
    <>
      <h1>Products from Dummy API</h1>
    <div className=' mx-auto mt-3 flex justify-between items-center'>
     <button onClick={handlePrev}>Prev</button>
     <p className='my-auto' >{page + 1}of 10</p>
     <button onClick={handleNext}>Next</button>
    </div>


    {loading ? (
  <p className='text-center text-9xl'>Loading...</p>
) : (
  <div className='flex flex-wrap justify-center items-center w-full'>
    {products.map((product, index) => {
      return (
        <div key={index} className='flex justify-center items-center m-3 w-1/6'>
          <div className='flex-1 border-2 p-4 w-full h-96 flex flex-col justify-between'>
            {/* Image Container */}
            <div className='h-40 flex justify-center items-center'>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className='max-h-full max-w-full object-contain'
              />
            </div>
            {/* Title */}
            <h5 className='my-2 text-center '>{product.title}</h5>
            {/* Price */}
            <p className='my-2 text-center'>
              <b>Price: ${product.price}</b>
            </p>
            {/* Button */}
            <div className='mt-auto w-full'>
              <button className='w-full bg-blue-500 text-white p-2 rounded'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}


    </>
  )
}

export default stories
