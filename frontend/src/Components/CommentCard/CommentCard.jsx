import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./CommentCard.css";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentOnPost } from "../../Actions/Post";
import { getFollowingPost, getMyPosts } from "../../Actions/User";
const CommentCard = ({
  userId,
  name,
  avatar,
  comment,
  commentId,
  postId,
  isAccount,
}) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const deleteCommentHandler = () => {
    dispatch(deleteCommentOnPost(postId, commentId));
    console.log("delete this one");
    if (isAccount) {
      dispatch(getMyPosts());
    } else {
      dispatch(getFollowingPost());
    }
  };

  return (
    <div className="commentUser">
      <Link to={`/user/${userId}`}>
        <img src={avatar} alt={name} />
        <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
      </Link>
      <Typography>{comment}</Typography>
      {isAccount ? (
        <Button onClick={deleteCommentHandler}>
          <Delete />
        </Button>
      ) : userId === user._id ? (
        <Button>
          <Delete onClick={deleteCommentHandler} />
        </Button>
      ) : null}
    </div>
  );
};

export default CommentCard;
