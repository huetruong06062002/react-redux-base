import React, { Component } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

export default class DisplayInfor extends Component {
  state = {
    isShowHide: false,
  };

  handleShowHide = () => {
    this.setState({ isShowHide: !this.state.isShowHide });
  };

  render() {
    const { listUsers } = this.props;
    return (
      <>
        <div>
          <button onClick={() => this.handleShowHide()}>
            {this.state.isShowHide ? "Hide list users" : "Show list users"}
          </button>
        </div>
        <img src={logo} />
        <div className="display-infor-container">
          {this.state.isShowHide &&
            listUsers.map((user) => (
              <div key={user.id} className={~~user.age <= 18 ? "red" : "green"}>
                <p>Name: {user.name} </p>
                <p>Age: {user.age} </p>
                <hr />
              </div>
            ))}
        </div>
      </>
    );
  }
}
