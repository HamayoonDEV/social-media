import React from "react";
import "./Share.css";
import { Avatar } from "@mui/material";
import hamayoon from "../images/hamayoon.jpg";
import CollectionsIcon from "@mui/icons-material/Collections";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const Share = () => {
  return (
    <div className="share">
      <div className="shareinput">
        <Avatar src={hamayoon} />
        <input placeholder="what is in your mind" className="shareinputfield" />
      </div>
      <hr className="sharehr" />
      <div className="sharetag">
        <div className="sharetags">
          <ul>
            <li>
              <CollectionsIcon style={{ color: "tomato" }} />
              <span> photo or videos</span>
            </li>
            <li>
              <LabelIcon style={{ color: "skyblue" }} />
              <span>Tags</span>
            </li>
            <li>
              <LocationOnIcon style={{ color: "lightgreen" }} />
              <span>Location</span>
            </li>
            <li>
              <SentimentNeutralIcon style={{ color: "goldenrod" }} />
              <span>Feelings</span>
            </li>
          </ul>
        </div>

        <button className="sharebutton">Share</button>
      </div>
    </div>
  );
};

export default Share;
