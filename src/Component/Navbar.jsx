import React from "react";
import logo from "./Assets/logoo.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";

function Navbar() {
  return (
 

    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand logoname " to="/">
           <img src={logo} width={80} height="60px" className="logo" />
         <span className="logoname">Veera Furnitures</span>  
          </Link>
               <h2 className="logoname"></h2>
    <button className="navbar-toggler mr-n3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon mr-n3"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center navbarcontent" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 navbarcontent">
        <li className="nav-item">
        <Link className="nav-link active " to="/">
          <AiFillHome color="rgb(2, 117, 216)"/>
          <span className="navbarcontent">Home</span>
          
          </Link>

        </li>
        <li className="nav-item">
          < Link className="nav-link" to="productpage ">
            <MdProductionQuantityLimits color="rgb(2, 117, 216)"/>
            <span className="navbarcontent">Product</span>

            </Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link" to="contactpage">
            <RiContactsBookFill color="rgb(2, 117, 216)"/>
            
            <span className="navbarcontent">Contact Us</span>

          
          </Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
// </div>
  );
}

export default Navbar;
