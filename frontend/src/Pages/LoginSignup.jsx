import React, { useState } from "react";
import "./LoginSignup.css";
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [buttonColor, setButtonColor] = useState("#32a897");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Login is ok", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      localStorage.setItem("username", responseData.username);
      window.alert("login successfull");
      window.location.replace("/");
    } else {
      window.alert(responseData.errors);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("signup is ok", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      localStorage.setItem("username", responseData.username);
      window.alert("signup successfull");
      window.location.replace("/");
    } else {
      window.alert(responseData.errors);
    }
  };

  const switchMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="LoginSignup-container">
      {isLogin ? (
        <div className="login-container">
          <div className="login-left">
            <h1>Welcome Back</h1>
            <p>
              Didn't have Account ?{" "}
              <a className="LoginSignup-btn" onClick={switchMode}>
                {isLogin ? "Signup" : "Login"}
              </a>
            </p>
          </div>
          <div className="login-right">
            <h2 className="form-heading">Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                className="input-fill"
                placeholder="Email"
                value={formData.email}
                onChange={changeHandler}
                required
              />
              <input
                type="password"
                name="password"
                className="input-fill"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
                required
              />
              <input
                type="submit"
                className="ok-btn"
                style={{ backgroundColor: buttonColor }}
                // onClick={() => {
                //   setButtonColor(buttonColor === "white" ? "#32a897" : "white");
                // }}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="signup-container">
          <div className="signup-right">
            <h2 className="form-heading">Signup</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="username"
                className="input-fill"
                placeholder="Name"
                value={formData.username}
                onChange={changeHandler}
                required
              />
              <input
                type="email"
                name="email"
                className="input-fill"
                placeholder="Email"
                value={formData.email}
                onChange={changeHandler}
                required
              />
              <input
                type="password"
                name="password"
                className="input-fill"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
                required
              />
              <input
                type="submit"
                className="ok-btn"
                style={{ backgroundColor: buttonColor }}
                // onClick={() => {
                //   setButtonColor(buttonColor === "white" ? "#32a897" : "white");
                // }}
              />
            </form>
          </div>
          <div className="signup-left">
            <h1>Join With us</h1>
            <p>Explore Our Best Collection</p>
            <p>
              Already have an account?{" "}
              <a className="LoginSignup-btn" onClick={switchMode}>
                {isLogin ? "Signup" : "Login"}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
