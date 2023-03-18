import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import hamayoon from "../images/hamayoon.jpg";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_leftside">
        <h1>Social Media</h1>
      </div>
      <div className="navbar_center">
        <SearchIcon style={{ color: "white" }} />
        <input type="text" placeholder="search here" className="search_input" />
      </div>
      <div className="navbar_rightside">
        <ul>
          <li>
            <DraftsIcon style={{ color: "white" }} />
            <div className="notificationicon">
              <span>0</span>
            </div>
          </li>
          <li>
            <NotificationsIcon style={{ color: "white" }} />
            <div className="notificationicon">
              <span>0</span>
            </div>
          </li>
          <li>
            <Avatar src={hamayoon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
