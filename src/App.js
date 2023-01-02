import React from "react"
import Navbar from "./Component/Navbar"
import Home from './Component/Home'
import Product from "./Component/Product"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"



function App() {
  return (
    <div className="bgall">
          <Navbar/>
          {/* <Home/>
          <About/>
          <Product/>
          <Contact/>       */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='productpage' element={<Product/>}/> 

      </Routes>   
        

    </div>
      )
}

export default App;
