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
          <select name="" className="samecompeny">
            <option className="textcompeny" selected hidden>
              Company
            </option>
            <option value="">About Us</option>
            <option value="">Leadership</option>
            <option value="">Awards and recognision</option>
            <option value="">Corporate Social responsibility</option>
            <option value="">invester relation</option>
          </select>

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
}

export default Layout;
