import React from 'react'
import {Link} from "react-router-dom"
import "./Style.css"
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./Assets/bediconfront.jpg"
import img2 from "./Assets/sofa.webp"
import img3 from "./Assets/table.webp"
import img4 from "./Assets/dressfront.jpg"




function Home() {
  return (
    <div className='homeee'>
         <section id="home">
          <div class="row">
             <div class="col-lg-6 col-md-6 col-12 order-1 pt-5"><h1 class="display-4" className='heading'>THE LATEST <span className='aa'>FURNITURE</span></h1>
        <p class="my-lg-2 my-3">All types of Furnitures such as pooja mandapam, Sofas, Cots, Cupboards are availble at best price in Veera furniture Medavakkam</p>
        <button class="btn btn-primary my-4"><Link to="productpage" className='btnn'>View Product</Link></button></div>

     <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2 ">

        <Carousel interval={500}>
      <Carousel.Item >
        <img
          src={img1} height="400px" width={400}
          alt="First slide"  id="slide"
        />
    </Carousel.Item>
      <Carousel.Item >
        <img
          src={img2} height="400px" width={400}
          alt="Second slide"  id="slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          src={img3} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    <Carousel.Item >
        <img
          src={img4} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    </Carousel>


     </div>
    </div>
</section>

 </div>
  )
}

export default Home


