import { configureStore } from "@reduxjs/toolkit";
import { likeReducer, myPostReducer, userPostsReducer } from "./Reducers/Post";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userProfileReducer,
  userReducers,
} from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userReducers,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer,
    myPost: myPostReducer,
    userPost: userPostsReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
