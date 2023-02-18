import React,{ useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";
import ContactQuotation from "./Contactcategories";
import ContactQuotation2 from "./Contactcategories_copy";
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'



// import { useState, useEffect } from 'react';


function Contact() {
  const [EEmail,setEmail]=useState('')

  
const onChangeHandler = (fieldName, value)=>{


  var email = document.getElementById("email").value;
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
    setEmail(value);
  }

  
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
var tempemail = document.getElementById("email").value; 
var date = new Date().toLocaleString()
var emaill="";
if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(tempemail)){
  emaill = document.getElementById("email").value;
}
var message = document.getElementById("message").value;
console.log(message)
  var bodyFormData = new FormData();
  bodyFormData.append('Name', name)
  bodyFormData.append('email', emaill)
  bodyFormData.append('message',message)
  bodyFormData.append('date',date)

  axios({
    method: "post",
    url: "https://api.seventhsq.com/enquiry/contactus/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
  
    .then(function (response) {

      Swal.fire({
        icon: 'success',
        title: ' Thank you',
        text: 'Message Recieved',
        
      })
      //handle success
      // toast('Here is your toast.');
      // console.log(response);
      
      // NotificationManager.info('Info message');
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
      Swal.fire({
        icon: 'error',
        title: 'Invaild...',
        text: 'Please check the details added',
        // footer: '<a href="">Why do I have this issue?</a>'
      })

    });

  // setmessage("contact request delivered")
  // messa="message sent success"
  


}


  return (
    <div>
      <Helmet>
    <title>Customer Support | Seventh Square</title>
  </Helmet>
      <div className="upperSection">
        <div class="skills">
          <div class="container">
            <div class="text">
              <h2>
              <span style={{fontFamily:"crimson text"}}>CONTACT US</span>
              </h2>
              
            </div>

           
          </div>
        </div>
        <div class="contactQuotation" >
        <div className="container">
         <ContactQuotation/>
         </div>

      <h3 className='text-center ' style={{    marginTop: "20px"}}>Want to reach out to us directly</h3>
<div className="container">

         <ContactQuotation2/>
</div>
      </div>
      </div>
     
      <div class="contactPage">
        <section class="container" id="contact">
         

          <div class="contact-box">
       
            <div class="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div class="c-inputs">
              <form>
                <input type="text" name="name" id="name" placeholder="Full Name" />
                <input type="email" name="email" id="email" placeholder="Example@gmail.com"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" onChange={(e)=>{ onChangeHandler("email",e.target.value)}}  required />
                <textarea name="message" id="message" placeholder="Write Message"></textarea>

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
