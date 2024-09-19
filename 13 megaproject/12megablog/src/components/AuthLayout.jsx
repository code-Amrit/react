import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication = true}) {
 
    const navigate = useNavigate()
    const [loader,setLoader]= useState(true)
    const authStatus= useSelector(state => state.auth.status)

    useEffect(()=>{

        // if (authStatus ===true){
        //     navigate('/')
        // }else if(authStatus=== false){
        //     navigate('/login')
        // }

            //true && false//suppose app auth nahi ho !== true (true)
         if(authentication && authStatus !== authentication){
            navigate('/login')
         }else if(!authentication && authStatus !== authentication){  // false && true !== true (false)
            navigate('/')
         }
         setLoader(false)
    },[authStatus, navigate, authentication])
 
 
    return loader ? <h1>Loading...</h1> : <> {children} </>
}
