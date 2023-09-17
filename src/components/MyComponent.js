import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Hoi dan it" age={28} />
        <hr />
        <DisplayInfor name="Eric" age={29} />
      </div>
    );
  }
}
