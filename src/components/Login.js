import React, { useState } from "react";
import "./Login.css";
import Logo from "../assets/images/logo.png";
import userLogo from "../assets/images/user-logo.png";
import passwordLogo from "../assets/images/password-logo.png";
import ellipse from "../assets/images/ellipse.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("https://clg-ambassador.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (!res.status === 200 || !data) {
      console.log("Invalid Credentials");
    } else {
      console.log("Login Successful");
      navigate("/referal");
    }
  };

  return (
    <>
      {/* cootz logo */}
      <img
        className="logo-img"
        src={Logo}
        alt="cootz-logo"
        style={{ width: 89, height: 72 }}
      />
      <p className="logo-title">COOTZ</p>

      {/* login section */}
      <div className="login-container">
        <h1 id="heading">LOGIN</h1>
        <form method="POST" id="login-form" className="login-form">
          <img src={userLogo} alt="user-logo" />
          <input
            className="field"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Username"
            required
          />
          <br />
          <img src={passwordLogo} alt="user-logo" />
          <input
            className="field"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
            required
          />
          <br />

          <input type="submit" value="Login" id="login" onClick={loginUser} />
        </form>
        <img src={ellipse} alt="ellipse" className="ellipse-img" />
      </div>
    </>
  );
};

export default Login;
