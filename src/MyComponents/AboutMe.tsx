
import Projects from "./Projects";
import {motion} from "framer-motion"
export default function AboutMe(){
    return(
        <div>
        <div  className="lg:h-screen overflow-x-hidden h-[150vh] w-full bg-[#011e41] grid lg:grid-cols-2 grid-cols-1" id="about">
            <motion.div
             initial={{x:"-60%"}}
              whileInView={{x:"0"}}
              transition={{duration:2}}
            className="lg:h-10/12 h-[90%] w-[85%] md:mx-auto md:mt-10 lg:w-2/3 ">
                <img src="./images/banner.png" className="h-full w-full" alt="" />
            </motion.div>
        
             <motion.div
              initial={{x:"40%"}}
            whileInView={{x:0}}
            transition={{duration:2}}
             className="m-10 ">
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
                        <h1 className="text-3xl font-bold">3+</h1>
                        <p className="text-[14px]">Years of Experience</p>
                    </div>
                       <div className="text-white border-[1px] border-gray-600 rounded-md bg-[#032349] p-3 text-center ">
                        <h1 className="text-3xl font-bold">1+</h1>
                        <p className="text-[14px] ">Awward Winning</p>
                    </div>
                 </div>
                 <div className="flex gap-36">
                   <button className="px-8 mt-5 hover:cursor-pointer py-3 font-bold rounded-3xl bg-blue-700 hover:bg-black border   text-white uppercase">get in touch →</button>
            
             </div>
             </motion.div>
           </div>
           <Projects/>
        </div>
    )
}