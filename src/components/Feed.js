import React from "react";
import "./Feed.css";
import Share from "./Share";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedcomponents">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
