import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyComponent />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
