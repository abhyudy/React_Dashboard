import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CNAPP from "./components/CNAPP/CNAPP"; // Adjust the path if needed
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CNAPP />
    </Provider>
  );
}

export default App;
