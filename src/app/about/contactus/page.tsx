"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Igetproduct } from "@/app/adress/page";

export function  Contactus(  ){
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        axios("https://fakestoreapi.com/products").then(result=>{
            setProduct(result.data);
        })
    },[])
    return(
        <>
        
      {  product.map((item :Igetproduct)=>(
            <div key={item.id} className="bg-blue-500 mb-4">
                <h5>{item.title}</h5>
                <h6>{item.description}</h6>
            </div>
        ))   
    }
        </>

    )
}