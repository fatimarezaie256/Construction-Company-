import { Facebook, Linkedin, LucideLinkedin, LucideWholeWord, Network, WholeWord, WholeWordIcon } from "lucide-react";

export default function Contact(){
    return(
      <div className="h-[104vh] w-full bg-[#011e41]" id="Contact">
        <div className=""><div className="h-[96vh] shadow-2xl mt-20 w-[90%] mx-auto rounded-md border-[1px] border-[#012654]  bg-[#032753]">
      <div className="h-40 text-center border-b-[1px] border-b-[#012654] pt-8 w-full rounded-tl-md rounded-tr-md bg-[#021a38]">
       <h1 className="text-3xl  text-white font-bold">Let's Discuss Your Project</h1>
       <p className="text-white font-bold pt-3  ">Always availabe for freelancing if the right project comes along,<span className="">Feel free to contact me.</span></p>
      </div>
        <div className="flex flex-row p-10 justify-evenly flex-3">
        <div ><p className="text-gray-400">W R I T E  A N  E M A I L</p>
         <h1 className="text-2xl text-white font-bold">sample@domain.com</h1>
         </div>
         <div className="-mr-12 ">
            <label className="block">YOUR NAME</label>
            < input className="border w-72  focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" type="text" placeholder="Name *"/>
         </div>
         <div  className="-mr-16 ">
            <label className="block">YOUR EMAIL</label>
            < input className="border-[1px] focus:outline-0  border-[#466387] w-72 p-2 rounded-md bg-[#193356] " type="text" placeholder="Your email *"/>
         </div>
        </div>
        <div className="flex flex-row justify-evenly flex-2">
        <div ><p className="text-gray-400">C A L L  M E</p>
         <h1 className="text-2xl text-white font-bold">+93 797 344 821</h1>
         </div>
         <div className="-mr-20">
            <label className="block ">YOUR SUBJECT</label>
            < input className="border  w-[640px]  focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" type="text" placeholder="Subject *"/>
         </div>
        </div>
      <div className="flex flex-row justify-evenly p-10">
        <div className="flex gap-4">
           <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideLinkedin className="h-6 w-6 text-white" />
</div>
        <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <Facebook className="h-6 w-6 text-white" />
</div>
<div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideWholeWord className="h-6 w-6 text-white" />
</div>
        </div>
        <div className="-mr-26">
         <label className="block ">YOUR MESSEGE</label>
            < input className="border lg:w-[640px] w-52 focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" type="text" placeholder="Your messege *"/>
      </div>
      </div>
      <div className="text-right p-2 mr-14 ">
       < input className=" w-[640px]  focus:outline-0 px-2 py-3 bg-blue-600 rounded-full placeholder:font-bold placeholder:text-white placeholder:text-center hover:cursor-pointer hover:bg-blue-800 transation-all duration-700 border-[1px] border-blue-300" type="text" placeholder="SEND MESSEGE "/>
      </div>
        
        </div>
        </div>
        
        <h1 className="text-center font-bold p-4">2025 copyrighgt all rights rserved</h1>
      </div>
    )
}