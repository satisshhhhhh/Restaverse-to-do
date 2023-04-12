import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import incompleteIcon from "../assets/incomplete.png";
import completeIcon from "../assets/completed.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/" className="navbar-logo">
          <h1>To Do App</h1>
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink exact to="/" activeClassName="active" className="navbar-link">
          <img src={incompleteIcon} alt="incomplete tasks" />
          <span className="navbar-link-text">Incomplete Tasks</span>
        </NavLink>
        <NavLink
          exact
          to="/completed"
          activeClassName="active"
          className="navbar-link"
        >
          <img src={completeIcon} alt="completed tasks" />
          <span className="navbar-link-text">Completed Tasks</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
