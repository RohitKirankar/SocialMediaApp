import { Avatar, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../Actions/User";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImagechange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [alert, error, dispatch]);

  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <Typography varient="h3"> Social App</Typography>

        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImagechange} />

        <input
          onChange={(e) => setName(e.target.value)}
          className="registerInputs"
          type="text"
          value={name}
          placeholder="Please Enter Your Name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          className="registerInputs"
          type="email"
          placeholder="Email"
          required
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="registerInputs"
          type="password"
          placeholder="Password"
          required
          value={password}
        />

        <Link to="/">
          <Typography> alredy Signed Up ? Login Now</Typography>
        </Link>
        <Button disabled={loading} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
