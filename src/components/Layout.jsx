import React from "react";

import { Link, Outlet } from "react-router-dom";
import logo from "./Images/logo.png";

function Layout() {
  return (
    <div className="mainnav">
      <nav className="mm">
        <img src={logo} className="logo" />

        <ul className="nav-main">
          <Link className="same" to="/">
            Home
          </Link>
         
          <Link className="same" to="growwithus">
            Grow With Us
          </Link>
          <Link className="same" to="careers">
            Careers
          </Link>
          <Link className="same" to="contactus">
            Contact Us
          </Link>
        </ul>
        
        <button className="but">SHIP WITH MYDTDC</button>
      </nav>
      <Outlet />
      </div>
  );
};

export default Layout;
