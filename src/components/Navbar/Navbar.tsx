"use client"
import React from "react"; 
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { link } from "fs";


function  Navbar(){

    const Pathname = usePathname();
    const router = useRouter();
    const navs=[
        {
            id:1,  
        title:"Home",
         link:"/"  
        },

        {
            id:2,
        title:"About",
        link:"/about"  
        },
        {
            id:3,
            title:"Adress",
            link:"/adress"  
            }
    ]
    const handleClick=()=>{
        router.push("store")
    }
    return(
        <>
     
        <div className="p-4 border-b">
             <nav>
                <ul className="flex">
                    {navs.map((item)=>(
                        <li key={item.id}className="mr-4">
                            <Link className={item.link===Pathname ? "text-blue-500":"#333"} href={`${item.link}`}>{item.title}</Link>
                            </li>
                        ))}
                </ul>
                <button className="bg-blue-500 rounded" onClick={handleClick}>click</button>
            </nav>
        </div>
       
        </>
        
    )
}
export default Navbar;