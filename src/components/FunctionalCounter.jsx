import React, { Component } from "react";
import { useState } from "react";
import "./Counter.css";

// Define a functional component
function FunctionalCounter() {
  // We need to Initialize the count state variable and setCount function to update
  const [count, setCount] = useState(0); //start with 0

  //Update increment or Decrement
  //   function to increment the count
  const incrementCount = () => setCount(count + 1); // Update the count value by 1

  //   function to decrement the count
  const decrementCount = () => setCount(count - 1); // Update the count value by 1

  // function to reset the count value to 0
  const resetCount = () => setCount(0); // reset count to 0

  //   return JSX to render the Component
  return (
    <div className="counter-container">
      {/*class for css styling */}
      <h2 className="counter-display">Functional component counter: {count}</h2>
      <button className="counter-button" onClick={incrementCount}>
        Increment
      </button>
      <button className="counter-button" onClick={decrementCount}>
        Decrement
      </button>
      <button className="counter-button" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default FunctionalCounter;
