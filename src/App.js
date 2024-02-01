import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div>
      <h1>React State Change Example</h1>
      <ClassCounter></ClassCounter>
      <FunctionalCounter></FunctionalCounter>
    </div>
  );
}

export default App;
