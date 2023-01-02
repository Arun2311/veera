import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import "./Style.css";


export default function Contact() {
  return (
    <div>
          <div className="link">
     
     <a
       className="orange"
       href="Tel:+919677211639"
       target="_blank"
       rel="noreferrer"
     >
       <BsTelephoneForwardFill color="liteblue" fontSize={35} />
       Phone
       
     </a>
     <a className="orange" href="https://wa.me/919677211639" target="blank">
       <IoLogoWhatsapp color="green" fontSize={40} />
       Whatsapp
     </a>
     <a className="orange" href="https://goo.gl/maps/u3JyJX1LJ28nnhjE9" target="blank">
       < BiMap color="blue" fontSize={40} />
       Map
     </a>

   
 
   </div>
   <div className='map'>

   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15557.071666216321!2d80.197944!3d12.8904864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc105646e4832996!2sVeera%20Furniture!5e0!3m2!1sen!2sin!4v1672694271478!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
   </div>

        
    </div>
  )
}
