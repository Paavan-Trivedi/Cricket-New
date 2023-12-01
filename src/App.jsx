import "./App.css";
import Home from "./Comp/Home";
import { Link, Route, Routes } from "react-router-dom";
import India, { Female, Male } from "./Comp/India";
import Newzealand from "./Comp/Newzealand";
import Signup from "./Comp/Signup";
import Login from "./Comp/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India/>}/>
        <Route path="/male" element={<Male/>}/>
        <Route path="/female" element={<Female/>}/>
        <Route path="/Newzealand" element={<Newzealand/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
