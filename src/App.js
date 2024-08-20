import React from "react";
import CSPM from "./components/CSPM/CSPM";
import CWPP from "./components/CWPP/CWPP";
import RegistryScan from "./components/RegistryScan/RegistryScan";
import Navbar from "./components/Navbar/Navbar";
// import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <header>
        <h1>CNAPP Dashboard</h1>
      </header>

      <section>
        <CSPM />
      </section>

      <section>
        <CWPP />
      </section>

      <section>
        <RegistryScan />
      </section>
    </div>
  );
};

export default App;
