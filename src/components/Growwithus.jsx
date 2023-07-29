import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import LaFooter from "./LaFooter";
import NewCards from "./NewCards";

const Growwithus = () => {
  return (
    <div>
      <div className="mainheadgrowwithus">
        <h1>Join India’s Largest Express Logistics Partner Ecosystem</h1>
      </div>
      <h2 className="headgrowwithus">About DTDC’s Partner Program</h2>
      <p className="growwithuspara">
        Since its inception in 1990, DTDC’s Channel Partner model has
        revolutionised the Express Logistics industry in India. We are pioneers
        in creating a platform where people with limited resources <br />
        and a dream to start a business can transform into successful
        entrepreneurs leveraging dynamic opportunities in the logistics & supply
        chain space. Our Partner Program assists aspiring <br />
        individuals with minimal capital investment and helps them generate
        business for themselves and DTDC across both Sales and Service tracks.
        Today, DTDC has 14,000+ successful channel <br />
        partners across India serving all our customers. We welcome enterprising
        individuals with sales acumen and service orientation to join our
        winning team of partners across the country.
      </p>
      <h2 className="headgrowwithus">
        Different types of Partner opportunities that we offer:
      </h2>
      <div className="carding">
        <Cards />
        <NewCards />
        <Footer />
        <LaFooter />
      </div>
    </div>
  );
};

export default Growwithus;
