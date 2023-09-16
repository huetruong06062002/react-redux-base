import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan it",
    age: 26,
  };

  handleClick() {
    console.log(">>> Click me button!");
  }
  handleMouseOver() {
    console.log("My name is " + this.state.name);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <br />
        <button onClick={this.handleClick}>Click me</button>
        <br />
        <button onMouseOver={this.handleMouseOver}>Hover</button>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p></p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// };

export default App;
