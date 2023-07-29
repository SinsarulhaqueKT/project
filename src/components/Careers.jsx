import React from "react";
import Footer from "./Footer";
import LaFooter from "./LaFooter";

const Careers = () => {
  return (
    <div>
      <h1 className="lifehead">Life at DTDC</h1>
      <div className="paramaindiv">
        <p>
          At DTDC, our people are integral to our success, and hence, building
          an environment that boosts their professional and personal growth is
          our priority. Over the years, we have consistently built a work
          environment that is happy, healthy, stress-free, and conducive to our
          employees’ growth. We also firmly believe in the power of learning and
          invest heavily in learning and development initiatives.
        </p>
        <p>
          In the spirit of our ‘One DTDC, One Family’ culture, we have
          introduced a unique and revolutionary practice called HR Aapke Dwar in
          which we break away from traditional HR practices and encourage
          employees to connect directly with our management to discuss any
          challenges they may be facing. Read to know more about what it is like
          to work with DTDC.
        </p>
      </div>
      <h3 className="uniquehead">Unique initiatives for DTDCians</h3>
      <hr className="underline" />
      <div className="uniqueparadiv">
        <p>
          Trust Shop: We have installed vending machines with healthy eatables
          across our offices in India that successfully run on the trust of our
          employees.
        </p>
        <p>
          ‘Face’ Platform: A networking platform for our employees around the
          world to freely connect with each other daily and share their personal
          and professional achievements.
        </p>
        <p>
          Wellness Programmes: We sponsor wellness camps to take care of our
          employees’ health.
        </p>
        <p>
          Bravo Card: An initiative to appreciate and reward outstanding
          performance.
        </p>
      </div>
      <h3 className="funhead">Fun at DTDC</h3>
      <hr className="underline" />
      <p className="funpara">
        Fun is what brings the entire DTDC family together! We organise plenty
        of activities to keep our employees engaged and help build a team
        spirit. Festive celebrations, indoor games, competitions, picnics, and
        cricket tournaments are just some of the many ways we like to relax and
        unwind.
      </p>

      <Footer />
      <LaFooter />
    </div>
  );
};

export default Careers;
