import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "./MyComponents/CustomCursor";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <CustomCursor/>
    
  </StrictMode>
);
