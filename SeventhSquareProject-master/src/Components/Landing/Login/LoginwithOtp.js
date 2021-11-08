import React from 'react'
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
function LoginwithOtp() {
    const [values, setValues] = useState({
        phonenumber: '',
        otp: '',
        
    });
    const [sessiodID,setsessionID]=useState('')
    const [otp,setotp]=useState(Math.round(Math.random(10000,50000)*1000000))
    const history = useHistory();

    const handlephoneChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            phonenumber: event.target.value,
        }));
    };
    const handleotpChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            otp: event.target.value,
        }));
    };

   

    const getotp=async()=>{
    
        const config = {
          method:'POST', 
        };
        console.log(config);
        const res=await fetch(`https://2factor.in/API/V1/d04e6b44-114b-11eb-9fa5-0200cd936042/SMS/+91${values.phonenumber}/${otp}`,config);
        const data= await res.json();
        console.log(data);
       setsessionID(data.Details)
        
        
    }
  
    const submitotp=async()=>{
    
        const config = {
          method:'POST', 
        };
        console.log(config);
        const res=await fetch(`https://2factor.in/API/V1/d04e6b44-114b-11eb-9fa5-0200cd936042/SMS/VERIFY/${sessiodID}/${values.otp}`,config);
        const data= await res.json();
        console.log(data);
        if (data.Status==='Success')
        {
            history.push({
                pathname: `/`,
                
            });

        }
      
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        submitotp()
        
    };
    return (
        <div>
        <div className="loginPanel">
      <div class="main">
        <section class="sign-in">
          <div class="container">
            <div class="signin-content">
              <div class="signin-image">
                <figure>
                  <img
                    src="https://www.pngkit.com/png/full/250-2509808_real-estate-law-from-the-ground-up-real.png"
                    alt=""
                  />
                </figure>
              </div>

              <div class="signin-form">
                <h2 class="form-title">Login with OTP </h2>
                <form method="POST" class="register-form"  id="login-form" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="phonenumber">
                    <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="Phone Number"
                      value={values.phonenumber}
                      onChange={handlephoneChange}
                      required
                    />
                  </div>
                  <div className="otp_section">
                  <button className="btn-dark get_otp" value="Get Otp" onClick={getotp}>Get Otp</button>
                  </div>
                  <div class="form-group mt-3">
                    <label for="otp">
                    <i class="fas fa-key"></i>
                    </label>
                    <input
                      type="password"
                      name="otp"
                      id="otp"
                      placeholder="OTP"
                      required
                      onChange={handleotpChange}
                      value={values.otp}
                    />
                  </div>
                  
                  <div class="form-group form-button">
                    <button
                      type="submit"
                      name="login"
                      id="login"
                      class="form-submit"
                    >Login</button>
                  </div>
                 
                </form>
                <div class="row otp_links">
                <a  href="/registerOption" class="signup-image-link">
                  New Buyer ? Register Here 
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a  href="/" class="signup-image-link">
                  Login with OTP 
                </a>
                <a  href="/forgot-password" className="signup-image-link my-4">
                    Forgot Password
                </a>
                </div>

                

                <div class="social-login">
                
                  <span class="social-label">Or login with</span>
                  <ul class="socials">
                    <li>
                      <a href="/icon">
                      <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/icon">
                      <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/icon">
                      <i class="fab fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
      </div>
    )
}

export default withRouter(LoginwithOtp)
