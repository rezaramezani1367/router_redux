import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import UserPosts from "./components/UserPosts";
import PostComments from "./components/PostComments";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users">
        <Route path=":userId/posts" element={<UserPosts />}></Route>
        <Route index element={<Users />}></Route>
      </Route>
      <Route path="/posts">
        <Route index element={<Posts />}></Route>
        <Route path=":postId/comments" element={<PostComments />}></Route>
      </Route>
      <Route path="/comments" element={<Comments />} />
    </Routes>
  );
}

export default Routers;
