import "./App.css";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import India, { Female, Male } from "./Comp/India";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India/>}/>
        <Route path="/male" element={<Male/>}/>
        <Route path="/female" element={<Female/>}/>
      </Routes>
    </>
  );
}

export default App;
