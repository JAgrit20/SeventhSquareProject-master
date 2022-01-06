import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { get } from "jquery";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';

class ForgotPassword extends Component {
  
  getotp = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.seventhsq.com/auth/otp_gen/${this.phone}`
    );
    const data = await res.json();

    console.log("otp data");
    console.log(data);
    if(data==="Not register"){
      Swal.fire({
        icon: "error",
        title: "Phone Number Not Registered...",
        text: "Wrong Number",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };

  handleSubmit = (e) => {
    console.log("login clicked");
    e.preventDefault();
    const data = {
      phone: this.phone,
      pass: this.password,
      otp: this.otp,
    };
    axios
      .post("https://api.seventhsq.com/auth/forget/", data)
      .then((res) => {
        
        console.log("otp response");
        console.log(res);
        const token = res.data.token;
        console.log(res.data)
        if(res.data==="Wrong otp"){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Otp",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
        }else{
          // console.log(res.json()['data'])
          

          localStorage.setItem("token", token);
          console.log(token);
          Swal.fire({
            icon: "success",
            title: "Thank you",
            text: "Password changed successfully",
          });
        
          this.props.history.push({
            pathname: `/`,
          });
        
       
        }
       
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Credentials",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
        // window.alert("Wrong Credentials");
      });
    console.log(data);
  };
  render() {
    return (
      <div>
        {/* Forgot Password -hyperlink in login page */}
        

  <Helmet>
    <title>Forgot Password</title>
    {/* Forgot Password Seventh Square */}
    <meta name="description" content="Forgot Password Seventh Square" />
  </Helmet>
        <div className="loginPanel">
          <div class="main">
            <section class="sign-in">
              <div class="container">
                <div class="signin-content">
                  {/* <div class="signin-image">
                <figure>
                  <img
                    src="https://www.pngkit.com/png/full/250-2509808_real-estate-law-from-the-ground-up-real.png"
                    alt=""
                  />
                </figure>
              </div> */}

                  <div class="signin-form">
                    <h2
                      class="formfp-title"
                      style={{ fontFamily: "crimson text" }}
                    >
                      Forgot Password ?
                    </h2>
                    <h4 className="mb-5">
                      <span class="headingg">
                        {" "}
                        Set a new password here using registered phone number{" "}
                      </span>
                    </h4>
                    <form
                      method="POST"
                      class="register-form"
                      onSubmit={this.handleSubmit}
                      id="login-form"
                    >
                      <div class="form-group form_f">
                 
                        <label for="your_name">
                          <i class="fa fa-phone fa-2x"></i>
                        </label>

                        <input
                          type="text"
                          name="your_name"
                          id="input_f"
                          placeholder=" Registered Phone Number"
                          onChange={(e) => (this.phone = e.target.value)}
                        />
                        <button id="button_f"
                          className="btn-dark get_otp"
                          value="Get Otp"
                          onClick={this.getotp}
                        >
                          Get Otp
                        </button>
                      </div>
              
                      {/* <div className="otp_section">
                        <button
                          className="btn-dark get_otp"
                          value="Get Otp"
                          onClick={this.getotp}
                        >
                          Get Otp
                        </button>
                      </div> */}
                      <div class="form-group contact_otp">
                        <label for="your_otp">
                          <i class="fas fa-comment fa-2x"></i>
                        </label>
                        <input style={{width: "100%"}}
                          type="number"
                          name="your_otp"
                          id="your_otp"
                          placeholder="Enter OTP"
                          onChange={(e) => (this.otp = e.target.value)}
                        />
                      </div>

                      <div class="form-group">
                        <label for="your_pass">
                          <i class="fas fa-lock fa-2x"></i>
                        </label>
                        <input
                          type="password"
                          name="your_pass"
                          id="your_pass"
                          placeholder="New Password"
                          onChange={(e) => (this.password = e.target.value)}
                          style={{width: "100%"}}
                        />
                      </div>

                      <div class="form-group form-button">
                        
                        <button
                        onClick={()=> window.location.href='/login'}
                          href="/login"
                          name="login"
                          id="login"
                          class="form-submit"
                        >
                          Back to Login
                        </button>
                        <button
                        style={{    fontSize: "15px", width: "auto", padding: "10px"}}
                          type="submit"
                          name="login"
                          id="login"
                          class="form-submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    <div class="row otp_links">
                      <a href="/registerOption" class="signup-image-link" style={{textDecoration: "underline !important"}}>
                      Register as a new user
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {/* <h2 class="formfp-title">Login using OTP</h2>
                <h4 className='mb-5'>
                  We will send an OTP on your
                  registered mobile number
                  </h4>
                <form method="POST" class="register-form" onSubmit={this.handleSubmit} id="login-form" >
                  <div class="form-group">
                    <label for="your_name">
                    <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Phone Number"
                      onChange={e => this.phone = e.target.value}
                      
                    />
                 
                  </div>
                  
                  <div class="form-group form-button">
                    <button
                      type="submit"
                      name="login"
                      id="login"
                      class="form-submit"
                    >Submit</button>
                  </div>
                 
                </form>
                <div class="row otp_links">
                <a  href="/registerOption" class="signup-image-link">
                  New Buyer ? Register Here 
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ForgotPassword);
