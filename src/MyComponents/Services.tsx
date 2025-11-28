import {  CodeSquareIcon, Star, StarIcon, } from "lucide-react";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

const items:{image:string,icon:React.ReactNode,service:string,details:string,iconStar:React.ReactNode}[] = [
  {
    image:"./images/front.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam ",
    iconStar:<StarIcon/>,
      },
  {
    image:"./images/another5.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam",
   iconStar:<StarIcon/>,    
  },
  {
    image:"./images/developer.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam ",
   iconStar:<StarIcon/>,    
  },
  {
    image:"./images/computer.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam ",
   iconStar:<StarIcon/>,    
  },
]
export default function Services(){
    return(

        <div id="Services" className="h-[150vh] w-full bg-[#011e41]">
              <div className="p-22"><span className="px-4 py-1  text-white bg-[#063167] uppercase rounded-[5px] text-[20px]">services</span>
              <h1 className="text-white text-4xl uppercase pt-5 font-bold">Development <span className="text-blue-600">Services</span> I am providing</h1>
              </div>
               <div className="flex gap-8">
               {items.map((item,index)=>(
                 <div className="" key={index}><div className="h-[110%] bg-center bg-cover rounded-md w-[80%] pt-34 " style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="bg-blue-600  text-white  h-8 w-10 px-2 py-1  rounded-sm">{item.icon}</div>
                  <h1 className="">{item.service}</h1>
                  <p className="border-b ">{item.details}</p>
                <div>
                
</div>

                 </div></div>
               ))}
               </div>
              <Testimonial/>
        </div>
    )
}