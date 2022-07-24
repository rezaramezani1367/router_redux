import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/comments" element={<Comments />} />
    </Routes>
  );
}

export default Routers;
