import React from 'react'
import experiance from './Images/experience.png'
import widespread from './Images/widespread.png'
import modern from './Images/modern-technology.png'
import custommised from './Images/customised-solutions.png';
import robust from './Images/robust-infrastructure.png';




const UniqueBar = () => {
  return (
    <div className='mainbody5'>
      <h2 className='uniquehead'>Our Unique Value Proposition</h2>
      <div className="advantages">
        <div className="alladv">
          <img src={experiance} className="uniqueimg" />
          <h5 className="redbelow">30+ years of Experience</h5>
        </div>
        <div className="alladv">
         <img src={widespread} className="uniqueimg" />
          <h5 className="redbelow">Wide Spread Network</h5>
        </div>
        <div className="alladv">
          <img src={modern} className="uniqueimg" />
          <h5 className="redbelow">Modern Technology</h5>
        </div>
       
      </div>
      <div className="subadvantage">
        <div className="alladv">
       <img src={custommised} className="uniqueimg" />
          <h5 className="redbelow">Customised Solutions</h5>
        </div>
      <div className="alladv">
        <img src={robust} className="uniqueimg" />
          <h5 className="redbelow">Robust Infrastructure</h5>
        </div>
      </div>
    </div>
  )
}

export default UniqueBar
