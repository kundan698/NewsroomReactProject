import React, { createContext, useState } from 'react'
import Header from '../Pages/Header'
export let ContextData = createContext()

export default function Contest({children}) {
    let [Count , setCount]=useState([])
    let obj= {Count,setCount}
  return (
    <div>
       <ContextData.Provider value={obj}>
       {children}
       </ContextData.Provider>
      
    </div>
  )
}
