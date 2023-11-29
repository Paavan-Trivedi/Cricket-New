import "./App.css";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import India from "./Comp/India";
import Newzealand from "./Comp/Newzealand";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India/>}/>
        {/* <Route path="/male" element={<Male/>}/>
        <Route path="/female" element={<Female/>}/> */}
        <Route path="/Newzealand" element={<Newzealand/>}/>
      </Routes>
    </>
  );
}

export default App;
