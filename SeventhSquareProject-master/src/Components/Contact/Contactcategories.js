import React from "react";
import "./Contactcategories.css";
function ContactQuotation() {
  return (
    <div className='mt-5'>
        <div class="d-flex justify-content-evenly topics">
      <div class="button">
          <div class="icon p-3">Payments & Refunds</div>
        </div>
        <div class="button">
          <div class="icon p-3">Order Tracking & Delivery</div>
        </div>
        <div class="button">
          <div class="icon p-3">My Account</div>
        </div>
        <div class="button">
          <div class="icon pb-3">Sampling & Customisations</div>
        </div>
        
      </div>
      
      <div class="d-flex justify-content-evenly topics">
      <div class="button">
          <div class="icon p-3">Privacy & Security</div>
        </div>
        <div class="button">
          <div class="icon p-3">Cancellations & Returns</div>
        </div>
        <div class="button">
          <div class="icon p-3">Reviews & Promos</div>
        </div>
        <div class="button">
          <div class="icon v">Others</div>
        </div>
        
      </div>
    </div>
  );
}

export default ContactQuotation;
