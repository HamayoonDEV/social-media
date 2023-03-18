import React from "react";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import { Avatar } from "@mui/material";
import hamayoon from "../images/hamayoon.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebaricons">
        <ul>
          <li>
            <RssFeedIcon />
            <span>feed</span>
          </li>
          <li>
            <ChatIcon />
            <span>chats</span>
          </li>
          <li>
            <PlayCircleIcon />
            <span>videos</span>
          </li>
          <li>
            <BookmarkIcon />
            <span>bookmark</span>
          </li>
          <li>
            <GroupIcon />
            <span>groups</span>
          </li>
          <li>
            <HelpOutlineIcon />
            <span>questions</span>
          </li>
          <li>
            <EventNoteIcon />
            <span>events</span>
          </li>
          <li>
            <WorkIcon />
            <span>jobs</span>
          </li>
          <li>
            <SchoolIcon />
            <span>courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show more</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <Avatar src={hamayoon} className="friendimage" />
            <span className="friendusername">Hamayoon</span>
          </li>
          <li className="sidebarfriend">
            <Avatar src={hamayoon} className="friendimage" />
            <span className="friendusername">Hamayoon</span>
          </li>
          <li className="sidebarfriend">
            <Avatar src={hamayoon} className="friendimage" />
            <span className="friendusername">Hamayoon</span>
          </li>
          <li className="sidebarfriend">
            <Avatar src={hamayoon} className="friendimage" />
            <span className="friendusername">Hamayoon</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
