import "./App.css";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import India from "./Comp/India";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India/>}/>
      </Routes>
    </>
  );
}

export default App;
