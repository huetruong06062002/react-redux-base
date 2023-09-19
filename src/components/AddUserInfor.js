import React, { Component, useState } from "react";

// export default class AddUserInfor extends Component {
//   state = {
//     name: "",
//     address: "Hoi dan it",
//     age: "",
//   };

//   handleClick = (event) => {
//     console.log(">>> Click me button!", event.target);
//     this.setState({ name: "Eric1", age: Math.floor(Math.random() * 100 + 1) });
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     let newUser = {
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: +this.state.age,
//     };
//     this.props.handleAddUser(newUser);
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <form onSubmit={(event) => this.handleOnSubmit(event)}>
//         My name is {this.state.name} and I'm {this.state.age}
//         <br />
//         Your name:{" "}
//         <input type="text" onChange={(e) => this.handleOnChangeName(e)} />
//         <br />
//         Your age:{" "}
//         <input type="text" onChange={(e) => this.handleOnChangeAge(e)} />
//         <br></br>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: ~~age,
    });
  };

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      My name is {name} and I'm {age}
      <br />
      Your name: <input type="text" onChange={(e) => handleOnChangeName(e)} />
      <br />
      Your age: <input type="text" onChange={(e) => handleOnChangeAge(e)} />
      <br></br>
      <button>Submit</button>
    </form>
  );
};

export default AddUserInfor;
