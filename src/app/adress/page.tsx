import axios from "axios";
import React from "react";



export interface Igetproduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

async function  Adress(){
  
 const { data }= await axios("https://fakestoreapi.com/products")
    return(
        data.map((item :Igetproduct)=>(
            <div key={item.id} className="bg-blue-500 mb-4">
                <h5>{item.title}</h5>
                <h6>{item.description}</h6>
            </div>
        ))       
    )
}
export default Adress;