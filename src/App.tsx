import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./MyComponents/Home"
import Services from "./MyComponents/Services"
import AboutMe from "./MyComponents/AboutMe"
import Contact from "./MyComponents/Contact"
import Projects from "./MyComponents/Projects"
import NotFound from "./MyComponents/NotFound"
import Navbar from "./MyComponents/Navbar"
function App() {
   return (
     <div className="bg-[#011e41] h-screen relative text-white w-full"> 
    <Navbar/>
<div className=" w-full ">
  
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>       
        <Route path="/services" element={<Services/>}/>       
        <Route path="/AboutMe" element={<AboutMe/>}/>       
        <Route path="/contact" element={<Contact/>}/>       
        <Route path="/projects" element={<Projects/>}/>       
        <Route path="/*" element={<NotFound/>}/>       
      </Routes>
      </BrowserRouter>
    </div>
   </div>
  )
}
export default App
