const express = require("express");
const { followUsers } = require("../controllers/post");
const {
  register,
  login,
  getPostofFollowing,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUser,
  forgetPassword,
  resetPassword,
  getMyPosts,
  getUserPost,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followUsers);

router.route("/posts").get(isAuthenticated, getPostofFollowing);

router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").get(isAuthenticated, myProfile);

router.route("/my/posts").get(isAuthenticated, getMyPosts);
router.route("/userposts/:id").get(isAuthenticated, getUserPost);

router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUser);

router.route("/forgot/password").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
