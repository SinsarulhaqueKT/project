import React from 'react'
import express from './Images/express-parcels.jpg';
import express2 from './Images/international.jpg';
import express3 from './Images/integrated-ecommerce-logistics.jpg';



const OurSeviceBar = () => {
  return (
    <div className= 'maincontainerservice'>
        <h2 className='servicehead'>
        Our Services
        </h2>
       <div className="servicecards">
        <div className="card">
            <img src={express} className="express" />
            <div className="headpara">
            <h5 className='expresshead'>Express Parcels</h5>
            <p className='expresspara'>The Express Parcels Vertical offers a wide range of domestic <br /> products and services catering to C2C and B2B customers for <br /> documents and parcels of all sizes including part-truck-load <br /> shipments...</p>
        </div>
        </div>
        <div className="card">
        <img src={express2} className="express" />
            <div className="headpara">
            <h5 className='expresshead'>International Shipments</h5>
            <p className='expresspara2'>We provide shipping to over 220 destinations by leveraging our <br /> tie-ups with international partners and our own offices in <br /> major commerce centers across the globe. Our wide range of <br /> international shipping solutions are...</p>
        </div>
        </div>
        <div className="card">
                <img src={express3} className="express" />
            <div className="headpara">
            <h5 className='expresshead'>Integrated E-commerce Logistics</h5>
            <p className='expresspara2'>Our Integrated E-commerce Logistics is an end-to-end solution <br /> specifically designed for e-commerce companies who need <br /> quick and reliable logistics to gain a competitive edge. From <br /> pick-up...</p>
        </div>
        </div>
       </div>



    </div>
  )
}

export default OurSeviceBar
