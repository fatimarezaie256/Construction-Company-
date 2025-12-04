import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "./CustomCursor";
import App from "./MyComponents/App";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <CustomCursor/>
    <App/>
  </StrictMode>
);
