import {  CodeSquareIcon, Star, } from "lucide-react";

export default function Services(){
    return(

        <div id="Services" className="h-[150vh] w-full bg-[#011e41]">
              <div className="p-22"><span className="px-4 py-1  text-white bg-[#063167] uppercase rounded-[5px] text-[20px]">services</span>
              <h1 className="text-white text-4xl uppercase pt-5 font-bold">Development <span className="text-blue-600">Services</span> I am providing</h1>
              </div>
              <div className="grid grid-cols-4 gap-6 justify-center items-center mt-10 ">
                <div className="h-[450px] w-[85%] rounded-md bg-cover mc-auto bg-left bg-[url('../images/another1.jpg')]">
                <CodeSquareIcon className="bg-blue-800 opacity-100 h-10 w-10 rounded-md p-2 mt-36 ml-3"/>
                <h1 className="font-bold text-nowrap ml-3 mt-2 text-2xl">Website Development</h1>
                <p className="text-white ml-3 mt-2 border-b">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minus veritatis perspiciatis repellat quas harum velit dolorum eius alias! Eligendi voluptatibus quaerat ex est. Cumque recusandae labore officiis iure nobis!</p>
                <div className="flex gap-3 pl-2 pt-2">
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                </div>
                </div>
                  <div className="h-[450px] w-[85%] rounded-md bg-cover bg-right bg-[url('../images/another2.jpg')]">
                <CodeSquareIcon className="bg-blue-800 opacity-100 h-10 w-10 rounded-md p-2 mt-36 ml-3"/>
                <h1 className="font-bold text-nowrap ml-3 mt-2 text-2xl">Website Development</h1>
                <p className="text-white ml-3 mt-2 border-b">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minus veritatis perspiciatis repellat quas harum velit dolorum eius alias! Eligendi voluptatibus quaerat ex est. Cumque recusandae labore officiis iure nobis!</p>
                <div className="flex gap-3 pl-2 pt-2">
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                </div>
                </div>
                  <div className="h-[450px] w-[85%] rounded-md bg-cover bg-center bg-[url('../images/another5.jpg')]">
                <CodeSquareIcon className="bg-blue-800 opacity-100 h-10 w-10 rounded-md p-2 mt-36 ml-3"/>
                <h1 className="font-bold text-nowrap ml-3 mt-2 text-2xl">Website Development</h1>
                <p className="text-white ml-3 mt-2 border-b">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minus veritatis perspiciatis repellat quas harum velit dolorum eius alias! Eligendi voluptatibus quaerat ex est. Cumque recusandae labore officiis iure nobis!</p>
                <div className="flex gap-3 pl-2 pt-2">
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                </div>
                </div>
                  <div className="h-[450px] w-[85%] rounded-md bg-cover bg-center bg-[url('../images/image4.jpg')]">
                <CodeSquareIcon className="bg-blue-800 opacity-100 h-10 w-10 rounded-md p-2 mt-36 ml-3"/>
                <h1 className="font-bold text-nowrap ml-3 mt-2 text-2xl">Website Development</h1>
                <p className="text-white ml-3 mt-2 border-b">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minus veritatis perspiciatis repellat quas harum velit dolorum eius alias! Eligendi voluptatibus quaerat ex est. Cumque recusandae labore officiis iure nobis!</p>
                <div className="flex gap-3 pl-2 pt-2">
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                  <Star className="text-yellow-500"/>
                </div>
                </div>
              </div>
        </div>
    )
}