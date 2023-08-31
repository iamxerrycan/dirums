import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import TaskPopup from "./TaskPopup";
import manlogo from "./../Logo/manlogo.png"

import "./Navbar.css";

const Navbar = () => {
  const [isPopup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  const exitPopup = () => {
    setPopup(false);
  };

  const handleTaskSubmit = () => {
    exitPopup();
  };

  return (
    <div className="navbar">
      <div className="navbarContent">
        <div className="navbarLeft">
          <button className="buttonplus" onClick={openPopup}>
           + Create Task
          </button>
          <div className="verticalLine"></div>
          <div id="searchBorder">
            <input type="text" placeholder="Search your query" />
          </div>
          <div className="searchIcon">
            <BsSearch />
          </div>
        </div>
        <div className="navbarRight">
          <span className="username">Ranjith Rajak | Senior Developer</span>
          <span className="navbarLogo">
            <img
              src={manlogo}
              alt=""
            />
          </span>
          <select className="iconMenu">
            <option value=""></option>
          </select>
        </div>
      </div>

      {isPopup && <TaskPopup onTaskSubmit={handleTaskSubmit} />}

    </div>
  );
};

export default Navbar;
