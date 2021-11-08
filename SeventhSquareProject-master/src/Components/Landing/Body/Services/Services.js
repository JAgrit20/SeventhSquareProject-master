import React from 'react';
import "./Services.css";
import Service1 from "../../../../images/service1.png";
import Service2 from "../../../../images/service2.png";
import Service3 from "../../../../images/service3.png";
function Services() {
    return (
        <div>
        <div class="title">
          <span class="h1">
          Services
          </span>
          </div>

        <div className="container service-container">
            <div className="service-box">
                <img src={Service1} alt=""/>
                <p >Request for Quotation</p>
                <span>Use industry standard procurement methods including Request for Quotation,Request for Proposal, Request for Information, Blanket Purchase Orders</span>
            </div>
            <div className="service-box">
                <img src={Service2} alt=""/>
                <p>Estimator</p>
                <span>Use our Estimators Tools to accurately Estimate your materials requirements and costs.Schedule deliveries and budget your project costs much better with us.</span>
            </div>
            <div className="service-box">
                <img src={Service3} alt=""/>
                <p>Consultation</p>
                <span>Get consultation on most suitable materials , upcoming materials, latest trends & green building materials to make the bsest choices that save you money and help you build better</span>
            </div>
        </div>

        </div>
    )
}

export default Services
