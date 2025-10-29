import {motion} from "framer-motion"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Hero from "./Hero";
export default function Navbar(){
    const navList = [
        {title: "Home",
            href:"/"
        },
         {title: "AboutMe ",
            href:"/about"
        },
         {title: "Projects",
            href:"/projects"
        },
         {title: "Services",
            href:"/services"
        },
         {title: "Contact",
            href:"/contact"
        },
    ];
   const[isOpen,setIsOpen] = useState(false); 
    return( <div className="w-full z-[200] ">
                <motion.div
whileInView={{backgroundColor:"black"}}
        className="w-full p-6 justify-between items-center sticky flex top-0 left-0">
            <div className="  lg:ml-16 ml-0 lg:mt-0 -mt-96">
                <h1 className="block lg:text-3xl text-2xl text-nowrap  font-bold">FATIMA - <span className="text-blue-500">REZAIE</span></h1>
            </div>
            <div className="p-2 rounded-full lg:space-x-5 lg:block hidden">
                <a className="text-base after:contenet-[''] after:w-full after:transition-all after:duration-700 after:h-px after:bg-white uppercase p-1 font-bold relative after:absolute after:left-0 after:-bottom-0 after:hidden hover:after:block" href="#Home">home</a>
                <a className="text-base after:contenet-[''] after:w-full after:transition-all after:duration-700 after:h-px after:bg-white uppercase p-1 font-bold relative after:absolute after:left-0 after:-bottom-0 after:hidden hover:after:block" href="#about">about me</a>
                <a className="text-base after:contenet-[''] after:w-full after:transition-all after:duration-700 after:h-px after:bg-white uppercase p-1 font-bold relative after:absolute after:left-0 after:-bottom-0 after:hidden hover:after:block" href="#Projects">projects</a>
                <a className="text-base after:contenet-[''] after:w-full after:transition-all after:duration-700 after:h-px after:bg-white uppercase p-1 font-bold relative after:absolute after:left-0 after:-bottom-0 after:hidden hover:after:block" href="#Services">services</a>
                <a className="text-base after:contenet-[''] after:w-full after:transition-all after:duration-700 after:h-px after:bg-white uppercase p-1 font-bold relative after:absolute after:left-0 after:-bottom-0 after:hidden hover:after:block" href="#Contact">contact</a>
            </div>
            <div className="lg:block hidden">
                <button className="px-8 hover:cursor-pointer hover:bg-black transition-colors duration-500 py-3 font-bold rounded-3xl border-[1px] border-blue-300 bg-blue-500 text-white uppercase"><a href="">Contact me</a></button>
            </div>
                 { isOpen &&(
        <div className=" lg:h-screen h-[45vh] flex lg:mt-0 -mt-8 lg:ml-32 -ml-36 items-center justify-center gap-5 w-full flex-col lg:hidden">
       {navList.map((item,index)=>(
        <a key={index} href={item.href} className="hover:font-bold hover:transition-colors duration-700">{item.title}</a>
       ))}
        
        </div>)}
             <div className="lg:hidden block lg:ml-64 ml-0 hover:cursor-pointer">
          <Menu className={`${!isOpen ? "block":"hidden"} `} onClick={()=>setIsOpen(!isOpen)} size={24}/>
          <X className={`${isOpen ? "block":"hidden"} -mt-52 ml-0    `} onClick={()=>setIsOpen(!isOpen)} size={24}/>
        </div>
      
        </motion.div>  
        <Hero/>
        </div>  
);
}