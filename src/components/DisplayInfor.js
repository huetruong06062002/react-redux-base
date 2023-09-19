import React, { Component } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

export default class DisplayInfor extends Component {
  constructor(props) {
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
    console.log(">>> Call me constructor");
  }

  handleShowHide = () => {
    this.setState({ isShowHide: !this.state.isShowHide });
  };

  componentDidMount() {
    console.log(">>> Call me component did mount");
    setTimeout(() => {
      document.title = "Eric";
    });
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(
      ">>> Call me component did update",
      this.props.listUsers,
      prevProps.listUsers
    );
    if (this.props.listUsers.length === 5) {
      alert("You have 5 members in list");
    }
  }

  render() {
    const { listUsers } = this.props;
    console.log(">>> Call me render");
    return (
      <>
        <div>
          <button onClick={() => this.handleShowHide()}>
            {this.state.isShowHide ? "Hide list users" : "Show list users"}
          </button>
        </div>
        {/* <img src={logo} /> */}
        <div className="display-infor-container">
          {this.state.isShowHide &&
            listUsers.map((user) => (
              <div key={user.id} className={~~user.age <= 18 ? "red" : "green"}>
                <p>Name: {user.name} </p>
                <p>Age: {user.age} </p>
                <button onClick={() => this.props.handleDeleteUser(user.id)}>
                  X
                </button>
                <hr />
              </div>
            ))}
        </div>
      </>
    );
  }
}
