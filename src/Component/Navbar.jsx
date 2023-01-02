import React from "react";
import logo from "./Assets/logoo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="kk">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* <Link to="productpage" className='btnn'>View Product</Link> */}
          <Link class="navbar-brand" to="/">
            <img src={logo} width={120} height="120px" className="logo" />
          </Link>
          <h2 className="logoname">Veera Furniture</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
