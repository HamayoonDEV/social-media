import React from "react";
import "./Rightsidebar.css";
import { Avatar } from "@mui/material";
import hamayoon from "../images/hamayoon.jpg";

const Rightsidebar = () => {
  return (
    <div className="rightsidebar">
      <div className="birthdayreminder">
        <img
          className="giftimage"
          src="https://em-content.zobj.net/thumbs/160/facebook/105/wrapped-present_1f381.png"
          alt="giftimage"
        />
        <p>
          <b>Sher khan khosa</b> and <b>5 other friends</b> hava a birthday
          today
        </p>
      </div>
      <div className="rightsidead">
        <img
          className="adimage"
          src="https://kinsta.com/wp-content/uploads/2020/05/mcdonalds-banner-example.png"
          alt="adimage"
        />
      </div>
      <div className="rightsideonline">
        <div className="onlinefriends">
          <h4>online friends</h4>
        </div>
        <div className="onlinefrinedsprofile">
          <Avatar src={hamayoon} className="profileimage" />
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
