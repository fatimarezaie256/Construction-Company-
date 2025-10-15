import CustomCursor from "@/CustomCursor";
import Projects from "./Projects";

export default function AboutMe(){
    return(
        <div>
        <div  className="h-screen w-full bg-[#011e41] grid grid-cols-2" id="about">
            <div className="h-10/12 w-2/3 ">
                <img src="./images/about-banner.png" className="h-full w-full ml-52 mt-10" alt="" />
            </div>
             <div className="m-16">
                <span className="p-2  text-white bg-[#063167] uppercase rounded-[5px]">a b o u t - u s</span>
                <h1 className="uppercase mt-5 text-4xl font-bold">i am avilable for</h1>
                 <span className="text-blue-500 uppercase text-4xl font-bold">web development</span>
                 <h1 className="uppercase text-4xl font-bold" > projects</h1>
                 <p className="mt-3.5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi consectetur totam cum fugit doloremque saepe labore molestias a est aspernatur architecto in explicabo, magni ratione commodi excepturi minima voluptate fugiat.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus corrupti earum sit numquam magnam quod ducimus voluptatibus. Reprehenderit, debitis facilis. Assumenda fugiat doloremque rem. Provident suscipit officia corporis ullam magni.
                 </p>
                 <div className="flex gap-3 mt-7">
                    <div className="text-white border-[1px] border-gray-600 rounded-md bg-[#032349] p-3 text-center ">
                        <h1 className="text-3xl font-bold">10+</h1>
                        <p className="text-[14px]">Google Review</p>
                    </div>
                       <div className="text-white border-[1px] border-gray-600 rounded-md bg-[#032349] p-3 text-center ">
                        <h1 className="text-3xl font-bold">1+</h1>
                        <p className="text-[14px]">Years of Experience</p>
                    </div>
                       <div className="text-white border-[1px] border-gray-600 rounded-md bg-[#032349] p-3 text-center ">
                        <h1 className="text-3xl font-bold">1+</h1>
                        <p className="text-[14px] ">Awward Winning</p>
                    </div>
                 </div>
                 <div className="flex gap-36">
                   <button className="px-8 mt-5 hover:cursor-pointer py-3 font-bold rounded-3xl bg-blue-500 hover:bg-black hover:border[1px] hover:border-white text-white uppercase">get in touch →</button>
            
             </div>
             </div>
           </div>
           <Projects/>
        </div>
    )
}