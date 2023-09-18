import React, { Component } from "react";

export default class AddUserInfor extends Component {
  state = {
    name: "",
    address: "Hoi dan it",
    age: "",
  };

  handleClick = (event) => {
    console.log(">>> Click me button!", event.target);
    this.setState({ name: "Eric1", age: Math.floor(Math.random() * 100 + 1) });
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: +this.state.age,
    };
    this.props.handleAddUser(newUser);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        My name is {this.state.name} and I'm {this.state.age}
        <br />
        Your name:{" "}
        <input type="text" onChange={(e) => this.handleOnChangeName(e)} />
        <br />
        Your age:{" "}
        <input type="text" onChange={(e) => this.handleOnChangeAge(e)} />
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}
