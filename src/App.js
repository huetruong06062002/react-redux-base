import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

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
      <Header />
      <div>
        Test Link
        <button>
          <Link to={`/users`}>Users page</Link>
        </button>
        <button>
          <Link to={`/admins`}>Admins page</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
