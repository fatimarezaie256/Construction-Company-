import { Facebook, Linkedin, LucideFacebook, LucideLinkedin, LucideWholeWord, Network, WholeWord, WholeWordIcon } from "lucide-react";

export default function Contact(){
    return(
      <div className="h-[104vh] w-full bg-[#011e41]" id="Contact">
          <div className="h-[99vh] shadow-2xl mt-20 w-[90%] mx-auto rounded-md border-[1px] border-[#042b5bf6]  bg-[#032753]">
            
      <div className="h-40 border-b-[1px] border-b-[#0b2e58f6] pt-8 w-full rounded-tl-md rounded-tr-md bg-[#021a38]">
       <h1 className="text-4xl   text-white font-bold text-center">Let's Discuss Your Project</h1>
       <p className="text-gray-200 font-bold pt-5 text-center ml-56">Always availabe for freelancing if the right project comes along,Feel free to contact me.</p>
      </div>
       <div className="grid grid-cols-2 h-[74%] rounded-b-md w-full">
        <div className="w-[50%] h-[60%]">
        <img src="./images/banner.png" className="h-full -mt-36 mx-auto w-full pl-12" />
               <div className="pl-12 mt-7"><p className="text-gray-400">W R I T E  A N  E M A I L</p>
         <h1 className="text-2xl text-white font-bold">sample@domain.com</h1>
         </div>
                 <div className="pl-12 mt-7"><p className="text-gray-400">C A L L  M E</p>
         <h1 className="text-2xl text-white font-bold">+93 797 344 821</h1>
         </div>
           <div className="flex flex-3 gap-6 pl-12 mt-7">
                    <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideLinkedin className="h-6 w-6 text-white" />
</div> 
                              <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <LucideFacebook className="h-6 w-6 text-white" />
</div>
       <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-full border border-white hover:cursor-pointer">
  <WholeWordIcon className="h-6 w-6 text-white" />
</div>

           </div>
        </div>
        <div className="">
         <div className="flex gap-10 -ml-64 pt-12">
         <div className="">
            <label className="block">YOUR NAME</label>
            < input className="border w-96  focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" type="text" placeholder="Name *"/>
         </div>
         <div  className="">
            <label className="block">YOUR EMAIL</label>
            < input className="border-[1px] focus:outline-0  border-[#466387] w-96 p-2 rounded-md bg-[#193356] " type="text" placeholder="Your email *"/>
         </div>
      
        </div>
                 <div className=" -ml-64 pt-5">
            <label className="block ">YOUR SUBJECT</label>
            < input className="border  w-[90%]  focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" type="text" placeholder="Subject *"/>
         </div>
              <div className=" -ml-64 pt-5">
            <label className="block ">YOUR MESSEGE</label>
            <textarea className="border h-32 w-[90%]  focus:outline-0 p-2 rounded-md bg-[#193356] border-[#466387]" >YOUR MESSEGE *</textarea>
         </div>
               <div className="-ml-64 pt-5  ">
       < input className="w-[90%]  focus:outline-0 px-2 py-3 bg-blue-600 rounded-full placeholder:font-bold placeholder:text-white placeholder:text-center hover:cursor-pointer hover:bg-black transation-all duration-700 border-[1px] border-blue-300" type="text" placeholder="SEND MESSEGE "/>
      </div>

              
</div>
      </div>
          </div>
             </div>
    )
}