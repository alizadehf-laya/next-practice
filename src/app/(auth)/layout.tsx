"use client"
import React, { Children, useState } from "react";
import Link from "next/link";
function  Authlayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
    const [input , setInput]=useState("")
    return(
        <div>
            Authlayout
            <br/>
            <Link href="/register">Register</Link>
            <Link href="/login">login</Link>
           <input className="mr-4" type="text" onChange={(e)=>setInput(e.target.value)}/>
          {children}
        </div>
    )
}
export default Authlayout;