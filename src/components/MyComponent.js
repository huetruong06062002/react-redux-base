import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan it", age: "28" },
      { id: 2, name: "Eric", age: "29" },
      { id: 2, name: "HaryPham Dev", age: "30" },
    ],
  };

  render() {
    return (
      //DRY: don't repeat yourself
      <div>
        <UserInfor />
        <hr />
        <DisplayInfor name="Eric" age={29} listUsers={this.state.listUsers} />
      </div>
    );
  }
}
