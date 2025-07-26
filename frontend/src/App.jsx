import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import axios from "axios";
import SideBarAndMessage from "./components/SideBarAndMessage";
// axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/convos" element={<SideBarAndMessage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
