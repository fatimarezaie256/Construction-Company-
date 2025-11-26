import {  CodeSquareIcon, Star, } from "lucide-react";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

const items:{image:string,icon:React.ReactNode,service:string,details:string}[] = [
  {
    image:"./images/com.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam similique eius inventore fugiat accusamus repudiandae.",
      },
  {
    image:"./images/com.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam similique eius inventore fugiat accusamus repudiandae.",
      },
  {
    image:"./images/com.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam similique eius inventore fugiat accusamus repudiandae.",
      },
  {
    image:"./images/com.jpg",
    icon:<CodeSquareIcon/>,
    service:"Frontend Developer",
    details:"sicing elit. Mollitia, libero? Distinctio voluptates praesentium magni dolore deleniti! Quaerat at, soluta quam, excepturi consequuntur a aliquam similique eius inventore fugiat accusamus repudiandae.",
      },
]
export default function Services(){
    return(

        <div id="Services" className="h-screen w-full bg-[#011e41]">
              <div className="p-22"><span className="px-4 py-1  text-white bg-[#063167] uppercase rounded-[5px] text-[20px]">services</span>
              <h1 className="text-white text-4xl uppercase pt-5 font-bold">Development <span className="text-blue-600">Services</span> I am providing</h1>
              </div>
               <div className="">
               {items.map((item,index)=>(
                 <div className="flex  justify-between"><div className="h-[70%] w-[20%] bg-amber-500">
                  <div className="bg-blue-600 text-white  h-8 w-10 rounded-xs">{item.icon}</div>
                  <h1>{item.service}</h1>
                  <p>{item.details}</p>
                 </div></div>
               ))}
               </div>
              <Testimonial/>
        </div>
    )
}