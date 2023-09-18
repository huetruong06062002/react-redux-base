import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return listUsers.map((user) => (
      <div>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <hr />
      </div>
    ));
  }
}
