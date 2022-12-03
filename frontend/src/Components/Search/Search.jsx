import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Actions/User";
import User from "../User/User";
import "./search.css";

const Search = () => {
  const [name, setName] = React.useState("");
  const { users, loading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };
  return (
    <div className="search">
      <form className="searchForm" onSubmit={submitHandler}>
        <Typography varient="h3"> Social App</Typography>

        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Please Enter Your Name"
        />

        <Button disabled={loading} type="submit">
          Search
        </Button>
        <div className="searchResult">
          {users &&
            users.map((user) => (
              <User
                key={user._id}
                userId={user._id}
                name={user.name}
                avatar={user.avatar.url}
              />
            ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
