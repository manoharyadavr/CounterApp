import React from "react";
import "./Counter.css";

// Define a class Component
class ClassCounter extends React.Component {
  // sc^2
  // constructor method to initialize the component state
  constructor(props) {
    // we can rename the props name
    // Pass props to parent constructor or Parent component
    super(props);
    this.state = { count: 0 }; // initialize the state with count
  }

  //   method to increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 }); // increae the count value by 1
  };

  //method to decrement the count
  decreamentCount = () => {
    this.setState({ count: this.state.count - 1 }); //decrease the count value by 1
  };

  //method to reset the count
  resetCount = () => {
    this.setState({ count: 0 }); //update the state with the value 0
  };

  //   render method to output the JSX
  render() {
    return (
      <div className="counter-container">
        <h2 className="counter-display">
          Class Component Counter: {this.state.count}{" "}
        </h2>
        <button className="counter-button" onClick={this.incrementCount}>
          Increment
        </button>
        <button className="counter-button" onClick={this.decreamentCount}>
          Decrement
        </button>
        <button className="counter-button" onClick={this.resetCount}>
          Reset
        </button>
      </div>
    );
  }
}

export default ClassCounter;
