import React from 'react'
import "./Faq.css"
import FaqHeading from './FaqHeading'
import Accordion from './Accordion'
function FaqDelivery() {
  const topicsStyle = {
    marginTop : "3%",
  }
  const sideStyle={
    margin: "0px",
  }
  const sideColStyle = {
    margin : "0px 20px",
  }
  const mainHeadingStyle = {
    fontSize:  "18px",
    margin:  "30px 0px",
    color: "black",
    fontWeight: "700",
    fontFamily: "Times New Roman', Times, serif",
  }
  const sideOptionsStyle = {
    padding: "10px 25px",
    color: "black",
    fontSize:"13px",
    fontFamily:"Crimson-text"

  }
  const sideOptionsIStyle = {
    paddingRight: "20px",
    fontSize:"20px",
    
  }
  const backToPrevStyle = {
    display : "none",
  }
  const sideBarStyle={
    marginTop: "50px",
  borderLeft : "1px solid lightgray",
  borderRight : "1px solid lightgray",
  }
  const moreTopicsH5 ={
    marginBottom: "30px",
    fontWeight: "500",
  }
  const moreTpicsA = {
    padding: "5px 20px",
    color: "white !important",
    backgroundColor: "Black",
  }
    return (
      <div>
      <FaqHeading />
        <div className="container faqPanel">
<div style={topicsStyle}>
    <h3 id="heading-mobile">Explore More Topics</h3>
    <div class="row row-cols-3 row-cols-md-5 text-center" id="mobile-menu-container">
      <div class="col" id="mobile-bar">
        <a href="/faq">
          <button class="btn btn-secondary" type="button" id="mobile-menu">
            <i class="fas fa-question-circle icon-mobile-menu"></i><br/>
            <label class="menu-label">Recent FAQ</label>
          </button>
        </a>
      </div>
      
      <div class="col" id="mobile-bar">
        <a href="/faqBussiness">
          <button class="btn btn-secondary" type="button" id="mobile-menu">
            <i class="far fa-user icon-mobile-menu"></i><br/>
            <label class="menu-label">Bussiness</label>
          </button>
        </a>
      </div>
      <div class="col" id="mobile-bar">
        <a href="/faqDelivery">
          <button class="btn btn-secondary curr" type="button" id="mobile-menu">
            <i class="fas fa-bullhorn icon-mobile-menu"></i><br/>
            <label class="menu-label">Delivery</label>
          </button>
        </a>
      </div>
      <div class="col" id="mobile-bar">
        <a href="/faqQuotation">
          <button class="btn btn-secondary" type="button" id="mobile-menu">
            <i class="fas fa-shopping-basket icon-mobile-menu"></i><br/>
            <label class="menu-label">Quotation</label>
          </button>
        </a>
      </div>
      <div class="col" id="mobile-bar">
        <a href="/faqFroud">
          <button class="btn btn-secondary" type="button" id="mobile-menu">
            <i class="fas fa-th icon-mobile-menu"></i><br/>
            <label class="menu-label">Froud</label>
          </button>
        </a>
      </div>
      <div class="col" id="mobile-bar">
        <a href="/faqOthers">
          <button class="btn btn-secondary" type="button" id="mobile-menu">
            <i class="far fa-credit-card icon-mobile-menu"></i><br/>
            <label class="menu-label">Others</label>
          </button>
        </a>
      </div>
      
    </div>
  </div>

  <div class="row" id="side" style={sideStyle}>
    <div class="col-md-3  foter-2" id = "side-bar"style={sideBarStyle}>
        <h5 style={moreTopicsH5}>Explore More Topics</h5>
        <a href="/faq">
          <div style={sideOptionsStyle}><i class="fas fa-question-circle" style={sideOptionsIStyle}></i><strong>Recent FAQ</strong>
          </div>
        </a>
       <a href="/faqAccount">
          <div style={sideOptionsStyle}><i class="far fa-user" style={sideOptionsIStyle}></i><strong>Account & Profile</strong></div>
        </a>
        <a href="/faqDelivery">
          <div style={sideOptionsStyle}><i class="fas fa-bullhorn" style={sideOptionsIStyle}></i><strong>Order Tracking & Delivery</strong></div>
        </a>
        <a href="/faqPaymentsandRefunds">
          <div style={sideOptionsStyle}><i class="fas fa-shopping-basket" style={sideOptionsIStyle}></i><strong>Payment & Refunds</strong></div>
        </a>
        <a href="/faqCustom">
          <div style={sideOptionsStyle}><i class="fa-solid fa-user-ninja"style={sideOptionsIStyle}></i><strong>Sampling & Customisations</strong></div>
        </a>
        <a href="faqprivacy">
          <div style={sideOptionsStyle}><i class="fa-solid fa-money-bill" style={sideOptionsIStyle}></i><strong>Privacy & Security</strong></div>
        </a>
        <a href="/faqreturns">
          <div style={sideOptionsStyle}><i class="fas fa-th" style={sideOptionsIStyle}></i><strong>Cancellations & Returns</strong></div>
        </a>
        <a href="/faqOthers">
          <div style={sideOptionsStyle}><i class="far fa-credit-card" style={sideOptionsIStyle}></i><strong>Others</strong></div>
        </a>
        
        
      </div>
    <div class="col" style={sideColStyle}>
      <h1 class="text-center"
        style={mainHeadingStyle}>Order Tracking & Delivery FAQS
      </h1>
      <div class="accordion_bk">
        <div class="mx-auto">
          
          <div id="accordionExample" class="accordion">
    
      
           <Accordion tag='ORDERS_TRACKING_DELIVERY'/>
           
          </div>
        </div>
      </div>
    </div>
    <a href="faq-shipping.html" id="back-to-prev" title="Back to top" class="foter-1" style={backToPrevStyle}><i class="fa fa-angle-left"></i></a>
      
  </div>
  
        </div>
        </div>
    )
}

export default FaqDelivery
