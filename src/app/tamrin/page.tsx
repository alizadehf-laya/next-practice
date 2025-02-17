"use client"
import Link from "next/link";
import { usePathname , useRouter } from "next/navigation";
import React from "react"
import Counter from "./components/counter/page";


function  Tamrin(){
    const Pathname = usePathname();
    const router = useRouter();
    const navs=[

        {
            title:"about tamrin",
            link:"/about"
        },
        {
            title:"contact tamrin",
            link:"/"
        }
    ]
    const handleClick=()=>{
        router.refresh()
    }
    return(
        <>
        <Counter/>
            <div>Tamrin page</div>
            <nav className="p-4 border-b">
                <ul>
                {navs.map((item)=>(
                    <li className="mr-4">
                        <Link className={item.link=== Pathname ? "text-blue-500": "#333"}
                        href={`${item.link}`}>{item.title}</Link> 
                    </li>
                   
                ))}
                </ul>
            </nav>
            <button className="bg-blue rounded" onClick={handleClick}> pushbutton</button>
        </>
    
    )
}
export default Tamrin;