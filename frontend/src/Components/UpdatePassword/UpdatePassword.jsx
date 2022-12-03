import React, { useEffect } from "react";
import "./updatePassword.css";

import { Typography, Button } from "@mui/material";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { error, loading, message } = useSelector((state) => state.like);

  const dispatch = useDispatch();
  const alert = useAlert();

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
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
  }, [error, message, alert, dispatch]);

  return (
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={updateHandler}>
        <Typography varient="h3"> Social App</Typography>

        <input
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
          placeholder="Old Password"
          required
          className="updatePasswordInputs"
          value={oldPassword}
        />
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="New Password"
          required
          className="updatePasswordInputs"
          value={newPassword}
        />

        <Button disabled={loading} type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
