import "./App.css";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Comp/Signup";
import Login from "./Comp/Login";
import Protectedroute from "./Comp/Protectedroute";
import CountryPlayer from "./Comp/Country/Allcountry";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Protectedroute Cmp={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:country" element={<CountryPlayer />} />
      </Routes>
    </>
  );
}

export default App;
