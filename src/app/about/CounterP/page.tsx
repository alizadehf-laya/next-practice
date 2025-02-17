"use client"
import React, { Children, useState } from "react"
function  CounterP( {children} :{children :React.ReactNode }){
    const [coont,seCoont]=useState(1)
    return(
        <>
         <div>CounterP is{coont}</div>
        <button onClick={()=>{seCoont(coont+1)}}>click to increse</button>
        {children}
        </>
       
    )
}
export default CounterP;