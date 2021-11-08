import React from 'react'
import "./Testimonial.css";
import Brand from "../../../images/brand.png";
function Brands() {
    return (
        <div>
            <section class="section brands">
        <div class="title">
          <span className="h1">Brands associated with us </span>
        </div>

        <div class="customer-logos slider">
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
          <div class="slide">
            <img src={Brand} alt="logo" />
          </div>
        </div>
      </section>
        </div>
    )
}

export default Brands
