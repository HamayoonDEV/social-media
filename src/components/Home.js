import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Righsidebar from "./Rightsidebar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homebody">
        <Sidebar />
        <Feed />
        <Righsidebar />
      </div>
    </div>
  );
};

export default Home;
