import React from 'react'
import logfooter from './Images/logo-footer.png';
import fb from './Images/fb.png';
import newin from './Images/newin.png';
import yt from './Images/yt.png';
import insta from './Images/insta.png';
import tw from './Images/tw.png';
import LaFooter from './LaFooter';




const Contacts = () => {
  return (
    <div>
      <h2 className='trackhead'>Tracking Results</h2>
      <hr className='line' />
      <p className='trackpara'>To track your consignment please enter any combination of up to 25 DTDC tracking numbers, seperated by comma:</p>
      <div className="radioall">    
     <input className='radio' type="radio" name='rad' />
     <label for="radio">AWB/ CONSIGNMENT NUMBER</label>    
     <input className='radio' type="radio" name='rad' />
     <label for="radio">REFERENCE NUMBER</label>    
     </div>
     <div className="inputandtrackbut">
     <input className='textbox' type="text" />
     <button className='trackbut'>Track</button>
     </div>
     <p className='beware'>BEWARE OF FRAUD CALLS. DTDC won't ask for any payment through OTP/UPI</p>
     <div className='mainfooter'>
      <div className="foot1">
        <img src={logfooter} className="logfooter" />
     <p>Email :customersupport@dtdc.com</p>
     <hr />
     <p>Phone :+91-73 0577 0577</p>
     
     <hr />
     <div className="follow">
     <p>Follow us on:
     </p>
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
        <h4 className='compp'>COMPANY</h4>
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
     <LaFooter/>
    </div>
  )
}

export default Contacts
