import React, { useEffect, useState } from "react";
import "./Contactcategories_copy.css";
import Popup from "./ModalCall";
import shield from "../../images/11.png";
import dot from "../../images/22.png";
import avatar from "../../images/33.png";
function ContactQuotation2() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="mt-5">
      <div class=" topics">
        <div class="button">
          <div>
            {/* <a href="/faqPaymentsandRefunds"> */}
            <div class="icon p-3">
              <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Live Chat </p>{" "}
              <p style={{ fontSize: "12px" }}>
                Start your live chat here and get your queries resolved within
                this window by our support team
              </p>{" "}
            </div>
            {/* </a> */}
          </div>
        </div>

        <div class="button">
          <div>
            {/* <a href="/faqDelivery"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Call us</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  Talk to Customer Support on 1800-103-103 (Monday - Saturday
                  7am to 10pm Sunday 10 am to 11 pm
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>

        <div class="button" herf="/faqDelivery">
          <div>
            {/* <a href="/faqCustom"> */}
              <div class="icon pb-3">
                <p onClick={() => setModalShow(true)} style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black",paddingTop:"10px" }}>Let us call you</p>
                <p style={{ fontSize: "12px" }} onClick={() => setModalShow(true)}>
                  Request a callback here and let us call you on your preferred
                  time
                </p>{" "}
                <Popup show={modalShow} onHide={() => setModalShow(false)} />
              </div>
             
          
            {/* </a> */}
          </div>
        </div>
      </div>

      

      

      <div class=" topics">
       
        <div class="button">
          <div>
            {/* <a href="/faqreturns"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Email us</p>
                <p style={{ fontSize: "12px" }}>
                  Available exclusively on care@seventhq.com
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>
        <div class="button">
          <div>
            {/* <a href="/faqprivacy"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Send a postcard </p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  We live here : Seventh Square Internet Pvt. Ltd. 75, Jhotwara industrial Area, Jaipur Rajasthan 302012
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
      <div class=" topics_m">
        <div class="button">
          <div>
            {/* <a href="/faqPaymentsandRefunds"> */}
            <div class="icon p-3">
              <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Live Chat </p>{" "}
              <p style={{ fontSize: "12px" }}>
                Start your live chat here and get your queries resolved within
                this window by our support team
              </p>{" "}
            </div>
            {/* </a> */}
          </div>
        </div>

        <div class="button">
          <div>
            {/* <a href="/faqDelivery"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Call us</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  Talk to Customer Support on 1800-103-103 (Monday - Saturday
                  7am to 10pm Sunday 10 am to 11 pm
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>

        <div class="button" herf="/faqDelivery">
          <div>
            {/* <a href="/faqCustom"> */}
              <div class="icon pb-3">
                <p onClick={() => setModalShow(true)} style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black",paddingTop:"10px" }}>Let us call you</p>
                <p style={{ fontSize: "12px" }} onClick={() => setModalShow(true)}>
                  Request a callback here and let us call you on your preferred
                  time
                </p>{" "}
                <Popup show={modalShow} onHide={() => setModalShow(false)} />
              </div>
             
          
            {/* </a> */}
          </div>
        </div>
      </div>
      <div class=" topics_m">
       
        <div class="button">
          <div>
            {/* <a href="/faqreturns"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Email us</p>
                <p style={{ fontSize: "12px" }}>
                  Available exclusively on care@seventhq.com
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>
        <div class="button">
          <div>
            {/* <a href="/faqprivacy"> */}
              <div class="icon p-3">
                <p style={{ fontWeight: "bold",paddingBottom:"5px" ,color:"black" }}>Send a postcard </p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  We live here : Seventh Square Internet Pvt. Ltd. 75, Jhotwara industrial Area, Jaipur Rajasthan 302012
                </p>{" "}
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactQuotation2;
