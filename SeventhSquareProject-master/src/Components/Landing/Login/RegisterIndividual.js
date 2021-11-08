import React, { Component } from 'react'
import "./Login.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import User from "../../../images/Individual Sign-up Image.png"

class RegisterIndividual extends Component {

  constructor(props) {
    super(props);
    this.state = {
       otp:Math.round(Math.random(10000,50000)*1000000),
       sessionid: props.sessionid,
       otpstatus:false,
       showotp:false,
       visiblepass:false
    }
  }

  setpassvisible=()=>{
    this.setState({
      visiblepass:!this.state.visiblepass
    })
  }

 getotp=async(e)=>{
  e.preventDefault();
  this.setState({
    showotp:true
  })
  console.log(this.state.showotp)
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

submitotp=async()=>{
  
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
     
  }
}

  handleSubmit =async(e)=>{
    console.log('form submitted')
     
    e.preventDefault();
    await this.submitotp()
    if(this.state.otpstatus){
      const data  = {
        first_name : this.fName,
        last_name  : this.lName,
        email : this.email,
        password: this.password,
        phone : this.phone,
        is_corporate: false,
        company_name: " ",
        gst_in: " ",
        is_phone_verified:true,
        otp:"123456"

    };
    axios.post('https://api.seventhsq.com/auth/api/register/', data).then(
        res => {
console.log(res)

// window.alert("Register Success");
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
        window.alert('OTP not verified')
      }
    }
    
   
  render(){
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
                    src={User}
                    alt=""
                  />
                </figure>
              </div>
              <div class="signin-form">
                <h2 class="form-title">Sign Up </h2>
                <form onSubmit={this.handleSubmit}>

                <div class="d-flex justify-content-start">
                <div class="form-group">
                    <label for="your_name">
                    <i class="fas fa-user"></i>
                    </label>
                    <input
                      type="text"
                      required
                      name="your_name"
                      id="your_name"
                      placeholder="First Name"
                      onChange={e => this.fName = e.target.value}
                    />
                  </div>
                  <div class="form-group ml-3">
                    <label for="your_name">
                    
                    </label>
                    <input
                      type="text"
                      required
                      name="your_name"
                      id="your_name"
                      placeholder="Last Name"
                      onChange={e => this.lName = e.target.value}
                    />
                  </div>
                </div>                 
                  <div className="row contact_section">
                  <div class="form-group contact_otp">
                    <label for="your_contact">
                    <i class="fas fa-id-card-alt"></i>
                    </label>
                    <input
                      type="number"
                      required
                      name="your_contact"
                      id="your_contact"
                      placeholder="Mobile"
                      pattern="/(7|8|9)\d{9}/"
                      onChange={e => this.phone = e.target.value}
                    />
                  </div>
                  <div className="otp_section">
                  <button className="btn-dark get_otp" value="Get Otp" onClick={this.getotp}>Get Otp</button>
                  </div>
                  </div>
                
                <div className="row contact_section mt-4">
               
                  {
                    this.state.showotp==true?
                    
                    <div class="form-group contact_otp">
                    <label for="your_otp">
                    <i class="fas fa-id-card-alt"></i>
                    </label>
                    <input
                      type="number"
                      required
                      name="your_otp"
                      id="your_otp"
                      placeholder="Enter OTP"
                      onChange={e => this.otp = e.target.value}
                    />
                  </div>:null
                  }
                 
                  </div>
                 
                  
                  <div class="form-group ">
                    <label for="your_email">
                    <i class="fas fa-envelope-open"></i>
                    </label>
                    <input
                      type="email"
                       pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                      required
                      name="your_email"
                      id="your_email"
                      placeholder="Email"
                      onChange={e => this.email = e.target.value}
                    />
                  </div>
                  
                  <div class="form-group">
                    <label for="your_pass">
                    <i class="fas fa-key pb-4 mb-4"></i>
                    </label>
                    <input
                      type={this.state.visiblepass!=true?"password":"text"}
                      required
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                      onChange={e => this.password = e.target.value}
                      
                    /><span><button type="button" class="btn btn-link" onClick={this.setpassvisible}>see</button></span>
                  </div>
                  

                 
                  <div class="form-group form-button">
                    <button
                      type="submit"
                      name="signup"
                      id="signup"
                      class="form-submit"
                    >Create a new Account</button>
                  </div>
                  </form>
                  <a href="/login" class="signup-image-link">
                Existing Customer? Login here
                </a>
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
      </div>
    )
  }
}
export default withRouter(RegisterIndividual);