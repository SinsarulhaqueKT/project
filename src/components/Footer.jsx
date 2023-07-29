import React from "react";
import logfooter from "./Images/logo-footer.png";
import fb from "./Images/fb.png";
import newin from "./Images/newin.png";
import yt from "./Images/yt.png";
import insta from "./Images/insta.png";
import tw from "./Images/tw.png";

const Footer = () => {
  return (
    <div className="mainfooter">
      <div className="foot1">
        <img src={logfooter} className="logfooter" />
        <p>Email :customersupport@dtdc.com</p>
        <hr />
        <p>Phone :+91-73 0577 0577</p>

        <hr />
        <div className="follow">
          <p>Follow us on:</p>
          <div className="sociallogos">
            <img src={fb} className="socialmedia" />
            <img src={newin} className="socialmedia" />
            <img src={yt} className="socialmedia" />
            <img src={insta} className="socialmedia" />
            <img src={tw} className="socialmedia" />
          </div>
        </div>
      </div>
      <div className="footercompany">
        <h4 className="compp">COMPANY</h4>
        <div className="footdesc">
          <p>About Us</p>
          <p>Awards & Recognition</p>
          <p>Corp. Social responsibility</p>
        </div>
      </div>
      <div className="footercompany">
        <h4>SHIP WITH US</h4>
        <div className="footdesc">
          <p>Book a Shipment</p>
          <p>Track a Shipment</p>
          <p>Business Inquiry</p>
        </div>
      </div>
      <div className="footercompany">
        <h4>HELP & SUPPORT</h4>
        <div className="footdesc">
          <p>Email Us</p>
          <p>Locate Us</p>
          <p>Customer Care</p>
        </div>
      </div>
      <div className="footercompany">
        <h4>SELF SERVICE PORTALS</h4>
        <div className="footdesc">
          <p>Customer Login</p>
          <p>Channel Partner Login</p>
          <p>Employee Login</p>
          <p>Download your PODs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
