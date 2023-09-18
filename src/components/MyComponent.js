import React, { Component } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan it", age: "18" },
      { id: 2, name: "Eric", age: "29" },
      { id: 3, name: "HaryPham Dev", age: "30" },
    ],
  };

  handleAddUser = (userInfo) => {
    this.setState({
      listUsers: [...this.state.listUsers, userInfo],
    });
  };

  render() {
    return (
      //DRY: don't repeat yourself
      <div>
        <AddUserInfor handleAddUser={this.handleAddUser} />
        <hr />
        <DisplayInfor name="Eric" age={29} listUsers={this.state.listUsers} />
      </div>
    );
  }
}
