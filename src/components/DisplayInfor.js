import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        {" "}
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}
