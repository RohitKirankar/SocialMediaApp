import React, { useEffect } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const alert = useAlert();
  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, alert, message, dispatch]);

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography varient="h3"> Social App</Typography>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          value={password}
        />

        <Link to="forgot/password">
          <Typography>Forgot Password</Typography>
        </Link>

        <Link to="/register">
          <Typography>New User</Typography>
        </Link>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
