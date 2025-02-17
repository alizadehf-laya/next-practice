"use client";
import { useState } from "react";

const Counter=()=>{
    
    const [count , setCount]= useState(1)

    return(
        <>
        <button onClick={()=>{setCount(count+1)}}>click to increase</button>
        <p >{count}</p>
        </>
    )
}
export default Counter;