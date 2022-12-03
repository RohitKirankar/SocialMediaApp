import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../Actions/User";

import "./resetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const { loading, message, error } = useSelector((state) => state.like);

  const alert = useAlert();
  const params = useParams();

  const dispatch = useDispatch();
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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
  };
  return (
    <div className="resetPassword">
      <form className="resetPasswordForm" onSubmit={submitHandler}>
        <Typography varient="h3"> Social App</Typography>

        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="New Password"
          required
          className="resetPasswordInputs"
          value={newPassword}
        />

        <Button disabled={loading} type="submit">
          Reset Password
        </Button>

        <Link to="/">
          <Typography>Login</Typography>
        </Link>

        <Typography>Or</Typography>
        <Link to="forgot/password">
          <Typography>Send Another Token</Typography>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
