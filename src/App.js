import React from "react";
import CNAPP from "./components/CNAPP/CNAPP";
import Navbar from "./components/Navbar/Navbar";
import CWPP from "./components/CWPP/CWPP";
import RegistryScan from "./components/RegistryScan/RegistryScan";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CNAPP />
      <CWPP />
      <RegistryScan />
    </div>
  );
}

export default App;
