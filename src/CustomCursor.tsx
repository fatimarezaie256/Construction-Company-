import { useState } from "react";
import App from "./App";


export default function CustomCursor(){
    const[position,setPosition]=useState({
        x:0,
        y:0,
    });
    return(

        <div className=""
        onPointerMove={(e)=>{
            setPosition({
                x:e.clientX,
                y:e.clientY,
            });
        }}
        style={{
            position:"relative",
            width:"98vw",
            height:"96vh",
        }}
        >
            <div
            style={{
                
                position:"absolute",
                backgroundColor:"white",
                borderRadius:"50%",
                transform:`translate(${position.x}px, ${position.y}px)`,
                left:-10,
                top:-10,
                width:10,
                height:10,
                zIndex:555,        
            }}
            >
            </div>
            <App/>
        
        </div>
    );
}