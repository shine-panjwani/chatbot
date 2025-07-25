import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import SideBarAndMessage from "./components/SideBarAndMessage";
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
