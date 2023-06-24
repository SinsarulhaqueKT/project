import React from 'react'

const Cards = () => {
    const newcard=[
        {
            title:"Dtdc 360 partner The Logistic All Rounder",
            content:"Our flagship channel partner opportunity. Be a part of India's largest physically accessible logistics network. Operate from a branded Customer Access Point and cover the entire spectrum of customers including Retail & MSME. Get access to exclusive benefits and support, and enjoy high returns.",
           butan:"Apply Now"   
        },
        {
            title:"Dtdc 360 partner The Logistic All Rounder",
            content:"Our flagship channel partner opportunity. Be a part of India's largest physically accessible logistics network. Operate from a branded Customer Access Point and cover the entire spectrum of customers including Retail & MSME. Get access to exclusive benefits and support, and enjoy high returns.",
           butan:"Apply Now"   
        },
        {
            title:"Dtdc 360 partner The Logistic All Rounder",
            content:"Our flagship channel partner opportunity. Be a part of India's largest physically accessible logistics network. Operate from a branded Customer Access Point and cover the entire spectrum of customers including Retail & MSME. Get access to exclusive benefits and support, and enjoy high returns.",
           butan:"Apply Now"   
        },
        {
            title:"Dtdc 360 partner The Logistic All Rounder",
            content:"Our flagship channel partner opportunity. Be a part of India's largest physically accessible logistics network. Operate from a branded Customer Access Point and cover the entire spectrum of customers including Retail & MSME. Get access to exclusive benefits and support, and enjoy high returns.",
           butan:"Apply Now"   
        },
        {
            title:"Dtdc 360 partner The Logistic All Rounder",
            content:"Our flagship channel partner opportunity. Be a part of India's largest physically accessible logistics network. Operate from a branded Customer Access Point and cover the entire spectrum of customers including Retail & MSME. Get access to exclusive benefits and support, and enjoy high returns.",
           butan:"Apply Now"   
        },
    ]
  return (
    <div className='oppurtunity'>
     
     {
            newcard.map((item)=>(
                <div className='innermain'>
                <h5>{item.title}</h5>
                <span>{item.content}</span>
                <br />
                <button>{item.butan}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Cards
