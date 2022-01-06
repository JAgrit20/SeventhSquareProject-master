import React from "react";
import "./About.css";
import Brands from "../Landing/Body/Brands";
import Benefits from "../Landing/Body/Benefits/Benefits";
import BenefitsItem from "../Landing/Body/Benefits/BenefitsItem";
import aboutHome from "../../images/aboutHome.png"
import { Helmet } from 'react-helmet';



function About() {
  return (
    <div>
        <Helmet>
    <title>About Us | Seventh Square</title>
    <meta name="description" content="About Seventh Square" />
  </Helmet>
      <div class="container-fluid aboutMainBody">
        <div class="aboutText">
          <h1 className="my-4">
            Our <span> Story</span>.
          </h1>

          <p>
            Seventh Square came to being at an under-construction building site.
            As Builders & Developers, we got to learn this early on - There are
            more than 100 different items that are used together to construct an
            apartment complex or commercial centre. Cement, Bricks, Steel were
            just the starting. Whenever we would start a project, we would work
            with many different suppliers for all these products, regularly call
            for prices, work personally to get each product to the site and
            inspect the product and then keep track of several different
            payments. As customers, we wanted better service, which wasn't
            available in the market. Even if we got good service from one
            product supplier, the others were too difficult. There was no single
            point. No single person. No single source. Then we thought of a
            platform where every Building Material from brick to nail can be
            bought as easily as buying a book online. We thought of every
            service missing in our current system and starting building Seventh
            Square as the perfect platform to buy Construction Materials &
            Interiors in the country. With service as our focus, we are always
            constantly evolving our model to offer even better service to both
            our sellers and our customers.
          </p>
        </div>
        <div class="aboutImage">
          <img
            src={aboutHome}alt=""
          />
        </div>
      </div>
      <hr />
      <div className="aboutFeatures">
        <h2 className="text-center h1">Features</h2>
        <div className="featureBody d-flex justify-content-center">
          <div className="featureItem">
            <img
              src="https://www.pngitem.com/pimgs/m/420-4208606_customer-relationship-png-transparent-png.png"
              alt=""
            />
            <h3>Dedicated Relationship Managers</h3>
          </div>
          <div className="featureItem">
            <img
              src="https://www.pngitem.com/pimgs/m/650-6504711_contract-clipart-procurement-procurement-icon-png-transparent-png.png"
              alt=""
            />
            <h3>Multiple Procurement Tools</h3>
          </div>
          <div className="featureItem">
            <img src="https://img.icons8.com/ios/452/estimate.png" alt="" />
            <h3>Estimation Tools</h3>
          </div>
          <div className="featureItem">
            <img
              src="https://www.kindpng.com/picc/m/34-349104_consulting-icon-png-transparent-png.png"
              alt=""
            />
            <h3>Consultation</h3>
          </div>
          <div className="featureItem">
            <img
              src="https://img.icons8.com/plasticine/2x/overtime.png"
              alt=""
            />
            <h3>Scheduling Procurement</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="aboutBenefits d-flex row mx-4 align-items-center justify-content-center">
        <h2 className="text-center h1 my-4">Benefits</h2>
        <BenefitsItem
          id="1"
          image="https://image.flaticon.com/icons/png/512/81/81566.png"
          title="Payment Security"
          description="Payment transferred to seller only after delivery accepted"
        />
        <BenefitsItem
          id="1"
          image="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG.png"
          title="One-person Contact"
          description="Deal with only one person during the entire process, instead of multiple dealers & departments"
        />
        <BenefitsItem
          id="1"
          image="https://image.flaticon.com/icons/png/512/47/47963.png"
          title="Select from Hundreds of options"
          description="Find the most suitable option for you, at your terms"
        />
        <BenefitsItem
          id="1"
          image="https://cdn.pngsumo.com/2-pairs-package-deal-on-storenvy-15-off-png-289_288.png"
          title="Save upto 15% on your Material Costs"
          description="Save money & time while purchasing with utmost ease and convenience "
        />
      </div>

      <hr />
      <div className="aboutContactSection">
        <h1 className="aboutContactHeading">Wanna Say SomeThing</h1> <br />
        <a href="/contact">Click Here</a>
      </div>
      <hr />
      <div className="container">
        <Brands />
      </div>
      <hr />
    </div>
  );
}

export default About;
