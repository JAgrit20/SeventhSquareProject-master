import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { get } from 'jquery';
// ES6 Modules or TypeScript
// import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')



class ForgotPassword extends Component {

  getotp=async(e)=>{
    e.preventDefault();
      
     
      const res=await fetch(`https://api.seventhsq.com/auth/otp_gen/${this.phone}`);
      const data= await res.json();
      console.log(data);  
      
  }
    
  handleSubmit = (e) =>{
    console.log('login clicked')
    e.preventDefault();
    const data  = {
      phone: this.phone,
      pass: this.password,
      otp: this.otp
    };
    axios.post('https://api.seventhsq.com/auth/forget/', data).then(
        res => {
            console.log(res)
            const token = res.data.token;
            
            localStorage.setItem('token', token);
            console.log(token)
            
            this.props.history.push({
              pathname: `/`,
              
          });
          window.alert("Password changed successfully, Please login");
        }
    ).catch(
        err => {
            console.log(err)
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Oops...',
            //   text: 'Something went wrong!',
            //   // footer: '<a href="">Why do I have this issue?</a>'
            // })
            // window.alert("Wrong Credentials");
        }
    )
    console.log(data);
}
  render() {
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
                <h2 class="formfp-title">Forgot Password ?</h2>
                <h4 className='mb-5'>
                  We will send you intructions on how to reset your password to the email 
                  registered with us
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
                  <div className="otp_section my-4">
                  <button className="btn-dark get_otp" value="Get Otp" onClick={this.getotp} >Get Otp</button>
                  </div>
                  <div class="form-group contact_otp">
                    <label for="your_otp">
                    <i class="fas fa-id-card-alt"></i>
                    </label>
                    <input
                      type="number"
                      name="your_otp"
                      id="your_otp"
                      placeholder="Enter OTP"
                      onChange={e => this.otp = e.target.value}
                    />
                  </div>
                  
                  <div class="form-group">
                    <label for="your_pass">
                    <i class="fas fa-key"></i>
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="New Password"
                      onChange={e => this.password = e.target.value}
                      
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
    )
  }
}
export default withRouter(ForgotPassword);