import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan it",
    age: 26,
  };

  handleClick = (event) => {
    console.log(">>> Click me button!", event.target);
    this.setState({ name: "Eric1", age: Math.floor(Math.random() * 100 + 1) });
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          My name is {this.state.name} and I'm {this.state.age}
          <br />
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <button>Submit</button>
        </form>
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
