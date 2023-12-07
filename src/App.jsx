import "./App.css";
import Home from "./Comp/Home";
import { Route, Routes } from "react-router-dom";
import India, { InFemale, InMale } from "./Comp/Country/India";
import Newzealand, { NeFemale, NeMale } from "./Comp/Country/Newzealand";
import Signup from "./Comp/Signup";
import Login from "./Comp/Login";
import Afghanistan from "./Comp/Country/Afghanistan";
import Australia, { AuFemale, AuMale } from "./Comp/Country/Australia";
import Bangladesh, { BaFemale, BaMale } from "./Comp/Country/Bangladesh";
import England, { EnFemale, EnMale } from "./Comp/Country/England";
import Ireland, { IrFemale, IrMale } from "./Comp/Country/Ireland";
import Pakistan, { PaFemale, PaMale } from "./Comp/Country/Pakistan";
import SouthAfrica, { SoFemale, SoMale } from "./Comp/Country/SouthAfrica";
import WestIndies, { WeFemale, WeMale } from "./Comp/Country/WestIndies";
import Zimbabwe, { ZiFemale, ZiMale } from "./Comp/Country/Zimbabwe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />"
        <Route path="/india" element={<India />} />
        <Route path="/india/male" element={<InMale />} />
        <Route path="/india/female" element={<InFemale />} />
        <Route path="/Afghanistan" element={<Afghanistan />} />
        <Route path="/Australia" element={<Australia />} />
        <Route path="/Australia/male" element={<AuMale />} />
        <Route path="/Australia/female" element={<AuFemale />} />
        <Route path="/Bangladesh" element={<Bangladesh />} />
        <Route path="/Bangladesh/male" element={<BaMale />} />
        <Route path="/Bangladesh/female" element={<BaFemale />} />
        <Route path="/England" element={<England />} />
        <Route path="/England/male" element={<EnMale />} />
        <Route path="/England/female" element={<EnFemale />} />
        <Route path="/Ireland" element={<Ireland />} />
        <Route path="/Ireland/male" element={<IrMale />} />
        <Route path="/Ireland/female" element={<IrFemale />} />
        <Route path="/Newzealand" element={<Newzealand />} />
        <Route path="/Newzealand/male" element={<NeMale />} />
        <Route path="/Newzealand/female" element={<NeFemale />} />
        <Route path="/Pakistan" element={<Pakistan />} />
        <Route path="/Pakistan/male" element={<PaMale />} />
        <Route path="/Pakistan/female" element={<PaFemale />} />
        <Route path="/SouthAfrica" element={<SouthAfrica />} />
        <Route path="/SouthAfrica/male" element={<SoMale />} />
        <Route path="/SouthAfrica/female" element={<SoFemale />} />
        <Route path="/WestIndies" element={<WestIndies />} />
        <Route path="/WestIndies/male" element={<WeMale />} />
        <Route path="/WestIndies/female" element={<WeFemale />} />
        <Route path="/Zimbabwe" element={<Zimbabwe />} />
        <Route path="/Zimbabwe/male" element={<ZiMale />} />
        <Route path="/Zimbabwe/female" element={<ZiFemale />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
