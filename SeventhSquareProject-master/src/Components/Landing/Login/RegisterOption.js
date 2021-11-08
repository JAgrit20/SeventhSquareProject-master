import React from "react";
import "./Login.css";
function RegisterOption() {
  return (
    <div className="loginPanel">
      <div class="main">
        <section class="sign-in">
          <div class="container my-5">
            
            <h2 class="form-title text-center">Create New Account</h2>
            <div class="d-flex justify-content-center coverbox">
              <a href='/registerIndividual'>
              <div className='container pushcontainer'>
                <h3 class="text-center">
                  Individual Account
                </h3>
                <h5 className='text-wrap px-5 mt-2'>
                  Simple & Easy Procurement .No Hassels. Get Better Products with competitive pricing
                </h5>
                </div>
                </a>
              <a href='/registerInstitutional'>
              <div className='container pushcontainer'>
                <h3 class="text-center">
                  Business Account
                </h3>
                <h5 className='text-wrap px-5 mt-2'>
                  Dedicated Relationship Manager.Tax Invoicing.Streamline your procurement process and save overheads
                </h5>
                </div>
                </a>
              
            </div>
            <a href='/login'><h5 className='text-center'>Existing Customer? Login here</h5></a>
          
          </div>
        </section>
      </div>
    </div>
  );
}

export default RegisterOption;
