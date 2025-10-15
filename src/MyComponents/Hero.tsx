import {  LucideFacebook, LucideLinkedin } from "lucide-react";
import {motion} from "framer-motion"
import AboutMe from "./AboutMe";
export default function Hero(){
    return(
        <div>
        <div className="h-screen w-full overflow-hidden bg-[#011e41] grid grid-cols-2">
            <motion.div
              initial={{x:"-60%"}}
              whileInView={{x:"0"}}
              transition={{duration:2}}
            className="py-20 ml-12 ">
                <span className="p-2 text-white bg-[#063167] uppercase rounded-[5px] ">f a t i m a - r e z a i e</span>
                <h1 className="text-6xl font-bold text-white uppercase mt-6 text-nowrap">hey ! I'm fatima,</h1>
                <h1 className="text-6xl font-bold text-blue-500 uppercase text-nowrap">I'm a developer</h1>
                <p className="text-white mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, necessitatibus voluptate. Repudiandae necessitatibus sequi ratione doloremque dolore ipsa repellendus nobis quibusdam excepturi dolor. Doloremque nesciunt tempora quia officiis dolorum quidem?</p>
                <div className="flex gap-6 mt-5">
                    <button className="px-8 hover:cursor-pointer py-3 font-bold rounded-3xl bg-blue-500 text-white uppercase">get in touch →</button>
           <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideFacebook className="h-6 w-6 text-white" />
</div>
<div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideLinkedin className="h-6 w-6 text-white" />
</div>

            
                </div>
            </motion.div>
            <motion.div
            initial={{x:"40%"}}
            whileInView={{x:0}}
            transition={{duration:2}}
            className="overflow-hidden"
            >
                <img src="./images/home-banner.png" alt="" />
            </motion.div>
        </div>
        <AboutMe/>
        </div>
    )
}