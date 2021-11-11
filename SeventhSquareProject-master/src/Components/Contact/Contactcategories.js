import React from "react";
import "./Contactcategories.css";
function ContactQuotation() {
  return (
    <div className='mt-5'>
        <div class="d-flex justify-content-evenly topics">
        
      <div class="button" >
        <a href="/faqPaymentsandRefunds">
          <div class="icon p-3">
            <p>Payments & Refunds </p> </div>
          </a>
        </div>
      
        <div class="button">
        <a href="/faqDelivery">
          <div class="icon p-3"><p>Order Tracking & Delivery</p></div>
          </a>
        </div>
        <div class="button">
        <a href="/faqAccount">
          <div class="icon p-3"><p>My Account</p></div>
          </a>
        </div>
        <div class="button" herf="/faqDelivery">
        <a href="/faqCustom">
          <div class="icon pb-3"><p>Sampling & Customisations</p></div>
          </a>
        </div>
        
      </div>
      
      <div class="d-flex justify-content-evenly topics">
      <div class="button">
      <a href="/faqprivacy">
          <div class="icon p-3"><p>Privacy & Security</p></div>
          </a>
        </div>
        <div class="button">
        <a href="/faqreturns">
          <div class="icon p-3"><p>Cancellations & Returns</p></div>
          </a>
        </div>
        <div class="button">
        <a href="/faqOthers">
          <div class="icon p-3"><p>Reviews & Promos</p></div>
          </a>
        </div>
        <div class="button">
        <a href="/faqOthers">
          <div class="icon v"><p>Others</p></div>
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default ContactQuotation;
