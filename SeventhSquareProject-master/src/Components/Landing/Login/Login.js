import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';


class Login extends Component {

  
    
  handleSubmit = (e) =>{
    console.log('login clicked')
    e.preventDefault();
    const data  = {
        password: this.password,
        username : this.phone,
    };
    axios.post('https://api.seventhsq.com/auth/api/login/', data).then(
        res => {
            console.log(res)
            const token = res.data.token;
           
            
            localStorage.setItem('token', token.toString());
            console.log(token)
            
            this.props.history.push({
              pathname: `/`,
              
          });
          
        }

       
    ).catch(
        err => {
            console.log(err)
              Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Wrong Credentials',
              // footer: '<a href="">Why do I have this issue?</a>'
            })
            // window.alert("Wrong Credentials");
        }
    )
    console.log(data);
}
  render() {
    return (
      <div>

  <Helmet>
    <title>Login | Seventh Square</title>
    {/* Login Seventh Square */}
    <meta name="description" content="Login Seventh Square " />
  </Helmet>
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
                <h2 class="form-title">Login </h2>
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
                  
                  <div class="form-group form-button">
                    <button style={{width:"100px"}}
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
                <a  href="/loginwithotp" class="signup-image-link">
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
}
export default withRouter(Login);