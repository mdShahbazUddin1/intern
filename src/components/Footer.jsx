import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="category">
            <div>
              <h3>CATEGORIES</h3>
              <div className="cat-link">
                <NavLink className={"link"}>Builder</NavLink>
                <NavLink className={"link"}>Hosting</NavLink>
                <NavLink className={"link"}>Data Center</NavLink>
                <NavLink className={"link"}>Robotic-Automation</NavLink>
              </div>
            </div>
            <div>
              <h3>Contact</h3>
              <div className="cat-link">
                <NavLink className={"link"}>Contact</NavLink>
                <NavLink className={"link"}>Privacy Policy</NavLink>
                <NavLink className={"link"}>Terms Of Service</NavLink>
                <NavLink className={"link"}>Categories</NavLink>
                <NavLink className={"link"}>About</NavLink>
              </div>
            </div>
            <div className="state">
              <h3>United States</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
