// context creation //e.g. amazon warehouse

import { createContext, useContext } from "react";

// provider //delivery man

// consumer lengthly removed isse kehte han context api

// useContext hook  then added



//created context
const AppContext = createContext();

// create provider func
const AppProvider = ({children})=>{
    return (
        <AppContext.Provider value={"Amritpal Singh"}>{children}</AppContext.Provider>
    )
}

// custom hook create for context
const useGlobalContext = ()=>{
    return useContext(AppContext)
}


export {AppContext,AppProvider, useGlobalContext};