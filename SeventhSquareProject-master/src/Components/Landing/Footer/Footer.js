import React, {useEffect, useState} from "react";
import "./Footer.css";
  import { FaFacebookF } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa";
  import { FaTwitter } from "react-icons/fa";
import  {Link,router} from "react-router-dom"
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton} from "react-share";
function Footer() {
  const [usertoken, setusertoken] = useState();

  const Verify=()=>{
    const token=localStorage.getItem('token')
    setusertoken(token)
    console.log(token)
  
  }
  useEffect(()=>{
     Verify()
  },[])

  return (
    <div>
      <footer class="foter-1 text-center">
  <div class="row mobileSocialIcon">
  <a  href='https://www.facebook.com/seventhsq/'> <FaFacebookF  style={{"font-size": "1.5em","color": "white"}} /></a>
            <a href=' https://twitter.com/SeventhSq'><FaTwitter  style={{"font-size": "1.5em","color": "white"}}/> </a>
              <a href='https://www.instagram.com/seventhsquare/'><FaInstagram   style={{"font-size": "1.5em","color": "white"}}/></a>
             <a href='https://www.linkedin.com/company/seventh-square/'> <FaLinkedinIn   style={{"font-size": "1.5em","color": "white"}}/></a>
  </div>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed text-light" type="button" data-mdb-toggle="collapse" 
          data-mdb-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Company
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
        data-mdb-parent="#accordionFlushExample">
        <div class="accordion-body">
          <a class="btn btn-secondary text-left" role="button" href="/about/"
            >About Us</a>
          <a class="btn btn-secondary text-left" role="button" href="/careers/"
            >Media</a>
          <a class="btn btn-secondary text-left" role="button" href="/" >Reviews</a>
          <a class="btn btn-secondary text-left" role="button" href="/contact-us/"
            >Reach Us</a>
          <a class="btn btn-secondary text-left" role="button" href="/blog/"
            >Seller Blog</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed text-light" type="button" data-mdb-toggle="collapse" 
          data-mdb-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Policy
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
        data-mdb-parent="#accordionFlushExample">
        <div class="accordion-body">
          <a class="btn btn-secondary text-left" role="button" href="/policy/"
           >Returns</a>
          <a class="btn btn-secondary text-left" role="button" href="/policy/"
            >Storage</a>
          <a class="btn btn-secondary text-left" role="button" href="/policy/"
            >Payment</a>
          <a class="btn btn-secondary text-left" role="button" href="/guidelines/"
            >Seller Guidelines</a>
          <a class="btn btn-secondary text-left" role="button" href="/terms/"
            >Terms & Conditions</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed text-light" type="button" data-mdb-toggle="collapse" 
          data-mdb-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Resources
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
        data-mdb-parent="#accordionFlushExample">
        <div class="accordion-body">
          <a class="btn btn-secondary text-left" role="button" href="/seller-help/Seventh_Square_Seller/"
            >Why Sell with us?</a>
          <a class="btn btn-secondary text-left" role="button" href="/how-it-works/"
            >How it Works</a>
          <a class="btn btn-secondary text-left" role="button" href="/advertise-with-us/"
            >Advertise with Us</a>
          <a class="btn btn-secondary text-left" role="button" href="/pricing&commision/"
            >Pricing & Commissions</a>
          <a class="btn btn-secondary text-left" role="button" href="/pricecalculator/"
            >Price Calculator</a>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed text-light" type="button" data-mdb-toggle="collapse" 
          data-mdb-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          Help
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
        data-mdb-parent="#accordionFlushExample">
        <div class="accordion-body">
          <a class="btn btn-secondary text-left" role="button" href="/account/register/"
            >Seller Registration</a>
          <a class="btn btn-secondary text-left" role="button" href="/terms/"
            >Terms of Use</a>
          <a class="btn btn-secondary text-left" role="button" href="/policy/"
            >Privacy Policy</a>
          <a class="btn btn-secondary text-left" role="button" href="/forum/"
            >Seller Forum</a>
          <a class="btn btn-secondary text-left" role="button" href="/faq/"
            >Frequently Asked Questions</a>
        </div>
      </div>
    </div>
  </div>
</footer>
      <footer className="container-fluid desktopFooter">
        <div class="content">
          <div class="top">
            <Link to="/"><img src="https://seller.seventhsq.com/static/staticfiles/img/white%20png%20(1).png" alt="" height="45px" width="160px" /></Link>
            <div class="media-icons">
           
            <a  href='https://www.facebook.com/seventhsq/'> <FaFacebookF  style={{"font-size": "1.5em","color": "white"}} /></a>
            <a href=' https://twitter.com/SeventhSq'><FaTwitter  style={{"font-size": "1.5em","color": "white"}}/> </a>
              <a href='https://www.instagram.com/seventhsquare/'><FaInstagram   style={{"font-size": "1.5em","color": "white"}}/></a>
             <a href='https://www.linkedin.com/company/seventh-square/'> <FaLinkedinIn   style={{"font-size": "1.5em","color": "white"}}/></a>
            </div>
          </div>
          <hr />
          <div class="link-boxes">
            <ul class="box" >
              <li><a href="/">Registered Office :</a></li>
              <li><a href="/">75, Jhotwara Industrial Area, Jaipur, Rajasthan-302012 </a></li>
              <li><a href="/">CIN No. : 121212234ASDQ</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Platform</li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/">Media</a></li>
              <li><a href="/review">Reviews</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
            {
              usertoken!=undefined || usertoken!=null?
              <ul class="box">
              <li class="link_name">MY ACCOUNT</li>
              
              <li><a href="/profile">Profile</a></li>
              <li><a href="/oders">Orders</a></li>
              <li><a href="/payments">Payments</a></li>
              <li><a href="/enquiry">Enquiries</a></li>
              <li><a href="/requests">Complaints</a></li>
            </ul>:
                <ul class="box">
                <li class="link_name">MY ACCOUNT</li>
                
                <li><a href="/login">Profile</a></li>
                <li><a href="/login">Orders</a></li>
                <li><a href="/login">Payments</a></li>
                <li><a href="/login">Enquiries</a></li>
                <li><a href="/login">Complaints</a></li>
              </ul>
            }
           
            <ul class="box">
              <li class="link_name">Resources</li>
              <li><a href="/adminrequest">Material Estimator</a></li>
              <li><a href="/">Cost Estimator</a></li>
              <li><a href="/">Material Consultation</a></li>
              <li><a href="/requestQuotation">Request Quotation</a></li>
              <li><a href="https://seller.seventhsq.com/">Sell on Seventh Square</a></li>
              {/* <li><a href="/faq">FAQ</a></li> */}
            </ul>
            <ul class="box">
              <li class="link_name">Help</li>
              {/* <li><a href="/">Business Buyer Registration</a></li> */}
              <li><a href="/">Why Buy with Us?</a></li>
              <li><a href="/faq">Frequently Asked Questions</a></li>
              <li><Link to="/">Raise a ticket</Link></li>
              <li><Link to="/">Returns</Link></li>
              <li><Link to="/term">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">Copyright © <a href="/">Seventh Square Internet Pvt. Ltd. 2021 </a></span>
              <span class="policy_terms">
                <a href="/">Terms of Use</a>
                <a href="/">Privacy  Policy</a>
              </span>
            </div>
         </div>
       </div>
     </footer>
  

</div>
  )
}
export default Footer;
