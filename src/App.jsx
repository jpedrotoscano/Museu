import "primeflex/primeflex.css";

import { Outlet } from "react-router-dom";

import Home from "./routes/Home/Home";        
import Login from "./routes/Login/Login";

function App() {

  return (
    <div className="flex align-items-center justify-content-center w-full h-screen">
      <Outlet />
    </div>
  )
}

export default App
