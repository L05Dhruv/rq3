import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Store token in localStorage
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);

      //navigate user to home page
      <NavLink to={"/home"} HomePage></NavLink>
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div>
        <h1>Welcome to the best App!</h1>
        <div id="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <br></br>
        </div>
    </div>
  );
};

