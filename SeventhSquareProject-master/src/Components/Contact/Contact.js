import React from "react";
import "./Contact.css";
import axios from "axios";
import ContactQuotation from "./Contactcategories";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
// import { useState, useEffect } from 'react';

// const [message,setmessage]=useState('')
const notify = ()=>{
 
  // Calling toast method by passing string
  toast('Hello Geeks')
}

var status="";
var messa = "";
const contact_request=async(e)=>{

//   let name=e.target.name
// let value=e.target.value
// console.log(value)
// console.log(name)
// if(name=='message'){
//   setmessage(value)
// }
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
console.log(message)
  var bodyFormData = new FormData();
  bodyFormData.append('Name', name)
  bodyFormData.append('email', email)
  bodyFormData.append('message',message)

  axios({
    method: "post",
    url: "https://api.seventhsq.com/enquiry/contactus/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);

    })
    .catch(function (response) {
      //handle error
      console.log(response);

    });

  // setmessage("contact request delivered")
  // messa="message sent success"
  


}


function Contact() {
  return (
    <div>
      <div className="upperSection">
        <div class="skills">
          <div class="container">
            <div class="text">
              <h2>
                HOW CAN WE <span>HELP</span> YOU ?
              </h2>
              
            </div>

            {/* <div class="skill-card">
              <div class="card">
                <i class="fas fa-pencil-ruler"></i>
                <h4>Shopping</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>

              <div class="card">
                <i class="fas fa-magic"></i>
                <h4>Bussiness</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>

              <div class="card">
                <i class="fab fa-sketch"></i>
                <h4>Delivery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>

              <div class="card">
                <i class="fab fa-bitbucket"></i>
                <h4>Quotation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>

              <div class="card">
                <i class="fas fa-chart-line"></i>
                <h4>Froud</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>

              <div class="card">
                <i class="fas fa-file-code"></i>
                <h4>Other</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  aliquid, ipsam.
                </p>
              </div>
            </div> */}
          
          </div>
        </div>
        <div class="contactQuotation">
         <ContactQuotation/>
      </div>
      <h3 className='text-center mt-5 pt-5'>Not related to above categories ? Contact Below</h3>
      </div>
     
      <div class="contactPage">
        <section class="container" id="contact">
          {/* <div class="social">
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div> */}

          <div class="contact-box">
            <div class="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div class="c-inputs">
              <form>
                <input type="text" name="name" id="name" placeholder="Full Name" />
                <input type="email" name="email" id="email" placeholder="Example@gmail.com" />
                <textarea name="message" name="message" id="message" placeholder="Write Message"></textarea>

                <button onClick={contact_request}>SEND</button>
                {/* <button onClick={notify}>Click Me!</button> */}
              </form>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.27720599826588!2d75.75045938887061!3d26.953111270648957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3031bae50d9%3A0x816cb9713e591072!2sSeventh%20Square%20Internet%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1626717723197!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Contact;
