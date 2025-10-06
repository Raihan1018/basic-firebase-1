import React from "react";
import { Link } from "react-router-dom";
import Logout from "./components/Logout";
import AuthState from "./components/AuthState";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Logout/>
      <AuthState/>
    </div>
  );
};

export default App;
