import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Projects from "./Projects"
import NotFound from "./NotFound"
import Navbar from "./Navbar"
import BackgroundSVG from "./BackgroundSvg"
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
export default App;
