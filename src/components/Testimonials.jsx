import React from "react";
import testileftimage from "./Images/testileftimg.png";
import testiright from './Images/testirightimg.png';


const Testimonials = () => {
  return (
    <div className="mainalltest">
    
      <div className="leftall">
        <div className="testitext">
          <h4 className="textihead">Testimonials</h4>
          <p className="textitextpara">
            See what our clients say about our service, in-depth understanding,
            and timely deliveries.
          </p>
        </div>
        <div className="testileftimg">
          <img src={testileftimage} className="testleftimg" />
        </div>
      </div>
      
      <div className="rightall">
        <img src={testiright} className="rightimg" />
      </div>
      </div>
      
    
  );
};

export default Testimonials;
