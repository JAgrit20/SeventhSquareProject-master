import React, { Component } from 'react'
import "./Login.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import User from "../../../images/Business sign up image.png"

class RegisterInstitutional extends Component{
  constructor(props) {
    super(props);
    this.state = {
       otp:Math.round(Math.random(10000,50000)*1000000),
       sessionid: props.sessionid,
       otpstatus:false
    }
  }


 getotp=async(e)=>{
  e.preventDefault();
    const config = {
      method:'POST', 
    };
    console.log(config);
    const res=await fetch(`https://2factor.in/API/V1/d04e6b44-114b-11eb-9fa5-0200cd936042/SMS/+91${this.phone}/${this.state.otp}`,config);
    const data= await res.json();
    console.log(data);  
    this.setState({
      sessionid:data.Details
    })
}

submitotp=async(e)=>{
  e.preventDefault();
  const config = {
    method:'POST', 
  };
  console.log(config);
  const res=await fetch(`https://2factor.in/API/V1/d04e6b44-114b-11eb-9fa5-0200cd936042/SMS/VERIFY/${this.state.sessionid}/${this.state.otp}`,config);
  const data= await res.json();
  console.log(data);
  if (data.Status==='Success')
  {
     this.setState({
       otpstatus:true
     })
     window.alert("Otp verified!")
  }
}


  handleSubmit = e =>{
    console.log('form submitted')
    e.preventDefault();
    if(this.state.otpstatus){
    const data  = {
        first_name : this.fName,
        last_name  : this.lName,
        email : this.email,
        password: this.password,
        phone : this.phone,
        is_corporate: true,
        company_name: this.company,
        gst_in: this.your_gst,
        is_phone_verified:false,
        otp:""
    };
    axios.post('https://api.seventhsq.com/auth/api/register/', data).then(
        res => {
console.log(res)
window.alert("Register Success");
this.props.history.push({
  pathname: `/login`,
  
});
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
    console.log(data);
      }
      else{
        window.alert("Otp not verified")
      }
      }
      render(){
  return (
    <div className="loginPanel">
      <div class="main">
        <section class="sign-in">
          <div class="container">
            <div class="signin-content">
              <div class="signin-image">
                <figure>
                  <img
                    src={User}
                    alt=""
                  />
                </figure>
                
              </div>
              <div class="signin-form">
                <h2 class="form-title">Sign Up </h2>
                <form onSubmit={this.handleSubmit} class="register-form" id="login-form">
                  <div class="form-group">
                    <label for="reciepent">
                    <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      name="reciepentfn"
                      id="reciepentfn"
                      placeholder="Representative First Name"
                      onChange={e => this.fName = e.target.value}
                    />
                  </div>
                  <div class="form-group">
                    <label for="reciepent">
                    <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      name="reciepentln"
                      id="reciepentln"
                      placeholder="Representative Last Name"
                      onChange={e => this.lName = e.target.value}
                    />
                  </div>
                  <div class="form-group">
                    <label for="company">
                    <i class="fas fa-users"></i>
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                      onChange={e => this.company = e.target.value}
                    />
                  </div>
                  <div className="row contact_section">
                  <div class="form-group contact_otp">
                    <label for="your_contact">
                    <i class="fas fa-id-card-alt"></i>
                    </label>
                    <input
                      type="number"
                      name="your_contact"
                      id="your_contact"
                      placeholder="Mobile"
                      onChange={e => this.phone = e.target.value}
                    />
                  </div>
                  <div className="otp_section">
                  <button className="btn-dark get_otp" value="Get Otp" onClick={this.getotp}>Get Otp</button>
                  </div>
                  </div>
                
                <div className="row contact_section">
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
                  <div className="otp_section my-4">
                  <button className="btn-dark get_otp" value="Submit Otp" onClick={this.submitotp}>Submit Otp</button>
                  </div>
                  </div>
                  <div class="form-group">
                    <label for="your_email">
                    <i class="fas fa-envelope-open"></i>
                    </label>
                    <input
                      type="email"
                      name="your_email"
                      id="your_email"
                      placeholder="Email (Optional)"
                      onChange={e => this.email= e.target.value}
                    />
                  </div>
                  <div class="form-group">
                    <label for="your_gst">
                    <i class="fas fa-hand-holding-usd"></i>
                    </label>
                    <input
                      type="text"
                      name="your_gst"
                      id="your_gst"
                      placeholder="GST"
                      onChange={e => this.your_gst = e.target.value}
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
                      placeholder="Password"
                      onChange={e => this.password = e.target.value}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      class="agree-term"
                    />
                    <label for="remember-me" class="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      class="form-submit"
                      value="Create a new Account"
                    />
                  </div>
                </form>
                <a href="/registerOption" class="signup-image-link">
                  Change SignUp Option
                </a>
                <div class="social-login">
                  <span class="social-label">Or SignUp with</span>
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
  );
}
}

export default withRouter(RegisterInstitutional);
