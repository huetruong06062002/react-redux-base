import React, { Component, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// export default class DisplayInfor extends Component {
//   render() {
//     const { listUsers } = this.props;
//     console.log(">>> Call me render");
//     return (
//       <>
//         <div>
//           <button onClick={() => this.handleShowHide()}>
//             {this.state.isShowHide ? "Hide list users" : "Show list users"}
//           </button>
//         </div>
//         {/* <img src={logo} /> */}
//         <div className="display-infor-container">
//           {this.state.isShowHide &&
//             listUsers.map((user) => (
//               <div key={user.id} className={~~user.age <= 18 ? "red" : "green"}>
//                 <p>Name: {user.name} </p>
//                 <p>Age: {user.age} </p>
//                 <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                   X
//                 </button>
//                 <hr />
//               </div>
//             ))}
//         </div>
//       </>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  // console.log(listUsers);
  const [isShowHide, setIsShowHide] = useState(true);
  const handleShowHide = () => {
    setIsShowHide(!isShowHide);
  };
  return (
    <>
      <div>
        <button onClick={() => handleShowHide()}>
          {isShowHide ? "Hide list users" : "Show list users"}
        </button>
      </div>
      {/* <img src={logo} /> */}
      <div className="display-infor-container">
        {isShowHide &&
          listUsers.map((user) => (
            <div key={user.id} className={+user.age <= 18 ? "red" : "green"}>
              <p>Name: {user.name} </p>
              <p>Age: {user.age} </p>
              <button onClick={() => props.handleDeleteUser(user.id)}>X</button>
              <hr />
            </div>
          ))}
      </div>
    </>
  );
};

export default DisplayInfor;
