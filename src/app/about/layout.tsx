import React from "react"
function  Aboutlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div>Aboutlayout page
            {children}
            
        </div>
    )
}
export default Aboutlayout;