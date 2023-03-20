import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import hamayoon from "../images/hamayoon.jpg";

const Post = () => {
  return (
    <div className="postcontainer">
      <div className="postwrapper">
        <div className="post">
          <Avatar src={hamayoon} className="profilepic" />
          <h5>Hamayoon khosa</h5>
          <span>5 days ago</span>
        </div>
        <div className="morevart">
          <MoreVertIcon />
        </div>
      </div>
      <div className="postcenter">
        <h5>hey! This is my first post</h5>
        <div className="postimage">
          <img src={hamayoon} />
        </div>
      </div>
      <div className="postfooter">
        <div className="postfooterleft">
          <img
            src="https://e7.pngegg.com/pngimages/474/499/png-clipart-facebook-messenger-like-button-emoji-face-heart-logo-love-text.png"
            alt="heartimage"
            className="heartimage"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZRn8W46wBbAqtivFdHqRgZqVpkgcnbibUxevuI2oWD_a_76riZiSm70G3_dWe_vk4q4&usqp=CAU"
            alt="likeimage"
            className="likeimage"
          />
        </div>
        <div className="postfooterright">
          <h6>92 Comments</h6>
        </div>
      </div>
    </div>
  );
};

export default Post;
