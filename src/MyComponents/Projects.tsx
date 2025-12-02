import { ArrowBigRight, Eye, Lock, Plus } from "lucide-react";
import Services from "./Services";
export default function Projects(){
    const AllProjects = [
        {
            imgUrl:"./images/login.png",
            aboutp:"Website Design",
            webdesign:"website design, App design",
            icon: "→", 
        },
         {
            imgUrl:"./images/second_project.png",
            aboutp:"Website Design",
            webdesign:"website design, App design",
            icon: "→", 
        },
         {
            imgUrl:"./images/project.png",
            aboutp:"Website Design",
            webdesign:"website design, App design",
            icon: "→", 
        },
    ]
    return(
      <div>
        <div className="h-screen w-full bg-[#011e41] " id="Projects">
              <div className="p-22"><span className="px-4 py-1  text-white bg-[#063167] uppercase rounded-[5px] text-[20px]">my work</span>
              <h1 className="text-white  text-4xl uppercase pt-5 font-bold">recent projects</h1>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 pl-24">
                {AllProjects.map((project,index)=>(
              <div key={index} className="bg-white rounded-2xl  h-[350px] w-[90%]">
    < div className="relative w-full h-[70%] group">
      <img src={project.imgUrl}  className="w-full h-full object-cover rounded-b-none rounded-2xl" />
     
     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
  <button className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
        <a href="./images/login.png"><Plus
    className="w-10 h-10 text-white bg-gray-500 rounded-full"/></a>
      </div>
  </button>
    </div>
     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
  <button className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
        <a href="./images/project.png"><Plus
    className="w-10 h-10 text-white bg-gray-500 rounded-full"/></a>
      </div>
  </button>
    </div>
     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
  <button className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg rounded-b-none">
        <a href="./images/second_project.png"><Plus
    className="w-10 h-10 text-white bg-gray-500 rounded-full"/></a>
      </div>
  </button>
    </div>
 
    </div>
                 <div className="grid grid-cols-2">
                  <div>
                    <h1 className="text-black text-2xl font-bold text-nowrap p-3">{project.aboutp}</h1>
                 <p className="text-gray-500 inline-flex text-nowrap pl-2.5">{project.webdesign}</p>
                  </div>
                  <div className="my-auto">
                    <a href="./images/login.png"><span className="text-white m-8 bg-blue-500 float-end  rounded-full text-4xl px-3 py-1 border-[1px] border-black hover:cursor-pointer hover:bg-black">{project.icon}</span> </a>
                  </div>
                  </div>
                          
              </div>
                ))}
              </div>
        </div>
         <Services/>
        </div>
    )
}