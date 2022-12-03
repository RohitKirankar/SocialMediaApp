import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "./NewPost.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createNewPost } from "../../Actions/Post";
import { useAlert } from "react-alert";
import { loadUser } from "../../Actions/User";
const NewPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const { loading, error, message } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleImagechange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(createNewPost(caption, image));

    dispatch(loadUser());
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
    <div className="newPost">
      <form className="newPostForm" onSubmit={submitHandler}>
        <Typography variant="h3">New Post</Typography>
        {image && <img src={image} alt="post" />}

        <input type="file" accept="image/*" onChange={handleImagechange} />
        <input
          type="text"
          placeholder="caption..."
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
        <Button disabled={loading} type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
