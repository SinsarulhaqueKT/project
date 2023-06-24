import React from "react";
import mainimage from "./Images/img1.jpg";
import mobile from "./Images/icon-pickup.png";
import tracking from './Images/icon-tracking.png';
import searching from './Images/icon-search-sch.png';



const Img = () => {
  return (
    <div className="mainbody1">
      <img src={mainimage} className="mainimage" />
      <div className="mainplaycrds">
        <div className="playcards">
          <img src={mobile} className="iconpic" />
          <div className="rightdiv">
            <p>Book Your Shipment</p>
            <p>Request a pickup and we'll be at your dooe shortly.</p>
            <button className="boknow">BOOK NOW</button>
          </div>
        </div>
        <div className="playcards">
        <img src={tracking} className="iconpic" />
          <div className="rightdiv">
            <p>Book Your Shipment</p>
            <p>Request a pickup and we'll be at your dooe shortly.</p>
            <button className="boknow">Track & Shipment</button>
          </div>
        </div>
        <div className="playcards">
        <img src={searching} className="iconpic" />
          <div className="rightdiv">
            <p>Book Your Shipment</p>
            <p>Request a pickup and we'll be at your dooe shortly.</p>
            <button className="boknow">Start Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img;
