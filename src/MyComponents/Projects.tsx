import { ArrowBigRight, Eye, Plus } from "lucide-react";
export default function Projects(){
    const AllProjects = [
        {
            imgUrl:"./images/login.png",
            aboutp:"Website Design",
            webdesign:"website design, App design",
            icon: "→", 
        }
    ]
    return(
        <div className="h-screen w-full bg-[#011e41] " id="Projects">
              <div className="p-22"><span className="px-4 py-1  text-white bg-[#063167] uppercase rounded-[5px] text-[20px]">my work</span>
              <h1 className="text-white  text-4xl uppercase pt-5 font-bold">recent projects</h1>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 pl-24">
                {AllProjects.map((project,index)=>(
              <div key={index} className="bg-white rounded-md h-[350px] w-[90%]">
    <div className="relative w-64 h-40 group">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
        alt="Nature"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Icon overlay (shows on hover) */}
     
     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
  <button
    className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
  >
    
 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
        <Plus className="w-10 h-10 text-white" />
      </div>
  </button>
</div>
    </div>
    

 
                 <h1 className="text-black text-2xl font-bold p-3">{project.aboutp}</h1>
                 <div className="flex justify-between pl-2"><p className="text-gray-500 inline-flex">{project.webdesign}</p>    
                 <span className="text-white bg-blue-500 -mt-6 mr-3.5  rounded-full text-3xl px-3 py-1 border-[1px] border-black ">{project.icon}</span>   </div>        
              </div>
                ))}
              </div>
        </div>
    )
}