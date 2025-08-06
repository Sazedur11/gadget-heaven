import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <div className="bg-[#9538E2]">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
