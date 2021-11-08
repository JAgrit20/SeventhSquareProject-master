import React from 'react';
import "./Benefits.css";
import BenefitsItem from "./BenefitsItem";
import Savings from "../../../../images/savings.png"
import Delivery from "../../../../images/delivery.png"
import Privacy from "../../../../images/privacy.png"
import User from "../../../../images/User.png"
import Timer from "../../../../images/timer.png"
function Benefits() {
    return (<div>
        <div class="title">
          <span class="h1">
          Why Buy with Seventh Square
          </span>
        </div>
        <div class="container row benefits-container" >
            
        <BenefitsItem
        id="1"
        image={Savings}
        title="Savings"
        description = "Save upto 10% on your procurement costs by procuring on our platfrom"

        />
         <BenefitsItem
        id="1"
        image={Delivery}
        title="Timely Delivery"
        description = "Get materials to your project site in time and schedule and schedule with us for max efficiency"

        />
         <BenefitsItem
        id="1"
        image={Privacy}
        title="Genuine Products"
        description = "Get genuine products only sold directly by manufacturers & importers"

        />
       
         <BenefitsItem
        id="1"
        image={User}
        title="One-Touch Contact"
        description = "Have all Your Issues resolved, doubts cleared & assistence with the platform from a single person"

        />
     
      </div>
      </div>
    )
}

export default Benefits
