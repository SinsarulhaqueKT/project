import React from 'react'
import dtdcretail from './Images/dtdc_retail_counter.jpg';
import financial from './Images/financial_express.jpg';
import aramex from './Images/dtdc-aramex.jpg';
import adopts from './Images/dtdc-adopts.jpg';
import dtdcandnarayana  from './Images/dtd and narayana.jpg';




const News = () => {
  return (
    <div className='mainbody6'>
        <div className="headnews">
      <h2 className='newshead'>In The News</h2>
      <p className='newsheadpara'>Read all the latest updates about DTDC</p>
      </div>
      <div className="newscardmain">
        <div className="innercard"> 
        <img src={dtdcretail} className='newimg' />
        <h3 className='retailhead'>DTDC retail counter inaugurated at Kolkata's Sealdah Metro Station</h3>
        <p className='retailpara'>For the first time in India, a pickup and drop off (PUDO) facility was inaugurated at Sealdah metro station in Kolkata by DTDC, which would help commuters dispatch and receive parcels during the service hours of the East-West Metro (Green Line).</p>
        
        </div>
        <div className="innercard"> 
        <img src={financial} className='newimg' />
        <h3 className='retailhead'>DTDC's brand campaign on Financial Express' Spotlight</h3>
        <p className='retailpara'>We have seen logistics companies spin emotional stories before. But I am not sure I have seen DTDC craft such messages in the past. Through some simple yet compelling stories that draw from everyday life, DTDC manages to connect us with the importance ....</p>
        </div>
        <div className="innercard"> 
        <img src={aramex} className='newimg' />
        <h3 className='retailhead'>DTDC enters into an MoU with Aramex India</h3>
        <p className='retailpara'>MUMBAI, India, Dec. 20, 2022 /PRNewswire/ -- DTDC Express Ltd, one of India's leading Integrated Express Logistics companies offering domestic and international delivery solutions, has signed a non-binding MoU with Aramex India Private Limited...</p>
        </div>

    </div>
    <div className="newscardmain">
        <div className="innercard">
        <img src={adopts} className='newimg' />
        <h3 className='retailhead'>DTDC adopts what3words for deliveries across India</h3>
        <p className='retailpara'>"Now, customers can add their what3words address in the address section of the MyDTDC App, enabling them to specify a very precise delivery location – be it the front door, specific apartment complex entrance, or a tucked-away side passage," says an official release...</p>
        </div>
        <div className="innercard">
        <img src={dtdcandnarayana} className='newimg' />
        <h3 className='retailhead'>DTDC and Narayana Health sets up oxygen generator plant in Jaipur</h3>
        <p className='retailpara'>DTDC and its strategic partner, Geopost SA, owned by France’s Le Groupe La Poste., has collaborated with Narayana Hrudayalaya Charitable Trust and Narayana Hrudayalaya for the successful set-up and inauguration of an oxygen generator plant in Jaipur...</p>
             </div>
       

    </div>
    </div>
  )
}

export default News
