import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const navlinks = [
  {
    path: "/category",
    title: "Categories",
  },
  {
    path: "/builder",
    title: "Website Builders",
  },
  {
    path: "/deals",
    title: "Today's Deals",
  },
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="searchBox">
          <CiSearch className="searchIcon" />
          <input type="search" placeholder="Search..." />
        </div>
        <div className="navLinks">
          {navlinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={"link"}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
