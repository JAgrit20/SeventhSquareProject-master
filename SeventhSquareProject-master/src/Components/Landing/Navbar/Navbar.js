import React from "react";
import "./Navbar.css";
import {Dropdown} from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Login from "../Login/Navlogin.js";


import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import SuggestionsList from "./Autocomplete";
function Navbar() {
  const [userdata, setuserdata] = useState([]);
  const [tagdata, settagdata] = useState([]);
  const [city, setc] = useState("Select Region");
  const [search, setsearch] = useState("");
  const [searchtag, setsearchtag] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [showmenu, setshowmenu] = useState(false);
  let history = useHistory();
  let c = "";
  const getuser = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/user_profile/get_profile/",
      config
    );
    const data = await res.json();

    setuserdata(data.user);

    if (data.user != undefined) {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("phone", data.user.phone);
    }

    console.log(data);
  };
  const gettagdata = async () => {
    const res = await fetch("https://api.seventhsq.com/payu/get_item_all/");
    const data = await res.json();
    settagdata(data);
    console.log(data);
  };
  //   state = {

  //   };
  //   static contextType = ProductContext;
  //   componentDidMount(){

  //       const config = {
  //           headers: {
  //               Authorization : 'token ' + localStorage.getItem('token')
  //           }
  //       }
  //       console.log(config)
  //       axios.get('https://api.seventhsq.com/user_profile/get_profile/', config)
  //       .then(
  //           res=>{
  //               this.setState({
  //                   user:res.data
  //               })

  //               console.log(res)
  //               console.log(res.data.user.first_name)
  //           },
  //           err => {
  // console.log(err)
  //           }
  //       )
  //     const Test=()=>{

  //       axios.get(`https://seller.seventhsq.com/inventory/api/inventory_detail_by_location/${lol.city}`)
  //       .then(
  //          res=>{

  //               console.log(res)

  //           },
  //           err => {
  // console.log(err)
  //           }
  //       )
  //   }

  const handlesearch = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name == "search") {
      setsearch(value);
    }
  };

  const logout = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);

    window.localStorage.removeItem("token");
    history.push({
      pathname: `/`,
    });
  };

  const handlecity = (event) => {
    const mycity = event.target.value;

    if (mycity.toString() == "Select Region") {
      setc("Select Region");
      window.localStorage.removeItem("city");
      console.log("removed city");
      window.location.reload();
    } else {
      localStorage.setItem("city", mycity);
      console.log(mycity);
      window.location.reload();
    }
  };

  const getcity = () => {
    let c = localStorage.getItem("city");
    setc(c);
    console.log(city);
  };

  // const handleClickcement = (value) =>{
  //   console.log(value)
  //   history.push({pathname:'/catogoriesLanding/Cement',state:value})
  // }
  const handleClickcement = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Cement',state:value})
  }
  const handleClickbrick = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Bricks',state:value})
  }
  const handleClickaggr = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Aggregates',state:value})
  }
  const handleClicksteel = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Steel',state:value})
  }
  const handleClickpipes = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Pipes_&_Fittings',state:value})
  }
  const handleClicksanit = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Sanitaryware',state:value})
  }
  const handleClickelec = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Electricals',state:value})
  }
  const handleClickhvac = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/HVAC',state:value})
  }
  const handleClickchem = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Chemicals',state:value})
  }

  const handleClickfloor = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Flooring_&_wall',state:value})
  }
  const handlehardware = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Hardware',state:value})
  }
  const handleroof = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Roofing',state:value})
  }
  const handleplywood = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Boards_&_Sheets',state:value})
  }
  const handledoors = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Doors_&_Windows',state:value})
  }
  const handlemod = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Modular',state:value})
  }
  const handlepaint = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Paints_&_Finishes',state:value})
  }
  const handleGlass = (value) =>{
    console.log(value)
    history.push({pathname:'/catogoriesLanding/Glass',state:value})
  }

  //  const Gosearch=(event)=>{
  //    event.preventDefault()
  //   const history = useHistory();
  //   history.push(`search-result/j`);

  //  }

  useEffect(() => {
    getuser();
    getcity();
    gettagdata();
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    setsearch(value);

    const filteredSuggestions = tagdata.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = (index) => {
    setSelectedSuggestion(index);
    setsearch(filteredSuggestions[index]);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
  };

  if (userdata) {
    return (
      <div>
        <div>
          <header>
            <div class="upper-pannel">
              <div className="upper-pannel_left">
                <span>
                  <i class="fas fa-question"> </i>&nbsp;&nbsp;{" "}
                  {/* <Link to="/track-order">Help</Link> */}
                  <Link to="/contact">Help</Link>
                </span>
              </div>
              <div className="upper-pannel_right">
                <span>
                  <i class="fas fa-book-open"> </i>&nbsp;&nbsp;{" "}
                  {/* <Link to="/track-order">TRequest for Quote</Link> */}
                  <Link to="/requestQuotation">Request for Quote</Link>
                </span>

                <span>
                  <i class="fas fa-truck-moving"> </i>&nbsp;&nbsp;{" "}
                  {/* <Link to="/track-order">Track your Order</Link> */}
                  <Link to="/track-order">Track your Order</Link>
                </span>
              </div>
            </div>
            <div class="main-container">
              <input type="checkbox" name="" id="check" />
              <div class="logo-container">
                <Link to="/">
                  <img
                    src="https://seller.seventhsq.com/static/staticfiles/img/white%20png%20(1).png"
                    alt=""
                  />
                </Link>
              </div>
              <div class="nav-btn">
                <div class="nav-links mobileNavLinks">
                  <ul>
                    <li class="input__box">
                      <form action={`/search-result/${search}`}>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Your Product"
                          aria-label="Search Your Product"
                          aria-describedby="button-addon2"
                          name="search"
                          value={search}
                          onChange={onChange}
                        />

                        <SuggestionsList
                          inputValue={search}
                          selectedSuggestion={selectedSuggestion}
                          onSelectSuggestion={onSelectSuggestion}
                          displaySuggestions={displaySuggestions}
                          suggestions={filteredSuggestions}
                        />
                      </form>

                      <i class="fas fa-search"></i>
                    </li>

                    <li class="log-sign">
                      <a to="/">
                        <FaMapMarkerAlt />
                        <select className="form-select" onChange={handlecity}>
                          {city ? (
                            <option id={city.toString()} value={city.toString}>
                              {city}
                            </option>
                          ) : (
                            <option selected disabled hidden>
                              Select Region
                            </option>
                          )}
                          <option id="Select Region" value="Select Region">
                            Select Region
                          </option>
                          <option id="Andhra Pradesh" value="Andhra Pradesh">
                            Andhra Pradesh
                          </option>
                          <option
                            id="Arunachal Pradesh"
                            value="Arunachal Pradesh"
                          >
                            Arunachal Pradesh
                          </option>
                          <option id="Assam" value="Assam">
                            Assam
                          </option>

                          <option id="Bihar" value="Bihar">
                            Bihar
                          </option>
                          <option id="Chhattisgarh" value="Chhattisgarh">
                            Chhattisgarh
                          </option>
                          <option id="Goa" value="Goa">
                            Goa
                          </option>
                          <option id="Gujarat" value="Gujarat">
                            Gujarat
                          </option>
                          <option id="Haryana" value="Haryana">
                            Haryana
                          </option>
                          <option
                            id="Himachal Pradesh"
                            value="Himachal Pradesh"
                          >
                            Himachal Pradesh
                          </option>
                          <option id="Jharkhand" value="Jharkhand">
                            Jharkhand
                          </option>
                          <option id="Karnataka" value="Karnataka">
                            Karnataka
                          </option>
                          <option id="Kerala" value="Kerala">
                            Kerala
                          </option>
                          <option id="Madhya Pradesh" value="Madhya Pradesh">
                            Madhya Pradesh
                          </option>
                          <option id="Maharashtra" value="Maharashtra">
                            Maharashtra
                          </option>
                          <option id="Manipur" value="Manipur">
                            Manipur
                          </option>
                          <option id="Meghalaya" value="Meghalaya">
                            Meghalaya
                          </option>
                          <option id="Mizoram" value="Mizoram">
                            Mizoram
                          </option>
                          <option id="Nagaland" value="Nagaland">
                            Nagaland
                          </option>
                          <option id="Odisha" value="Odisha">
                            Odisha
                          </option>
                          <option id="Punjab" value="Punjab">
                            Punjab
                          </option>
                          <option id="Rajasthan" value="Rajasthan">
                            Rajasthan
                          </option>
                          <option id="Sikkim" value="Sikkim">
                            Sikkim
                          </option>
                          <option id="Tamil Nadu" value="Tamil Nadu">
                            Tamil Nadu
                          </option>
                          <option id="Telangana" value="Telangana">
                            Telangana
                          </option>
                          <option id="Tripura" value="Tripura">
                            Tripura
                          </option>
                          <option id="Uttar Pradesh" value="Uttar Pradesh">
                            Uttar Pradesh
                          </option>
                          <option id="Uttarakhand" value="Uttarakhand">
                            Uttarakhand
                          </option>
                          <option id="West Bengal" value="West Bengal">
                            West Bengal
                          </option>
                          <option id="Chandigarh" value="Chandigarh">
                            Chandigarh
                          </option>
                          <option id="Daman" value="Daman">
                            Daman
                          </option>
                          <option id="Delhi" value="Delhi">
                            Delhi
                          </option>
                        </select>
                      </a>
                    </li>
                    <li class="log-sign">
                      <Link to="/cart">
                        <FaCartArrowDown />

                        <span>Cart</span>
                      </Link>
                    </li>
                    <li class="log-sign">
                      <div>
                        <button>
                          <a>
                            <FaUserCircle />

                            <span>{userdata.first_name}</span>
                          </a>
                        </button>
                        {
                          <div className="menu">
                            <button className="my-2">
                              <a href="/profile">My Profile</a>
                            </button>
                            <button className="my-2">
                              <a href="/orders">Orders</a>
                            </button>
                            <button className="my-2">
                              <a href="/payments">Payments</a>
                            </button>
                            <button className="my-2">
                              <a href="/enquiry">Enquiries</a>
                            </button>
                            <button className="my-2">
                              <a href="/wishlist">Wishlist</a>
                            </button>
                            <button className="my-2">
                              <a href="/requests">Customer Service</a>
                            </button>
                            <button className="my-2">
                              <a href="/review">Reviews</a>
                            </button>

                            <button onClick={logout} className="my-2">
                              <a href="/login">Logout</a>
                            </button>
                          </div>
                        }
                      </div>
                    </li>
                  </ul>
                </div>

                <div></div>
                <nav className="lowerNavbar">
                <div class="link-boxes">
            {/* <ul class="box">
              <li>
                <a href="/">Registered Office :</a>
              </li>
              <li>
                <a href="/">
                  75, Jhotwara Industrial Area, Jaipur, Rajasthan-302012{" "}
                </a>
              </li>
              <li>
                <a href="/">CIN No. : 121212234ASDQ</a>
              </li>
            </ul> */}
            <ul class="box">
              <h2 class="" style={{    paddingRight: "15px"}}>Platform</h2>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">Media</a>
              </li>
              <li>
                <a href="/review">Reviews</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
           

            <ul class="box">
              {/* <li class="link_name">Resources</li> */}
              <h2 class="" style={{    paddingRight: "15px"}}>Resources</h2>
              <li>
                <a href="/adminrequest">Material Estimator</a>
              </li>
              <li>
                <a href="/">Cost Estimator</a>
              </li>
              <li>
                <a href="/">Material Consultation</a>
              </li>
              <li>
                <a href="/requestQuotation">Request Quotation</a>
              </li>
              <li>
                <a href="https://seller.seventhsq.com/">
                  Sell on Seventh Square
                </a>
              </li>
              {/* <li><a href="/faq">FAQ</a></li> */}
            </ul>
            <ul class="box">
            <h2 class="" style={{    paddingRight: "15px"}}>Help</h2>
              {/* <li class="">Help</li> */}
              
              {/* <li><a href="/">Business Buyer Registration</a></li> */}
              <li>
                <a href="/">Why Buy with Us?</a>
              </li>
              <li>
                <a href="/faq">Frequently Asked Questions</a>
              </li>
              <li>
                <Link to="/requests">Raise a ticket</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/term">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
                  <ul class="menu-main">
                    <li class="header_li">
                      <Link  >Construction Materials</Link>
                      <div class="menu-sub building">
                        <div class="menu-col-1">
                        <Link  to="/catogoriesLanding/Cement">

                          <h4 class="menu-category">
                            Cement
                            </h4>
                        </Link>
                          <ul>
                            <li>
                              <Link href="/catogoriesLanding/Cement">
                                <p className="fw-bold">
                                 Ordinary Portland cement (OPC)
                                </p>
                              </Link>

                              <ul>
                              <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 33")}>
                                  <Link >
                                  OPC 33
                                  </Link>
                                </li>
                                <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 43")} >
                                  <Link >
                                  OPC 43
                                  </Link>
                                </li>
                                <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 53")}>
                                <Link >
                                  OPC 53
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li onClick={()=>handleClickcement("Portland Slag Cement (PSC)")}>
                              <Link >
                                Portland Slag Cement (PSC)
                              </Link>
                            </li>
                            <li  onClick={()=>handleClickcement("Portland Composite Cement (PCC)")}>
                              <Link >
                                Portland Composite Cement (PCC)
                              </Link>
                            </li>
                            <li onClick={()=>handleClickcement('Portland Pozzolana Cement (PPC)')}>
                              <Link  >
                              
                              Portland Pozzolana Cement (PPC) 
                              </Link>
                            </li >
                            <li onClick={()=>handleClickcement("White Cement")}>
                              <Link >White Cement</Link>
                            </li>
                          </ul>
              
                          </div>
                          <div class="menu-col-1">
                          <Link to="/catogoriesLanding/Bricks" >

                          <h4 class="menu-category">
                            Bricks and Blocks
                            </h4>
                            </Link>
                          <ul>
                            <li onClick={()=>handleClickbrick("Red Clay Brick")}>
                            <Link >
                                Red Clay Brick
                                </Link>
                            </li>
                            <li onClick={()=>handleClickbrick("Fly Ash Brick")}>
                              <Link >Fly Ash Brick</Link>
                            </li>

                            <li onClick={()=>handleClickbrick("Concrete Hollow Block")}>
                              <Link > Concrete Hollow Block Fly</Link>
                            </li>

                            <li onClick={()=>handleClickbrick("Refractory Brick")}>
                              <Link > Refractory Brick</Link>
                            </li>
                            <li onClick={()=>handleClickbrick("AAC Block")}>
                              <Link >AAC Blocks</Link>
                            </li>
                            <li onClick={()=>handleClickbrick("Engineering  Brick")}>
                              <Link > Engineering  Block</Link>
                            </li>
                            <li onClick={()=>handleClickbrick("Sand Lime Brick")}>
                              <Link > Sand Lime Brick</Link>
                            </li>
                            <li onClick={()=>handleClickbrick("Porotherm Hollow Block")}>
                              <Link >Porotherm Hollow Block</Link>
                            </li>
                            <li onClick={()=>handleClickbrick("RCC Pole")}>
                              <Link >RCC Pole</Link>
                            </li>
                           
                          </ul>
                        </div>
                      
                        <div class="menu-col-1">
                        <Link to="/catogoriesLanding/Steel" >  
                          <h4 class="menu-category">Steel</h4>
                          </Link>
                          <ul>
                            <li onClick={()=>handleClicksteel("TMT Bar")}>
                              <Link >TMT Bars</Link>
                            </li>
                            <li onClick={()=>handleClicksteel("Binding Wire & Stirrup")}>
                              <Link >Binding Wire & Stirrup</Link>
                            </li>
                            <li onClick={()=>handleClicksteel("Structural Steel")}>
                              <Link >
                             
                              Structural Steel 
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="menu-col-1">
                        <Link to="/catogoriesLanding/Aggregates" >
                          <h4 class="menu-category">Aggregates</h4>
                          </Link>
                          <ul>
                            <li>
                              <ul>
                                <li onClick={()=>handleClickaggr("M-Sand")}>
                                <Link >
                                  M-Sand
                                  </Link>
                                </li>
                                <li onClick={()=>handleClickaggr("P-Sand")}>
                                  <Link >
                                  P-Sand
                                  </Link>
                                </li>
                                <li onClick={()=>handleClickaggr("River Sand")}>
                                  <Link >
                                  River Sand
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li onClick={()=>handleClickaggr("Crushed Stone / Grit")}>
                                  <Link >
                                  Crushed Stone / Grit
                                  </Link>
                                </li>
                                <li onClick={()=>handleClickaggr("Gravel")}>
                                  <Link >
                                  Gravel
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                       
                      </div>
                    </li>
                    <li class="header_li"> 
                    <Link to="/">
                      Plumbing and Electrical
                      </Link>
                      <div class="menu-sub hvac">
                        <div class="menu-col-1">
                        <Link to="/catogoriesLanding/Pipes_&_Fittings">
                        <h4 class="menu-category">Pipes & Fittings</h4>       
                        </Link>                 
                        <ul>
                          <li   onClick={()=>handleClickpipes("UPVC Pipe")}>
                            <Link>UPVC Pipes</Link>
                          </li>
                          <li onClick={()=>handleClickpipes("CPVC Pipe")}>
                            <Link  >CPVC Pipes</Link>
                          </li>
                          <li onClick={()=>handleClickpipes("Iron & Steel Pipe")}>
                            <Link  >Iron & Steel Pipes </Link>
                          </li>
                          <li onClick={()=>handleClickpipes("Fittings")}>
                            <Link  >Fittings</Link>
                          </li>
                          <li onClick={()=>handleClickpipes("Water Tank")}>
                            <Link  >Water Tank</Link>
                          </li>
                          <li onClick={()=>handleClickpipes("Pipe - Other")}>
                         
                            <Link  >Pipes - Other </Link>
                          </li>
 

                        </ul>
                        </div>
                       
                        <div class="menu-col-1">
                        <Link to="/catogoriesLanding/Sanitaryware" > 
                      <h4 class="menu-category">Sanitaryware</h4>
                      </Link>
                        <ul>
                           <li onClick={()=>handleClicksanit("Faucet")}>
                            <Link  >Faucet</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Shower")}>
                            <Link  >Shower</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Sink")}>
                            <Link  >Sink</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Washbasin")}>
                            <Link  >Washbasin</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Water Closet & Bidet")}>
                            <Link  >Water Closet & Bidet</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Bath Tub")}>
                            <Link  >Bath Tub</Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Urinal")}>
                            <Link  >Urinal </Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Flushing Cistern & Flush Tank")}>
                            <Link  >Flushing Cistern & Flush Tank </Link>
                          </li>
                           <li onClick={()=>handleClicksanit("Fittings & Allied Product")}>
                            <Link  >Fittings & Allied Products </Link>
                          </li>


                        </ul>
                      </div>
                      <div class="menu-col-1">
                      <Link to="/catogoriesLanding/Electricals">
                      <h4 class="menu-category">Electricals</h4>
                    </Link>
                        <ul>                    
                          <li onClick={()=>handleClickelec("Switchgear")}>
                            <Link  >Switchgear</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Conduit Pipe")}>
                            <Link  >Conduit Pipe</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Electrical Box")}>
                            <Link  >Electrical Box</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Wires & Cables")}>
                            <Link  >Wires & Cables</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Switch , Socket & Switchboard")}>
                            <Link  >Switch , Socket & Switchboard</Link>
                          </li>

                          <li onClick={()=>handleClickelec("Lighting")}>
                            <Link  >Lighting</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Home Automation")}>
                            <Link  >Home Automation</Link>
                          </li>

                        <li onClick={()=>handleClickelec("Electrical Fittings")}>
                            <Link >Electrical Fittings</Link>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-col-1">

                      <Link to="/catogoriesLanding/HVAC" >
                      <h4 class="menu-category">
                        HVAC 
                        </h4>
                      </Link>
                        <ul>
                          <li onClick={()=>handleClickhvac("Exhaust Fans , Ceiling Fans")}>
                            <Link  >Exhaust Fans , Ceiling Fans</Link>
                          </li>
                          <li onClick={()=>handleClickhvac("Air Conditioner & Outdoor")}>
                            <Link  >Air Conditioner & Outdoor</Link>
                          </li>
                          <li onClick={()=>handleClickhvac("Ventilation Louvre")}>
                            <Link  >Ventilation Louvres</Link>
                          </li>
                          <li onClick={()=>handleClickhvac("Water Heater / Geyser")}>
                            <Link  >Water Heater / Geyser</Link>
                          </li>
                          <li onClick={()=>handleClickhvac("Accessories")}>
                            <Link  >Accessories</Link>
                          </li>
                          <li onClick={()=>handleClickelec("Other")}>
                        
                            <Link  >Other</Link>
                          </li>


                        </ul>
                      </div>
                      </div>
                    </li>
                    <li class="header_li">
                    <Link to="/catogoriesLanding/Chemicals">Chemicals</Link>
                    <div class="menu-sub flooring">
                      <div class="menu-col-1">
                        <ul>

                        <li onClick={()=>handleClickchem("Wall Putty")}>
                            <Link  >Wall Putty </Link>
                          </li>
                          <li onClick={()=>handleClickchem("UPVC & CPVC Solvent")} >
                            <Link  >UPVC & CPVC Solvent</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Sealant")} >
                            <Link  >Sealant</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Adhesive")} >
                            <Link  >Adhesive</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Grout")} >
                            <Link  >Grout</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Waterproofing")} >
                            <Link  >Waterproofing</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Primer")} >
                            <Link  >Primer</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Screed")} >
                       
                            <Link  >Screed</Link>
                          </li>
                          <li onClick={()=>handleClickchem("Mortar")} >
                         
                       
                            <Link  >Mortar</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="header_li">
                    <Link to="/catogoriesLanding/Flooring_&_wall">Flooring & wall</Link>
                    <div class="menu-sub flooring">
                      <div class="menu-col-1">
                        
                      <h4 class="menu-category">
                        <li onClick={()=>handleClickfloor("Tiles")}  style={{cursor:"pointer !important"}}>
                           Tiles  
                        </li>
                          </h4>
                        <ul>
                            <li onClick={()=>handleClickfloor("Tiles - Ceramic")} >
                            <Link  >Ceramic</Link>
                          </li>

                            <li onClick={()=>handleClickfloor("Tiles - Vitrified")} >
                            <Link  >Vitrified</Link>
                          </li>
                            <li onClick={()=>handleClickfloor("Tiles - Glass")} >
                            <Link  >Glass</Link>
                          </li>
                            <li onClick={()=>handleClickfloor("Tiles - Cement")} >
                            <Link  >Cement</Link>
                          </li>
                            <li onClick={()=>handleClickfloor("Tiles - Mosaic")} >
                            <Link  >Mosaic</Link>
                          </li>
                            <li onClick={()=>handleClickfloor("Tiles - Quarry")} >
                            <Link  >Quarry</Link>
                          </li>

                            <li onClick={()=>handleClickfloor("Tiles - Metal")} >
                            <Link  >Metal</Link>
                          </li>
                          <li onClick={()=>handleClickfloor("Tiles - Resin")} >
                            <Link  >Resin</Link>
                          </li>
                          <li onClick={()=>handleClickfloor("Tiles - Linoleum")} >
                            <Link  >Linoleum</Link>
                          </li>
                        </ul>
                        </div>
                        <div class="menu-col-1">
                          <h4 class="menu-category">
                          <li onClick={()=>handleClickfloor("Wooden Flooring")}  style={{cursor:"pointer !important"}}>
                         Wooden Flooring
                          </li>
                          </h4>
                        <ul>
                        <li onClick={()=>handleClickfloor("Wooden Flooring - Hardwood")} >
                            <Link  >Hardwood</Link>
                          </li>
                        <li onClick={()=>handleClickfloor("Wooden Flooring - Laminate")} >
                            <Link  >Laminate</Link> 
                          </li>
                        <li onClick={()=>handleClickfloor("Wooden Flooring -  Engineered Wood")} >
                            <Link  > Engineered Wood</Link>
                          </li>
                        <li onClick={()=>handleClickfloor("Wooden Flooring - Floor Board")} >
                            <Link  > Floor Board</Link>
                          </li>
                          
                         
                   
                          </ul>
                          <p className="fw-bold fs-5" >
                          Flooring - Other 
                                </p> 
                   
                          <p className="fw-bold fs-5" onClick={()=>handleClickfloor("Wooden Flooring - Hardwood")}  style={{cursor:"cursor"}}>
                          
                          WallPaper, Mural & Panels
                    
                                </p>
                             
                        </div>
                        <div class="menu-col-1">
                  <h4 class="menu-category">
                  <li onClick={()=>handleClickfloor("Natural Stone")}  style={{cursor:"pointer !important"}}>
                          Natural Stone
                          </li>
                          </h4>

                          <ul>
                        <li onClick={()=>handleClickfloor("Natural Stone - Granite")} >
                            <Link  > Granite</Link>
                          </li>

                        <li onClick={()=>handleClickfloor("Natural Stone - Marble")} >
                            <Link  > Marble</Link>
                          </li>

                        <li onClick={()=>handleClickfloor("Natural Stone - Quartz")} >
                            <Link  >Quartz</Link>
                          </li>

                   <li onClick={()=>handleClickfloor("Natural Stone - Sandstone")} >
                            <Link  > Sandstone</Link>
                          </li>

                   <li onClick={()=>handleClickfloor("Natural Stone - Limestone")} >
                            <Link  >Limestone</Link>
                          </li>

                   <li onClick={()=>handleClickfloor("Natural Stone - Slate")} >
                            <Link  > Slate </Link>
                          </li>

                          

                        </ul>
                        <p className="fw-bold fs-5" onClick={()=>handleClickfloor("Cladding Brick")}  style={{cursor:"cursor"}}>
                        Cladding Brick
                                </p> 
                   
                          <p className="fw-bold fs-5" onClick={()=>handleClickfloor("Pavers")}  style={{cursor:"cursor"}}>                          Pavers
                                </p>
                          <p className="fw-bold fs-5" onClick={()=>handleClickfloor("Accessories")}  style={{cursor:"cursor"}}>                          Accessories
                                </p>
                        </div>
                        <div class="menu-col-1">
                        <Link to="/catogoriesLanding/Paints_&_Finishes">
                        <h4 class="menu-category">
                          Paints & Finishes
                          </h4>      
                          </Link>                  
                        <ul>
                         <li onClick={()=>handlepaint("Interior")} >
                            <Link  >Interior
</Link>
                          </li>
                         <li onClick={()=>handlepaint("Exterior")} >
                            <Link  >Exterior
</Link>
                          </li>
                         <li onClick={()=>handlepaint("Wood & Metal Finishes")} >
                            <Link  >Wood & Metal Finishes
</Link>
                          </li>
                         <li onClick={()=>handlepaint("Other")} >
                            <Link  >Other</Link>
                          </li>
                         
                        </ul>
                
                      </div>

                    </div>
                  </li>
                    <li class="header_li">
                    <Link to="/catogoriesLanding/Hardware">Hardware</Link>
                    <div class="menu-sub construction-chemicals">
                      <div class="menu-col-1">
                        <ul>
                        <li onClick={()=>handlehardware("Bath Hardware")} >                      
                            <Link  >Bath Hardware</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Door & Window Hardware")}>
                            <Link  >Door & Window Hardware</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Safe & Deposit Box")}>
                            <Link  >Safe & Deposit Box</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Railing System")}>
                            <Link  >Railing System</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Nails, Screws, Nuts & Bolts")}>
                            <Link  >Nail , Screws, Nuts & Bolts
</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Curtain Rings & Rod")}>
                            <Link  >
                            Curtain Rings & Rods
                            </Link>
                          </li>
                          <li  onClick={()=>handlehardware("Smoke Detector")}>
                            <Link  >Smoke Detector</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Security System")}>
                            <Link  >Security Systems</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Ladder")}>
                            <Link  >Ladders</Link>
                          </li>
                          <li  onClick={()=>handlehardware("Drawer Channel / Slider")}>
                          
                            <Link  >Drawer Channel / Slider</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="header_li">
                      <Link to="/">Roofing & Cladding</Link>
                      <div class="menu-sub construction-chemicals">
                        <div class="menu-col-1">
               
                      <Link to="/catogoriesLanding/Roofing">

               <h4 class="menu-category">
                 Roofing</h4>
                      </Link>
  
                              <ul>
                      
                              <li  onClick={()=>handleroof("Metal Roofing Sheet & Accessories")}>
                              <Link  >Metal Roofing Sheet & Accessories </Link>
                            </li>
                            <li onClick={()=>handleroof("Polycarbonate Sheet")}>
                              <Link  >Polycarbonate Sheets</Link>
                            </li>
                          
                            <li onClick={()=>handleroof("Fibre Cement Sheet")}>
                              <Link  >Fibre Cement Sheets</Link>
                            </li>
                            <li onClick={()=>handleroof("Clay Tiles")}>
                              <Link  >Clay Roof Tiles & Accessories</Link>
                            </li>
                            <li onClick={()=>handleroof('Clay Roof Tiles & Accessories')}>
                              <Link  >Solar Roofing</Link>
                            </li>
                            <li onClick={()=>handleroof("Solar Roofing")}>
                              <Link  >Ceiling Panel </Link>
                            </li>
                          
                            </ul>
                            <Link to="/catogoriesLanding/Boards_&_Sheets">
                            <h4 class="menu-category">Boards & Sheets</h4>                       
                                 </Link>
                          <ul>             
                          <li onClick={()=>handleplywood("Plywood")}>
                          <Link  >Plywood</Link>
                        </li>
                        <li onClick={()=>handleplywood("Medium Density Fibreboard (MDF)")}>
                          <Link  >Medium Density Fibreboard (MDF)</Link>
                        </li>
                        <li onClick={()=>handleplywood("High Density Fibreboard (HDF)")}>
                          <Link  >High Density Fibreboard (HDF)</Link>
                        </li>
                        <li onClick={()=>handleplywood("Oriented Strand Board (OSB)")}>
                          <Link  >Oriented Strand Board (OSB)</Link>
                        </li>
                        <li onClick={()=>handleplywood("HDHMR Board")}>
                          <Link  >HDHMR Board </Link>
                        </li>
                        <li onClick={()=>handleplywood("Particleboard")}>
                          <Link  >Particleboard</Link>
                        </li>
                        <li onClick={()=>handleplywood("Blockboard")}>
                          <Link  >Blockboard</Link>
                        </li>
                        <li onClick={()=>handleplywood("Veneer & Mica")}>
                          <Link  >Veneer & Mica</Link>
                        </li>
                       
                      </ul>
                  
                      </div>

                            <div class="menu-col-1">     
                            <Link to="/catogoriesLanding/Glass">
               <h4 class="menu-category">
                    Architectural Glass
                    </h4>
                                </Link>    
               <ul>
                          <li onClick={()=>handleGlass("Toughened")} >
                              <Link  >Toughened</Link>
                            </li>
                              <li onClick={()=>handleGlass("Float")} >
                              <Link  >Float</Link>
                            </li>
                              <li onClick={()=>handleGlass("Extra Clean")} >
                              <Link  >Extra Clean</Link>
                            </li>
                              <li onClick={()=>handleGlass("Tinted")} >
                              <Link  >Tinted</Link>
                            </li>
                              <li onClick={()=>handleGlass("Chromati")} >
                              <Link  >Chromatic</Link>
                            </li>
                              <li onClick={()=>handleGlass("Reflective")} >
                              <Link  >Reflective</Link>
                            </li>
                              <li onClick={()=>handleGlass("Laminated")} >
                              <Link  >Laminated</Link>
                            </li>
                              <li onClick={()=>handleGlass("Lacquered")} >
                              <Link  >Lacquered</Link>
                            </li>
                              <li onClick={()=>handleGlass("Bevelled")} >
                              <Link  >Bevelled</Link>
                            </li>
                              <li onClick={()=>handleGlass("Frosted")} >
                              <Link  >Frosted</Link>
                            </li>
                              <li onClick={()=>handleGlass("Textured")} >
                              <Link  >Textured</Link>
                            </li>
                            </ul>
                            </div>
                           
                      </div>
                    </li>

                    <li class="header_li">
                    <Link to="/">More</Link>
                    <div class="menu-sub more">
                      <div class="menu-col-1">
                      <Link to="/catogoriesLanding/Doors_&_Windows">
                      <h4 class="menu-category">Doors & Windows</h4>
                          </Link>
        
        <ul>
          <li onClick={()=>handledoors("Metal")}>
            <Link  >Metal </Link>
          </li>
          <li onClick={()=>handledoors("Wooden")}>
            <Link  >Wooden </Link>
          </li>
          <li onClick={()=>handledoors("Modular")}>
            <Link  >Modular</Link>
          </li>
          <li onClick={()=>handledoors("Glass")}>
            <Link  >Glass </Link>
          </li>
          <li>
            <Link  onClick={()=>handledoors("UPVC")} >UPVC </Link>
            
          </li>

        </ul>
        </div>
        <div class="menu-col-1">
        <Link to="/catogoriesLanding/Modular">
<h4 class="menu-category">Modular</h4>

</Link>
        <ul>
          <li onClick={()=>handlemod("Kitchen")}>
          <Link   >Kitchen </Link>
            
          </li>
     <li onClick={()=>handlemod("Bath")}>
            <Link  >Bath </Link>
          </li>
     <li onClick={()=>handlemod("Wardrobe")}>
            <Link  >Wardrobe </Link>
          </li>

        </ul>
        </div>
        <div class="menu-col-1">

<h4 class="menu-category">Miscellaneous</h4>
        <ul>
   

<li>
<Link  >Shutter </Link>
</li>
<li>
<Link  >Shuttering Ply </Link>
</li>
<li>
<Link  >Fencing</Link>
</li>
<li>
<Link  >Gate </Link>
</li>
<li>
<Link  >Rebar Coupler </Link>
</li>

</ul>
              
                      </div>
                    </div>
                  </li>
                  <li class="header_li">
                      <Link to="/">Discover</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="hamburger-menu-container">
                <div>
              <Dropdown>
  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
  <i class="fas fa-user-alt fa-2x w-10 h-10  mx-auto" style={{color:"white"}}></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

                
                 <Dropdown.Item  style={{color:"red !important"}} href="/profile">My Profile</Dropdown.Item>
             
                
                 <Dropdown.Item  style={{color:"red !important"}} href="/orders">Orders</Dropdown.Item>
             
                
                 <Dropdown.Item  style={{color:"red !important"}} href="/payments">Payments</Dropdown.Item>
             
                
                 <Dropdown.Item  style={{color:"red !important"}} href="/enquiry">Enquiries</Dropdown.Item>
             
                
                 <Dropdown.Item  style={{color:"red !important"}} href="/wishlist">Wishlist</Dropdown.Item>
             
                
                 <Dropdown.Item  style={{color:"red !important"}} href="/requests">Customer Service</Dropdown.Item>
             
         
                 <Dropdown.Item  style={{color:"red !important"}} href="/review">Reviews</Dropdown.Item>
             

                    {/* <button onClick={logout} className="my-2"> */}
                 <Dropdown.Item  style={{color:"red !important"}} onClick={logout}>Logout</Dropdown.Item>
             

  </Dropdown.Menu>
</Dropdown>
</div>

          {/* <Link to="/">
              <a class="w-full block py-2 px-1 text-center hover:bg-black-200 hover:text-white-800">
              <i class="fas fa-user-alt w-6 h-6  mx-auto" style={{color:"white"}}></i>
                <span onClick={() => setshowmenu(!showmenu)}> Account</span>
                {showmenu ? (
                  <div className="menu">
                    <button className="my-2">
                      <a href="/profile">My Profile</a>
                    </button>
                    <button className="my-2">
                      <a href="/orders">Orders</a>
                    </button>
                    <button className="my-2">
                      <a href="/payments">Payments</a>
                    </button>
                    <button className="my-2">
                      <a href="/enquiry">Enquiries</a>
                    </button>
                    <button className="my-2">
                      <a href="/wishlist">Wishlist</a>
                    </button>
                    <button className="my-2">
                      <a href="/requests">Customer Service</a>
                    </button>
                    <button className="my-2">
                      <a href="/review">Reviews</a>
                    </button>

                    <button onClick={logout} className="my-2">
                      <a href="/login">Logout</a>
                    </button>
                  </div>
                ) : null}
              </a>
            </Link> */}
          
                <div class="hamburger-menu">
                
             
                  <div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </header>


           
        </div>
      </div>
    );
  }
  return (
    /*Navbar for users who are not logged in*/
    <div>
      <div>
        <header>
          <div class="upper-pannel">
            <div className="upper-pannel_left">
              <span>
                <i class="fas fa-question"> </i>&nbsp;&nbsp;{" "}
                {/* <Link to="/track-order">Help</Link> */}
                <Link to="/contact">Help</Link>
              </span>
            </div>
            <div className="upper-pannel_right">
              <span>
                <i class="fas fa-book-open"> </i>&nbsp;&nbsp;{" "}
                {/* <Link to="/track-order">TRequest for Quote</Link> */}
                <Link to="/requestQuotation">Request for Quote</Link>
              </span>

              <span>
                <i class="fas fa-truck-moving"> </i>&nbsp;&nbsp;{" "}
                {/* <Link to="/track-order">Track your Order</Link> */}
                <Link to="/track-order">Track your Order</Link>
              </span>
            </div>
          </div>
          <div class="main-container">
            <input type="checkbox" name="" id="check" />
            <div class="logo-container">
              <Link to="/">
                <img
                  src="https://seller.seventhsq.com/static/staticfiles/img/white%20png%20(1).png"
                  alt=""
                />
              </Link>
            </div>
            <div class="nav-btn">
              <div class="nav-links mobileNavLinks">
                <ul>
                  <li class="input__box">
                    <form action={`/search-result/${search}`}>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Your Product"
                        aria-label="Search Your Product"
                        aria-describedby="button-addon2"
                        name="search"
                        value={search}
                        onChange={onChange}
                      />

                      <SuggestionsList
                        inputValue={search}
                        selectedSuggestion={selectedSuggestion}
                        onSelectSuggestion={onSelectSuggestion}
                        displaySuggestions={displaySuggestions}
                        suggestions={filteredSuggestions}
                      />
                    </form>

                    <i class="fas fa-search"></i>
                  </li>
                  <li class="log-sign">
                    <a to="/">
                      <FaMapMarkerAlt />
                      <select className="form-select" onChange={handlecity}>
                        {city ? (
                          <option id={city.toString()} value={city.toString}>
                            {city.toString}
                          </option>
                        ) : (
                          <option selected disabled hidden>
                            Select Region
                          </option>
                        )}
                        <option id="Select Region" value="Select Region">
                          Select Region
                        </option>
                        <option id="Andhra Pradesh" value="Andhra Pradesh">
                          Andhra Pradesh
                        </option>
                        <option
                          id="Arunachal Pradesh"
                          value="Arunachal Pradesh"
                        >
                          Arunachal Pradesh
                        </option>
                        <option id="Assam" value="Assam">
                          Assam
                        </option>

                        <option id="Bihar" value="Bihar">
                          Bihar
                        </option>
                        <option id="Chhattisgarh" value="Chhattisgarh">
                          Chhattisgarh
                        </option>
                        <option id="Goa" value="Goa">
                          Goa
                        </option>
                        <option id="Gujarat" value="Gujarat">
                          Gujarat
                        </option>
                        <option id="Haryana" value="Haryana">
                          Haryana
                        </option>
                        <option id="Himachal Pradesh" value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option id="Jharkhand" value="Jharkhand">
                          Jharkhand
                        </option>
                        <option id="Karnataka" value="Karnataka">
                          Karnataka
                        </option>
                        <option id="Kerala" value="Kerala">
                          Kerala
                        </option>
                        <option id="Madhya Pradesh" value="Madhya Pradesh">
                          Madhya Pradesh
                        </option>
                        <option id="Maharashtra" value="Maharashtra">
                          Maharashtra
                        </option>
                        <option id="Manipur" value="Manipur">
                          Manipur
                        </option>
                        <option id="Meghalaya" value="Meghalaya">
                          Meghalaya
                        </option>
                        <option id="Mizoram" value="Mizoram">
                          Mizoram
                        </option>
                        <option id="Nagaland" value="Nagaland">
                          Nagaland
                        </option>
                        <option id="Odisha" value="Odisha">
                          Odisha
                        </option>
                        <option id="Punjab" value="Punjab">
                          Punjab
                        </option>
                        <option id="Rajasthan" value="Rajasthan">
                          Rajasthan
                        </option>
                        <option id="Sikkim" value="Sikkim">
                          Sikkim
                        </option>
                        <option id="Tamil Nadu" value="Tamil Nadu">
                          Tamil Nadu
                        </option>
                        <option id="Telangana" value="Telangana">
                          Telangana
                        </option>
                        <option id="Tripura" value="Tripura">
                          Tripura
                        </option>
                        <option id="Uttar Pradesh" value="Uttar Pradesh">
                          Uttar Pradesh
                        </option>
                        <option id="Uttarakhand" value="Uttarakhand">
                          Uttarakhand
                        </option>
                        <option id="West Bengal" value="West Bengal">
                          West Bengal
                        </option>
                        <option id="Chandigarh" value="Chandigarh">
                          Chandigarh
                        </option>
                        <option id="Daman" value="Daman">
                          Daman
                        </option>
                        <option id="Delhi" value="Delhi">
                          Delhi
                        </option>
                      </select>
                    </a>
                  </li>
                  <li className="log-sign">
                    <Link to="/cart">
                      <FaCartArrowDown />
                      <span>Cart</span>
                    </Link>
                  </li>
                  <li className="log-sign">
                    <Link to="/login">
                      <FaUserCircle />

                      <span>Login/SignUp</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="lowerNavbar">
                
              <div class="link-boxes">
            <ul class="box">
              <li>
                <a href="/">Registered Office :</a>
              </li>
              <li>
                <a href="/">
                  75, Jhotwara Industrial Area, Jaipur, Rajasthan-302012{" "}
                </a>
              </li>
              <li>
                <a href="/">CIN No. : 121212234ASDQ</a>
              </li>
            </ul>
            </div>
            <ul class="menu-main">
                    <li class="header_li">
                      <Link  >Construction Materials</Link>
                      <div class="menu-sub building">
                        <div class="menu-col-1">
                        <Link  to="/catogoriesLanding/Cement">

<h4 class="menu-category">
  Cement
  </h4>
</Link>
<ul>
  <li>
    <Link href="/catogoriesLanding/Cement">
      <p className="fw-bold">
       Ordinary Portland cement (OPC)
      </p>
    </Link>

    <ul>
    <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 33")}>
        <Link >
        OPC 33
        </Link>
      </li>
      <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 43")} >
        <Link >
        OPC 43
        </Link>
      </li>
      <li onClick={()=>handleClickcement("Ordinary Portland Cement (OPC) 53")}>
      <Link >
        OPC 53
        </Link>
      </li>
    </ul>
  </li>
  <li onClick={()=>handleClickcement("Portland Slag Cement (PSC)")}>
    <Link >
      Portland Slag Cement (PSC)
    </Link>
  </li>
  <li  onClick={()=>handleClickcement("Portland Composite Cement (PCC)")}>
    <Link >
      Portland Composite Cement (PCC)
    </Link>
  </li>
  <li onClick={()=>handleClickcement('Portland Pozzolana Cement (PPC)')}>
    <Link  >
    
    Portland Pozzolana Cement (PPC) 
    </Link>
  </li >
  <li onClick={()=>handleClickcement("White Cement")}>
    <Link >White Cement</Link>
  </li>
</ul>

</div>
<div class="menu-col-1">
<Link to="/catogoriesLanding/Bricks" >

<h4 class="menu-category">
  Bricks and Blocks
  </h4>
  </Link>
<ul>
  <li onClick={()=>handleClickbrick("Red Clay Brick")}>
  <Link >
      Red Clay Brick
      </Link>
  </li>
  <li onClick={()=>handleClickbrick("Fly Ash Brick")}>
    <Link >Fly Ash Brick</Link>
  </li>

  <li onClick={()=>handleClickbrick("Concrete Hollow Block")}>
    <Link > Concrete Hollow Block Fly</Link>
  </li>

  <li onClick={()=>handleClickbrick("Refractory Brick")}>
    <Link > Refractory Brick</Link>
  </li>
  <li onClick={()=>handleClickbrick("AAC Block")}>
    <Link >AAC Blocks</Link>
  </li>
  <li onClick={()=>handleClickbrick("Engineering  Brick")}>
    <Link > Engineering  Block</Link>
  </li>
  <li onClick={()=>handleClickbrick("Sand Lime Brick")}>
    <Link > Sand Lime Brick</Link>
  </li>
  <li onClick={()=>handleClickbrick("Porotherm Hollow Block")}>
    <Link >Porotherm Hollow Block</Link>
  </li>
  <li onClick={()=>handleClickbrick("RCC Pole")}>
    <Link >RCC Pole</Link>
  </li>
 
</ul>
</div>

<div class="menu-col-1">
<Link to="/catogoriesLanding/Steel" >  
<h4 class="menu-category">Steel</h4>
</Link>
<ul>
  <li onClick={()=>handleClicksteel("TMT Bar")}>
    <Link >TMT Bars</Link>
  </li>
  <li onClick={()=>handleClicksteel("Binding Wire & Stirrup")}>
    <Link >Binding Wire & Stirrup</Link>
  </li>
  <li onClick={()=>handleClicksteel("Structural Steel")}>
    <Link >
   
    Structural Steel 
    </Link>
  </li>
</ul>
</div>
<div class="menu-col-1">
<Link to="/catogoriesLanding/Aggregates" >
<h4 class="menu-category">Aggregates</h4>
</Link>
<ul>
  <li>
    <ul>
      <li onClick={()=>handleClickaggr("M-Sand")}>
      <Link >
        M-Sand
        </Link>
      </li>
      <li onClick={()=>handleClickaggr("P-Sand")}>
        <Link >
        P-Sand
        </Link>
      </li>
      <li onClick={()=>handleClickaggr("River Sand")}>
        <Link >
        River Sand
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <ul>
      <li onClick={()=>handleClickaggr("Crushed Stone / Grit")}>
        <Link >
        Crushed Stone / Grit
        </Link>
      </li>
      <li onClick={()=>handleClickaggr("Gravel")}>
        <Link >
        Gravel
        </Link>
      </li>
    </ul>
  </li>
</ul>
</div>

</div>
</li>
<li class="header_li">
<Link to="/">Plumbing and Electrical</Link>

<div class="menu-sub hvac">
<div class="menu-col-1">
<Link to="/catogoriesLanding/Pipes_&_Fittings">
<h4 class="menu-category">Pipes & Fittings</h4> 
</Link>          
<ul>
<li   onClick={()=>handleClickpipes("UPVC Pipe")}>
  <Link>UPVC Pipes</Link>
</li>
<li onClick={()=>handleClickpipes("CPVC Pipe")}>
  <Link  >CPVC Pipes</Link>
</li>
<li onClick={()=>handleClickpipes("Iron & Steel Pipe")}>
  <Link  >Iron & Steel Pipes </Link>
</li>
<li onClick={()=>handleClickpipes("Fittings")}>
  <Link  >Fittings</Link>
</li>
<li onClick={()=>handleClickpipes("Water Tank")}>
  <Link  >Water Tank</Link>
</li>
<li onClick={()=>handleClickpipes("Pipe - Other")}>

  <Link  >Pipes - Other </Link>
</li>


</ul>
</div>

<div class="menu-col-1">
<Link to="/catogoriesLanding/Sanitaryware" > 
<h4 class="menu-category">Sanitaryware</h4>
</Link>
<ul>
 <li onClick={()=>handleClicksanit("Faucet")}>
  <Link  >Faucet</Link>
</li>
 <li onClick={()=>handleClicksanit("Shower")}>
  <Link  >Shower</Link>
</li>
 <li onClick={()=>handleClicksanit("Sink")}>
  <Link  >Sink</Link>
</li>
 <li onClick={()=>handleClicksanit("Washbasin")}>
  <Link  >Washbasin</Link>
</li>
 <li onClick={()=>handleClicksanit("Water Closet & Bidet")}>
  <Link  >Water Closet & Bidet</Link>
</li>
 <li onClick={()=>handleClicksanit("Bath Tub")}>
  <Link  >Bath Tub</Link>
</li>
 <li onClick={()=>handleClicksanit("Urinal")}>
  <Link  >Urinal </Link>
</li>
 <li onClick={()=>handleClicksanit("Flushing Cistern & Flush Tank")}>
  <Link  >Flushing Cistern & Flush Tank </Link>
</li>
 <li onClick={()=>handleClicksanit("Fittings & Allied Product")}>
  <Link  >Fittings & Allied Products </Link>
</li>


</ul>
</div>
<div class="menu-col-1">
<Link to="/catogoriesLanding/Electricals">
<h4 class="menu-category">Electricals</h4>
</Link>
<ul>                    
<li onClick={()=>handleClickelec("Switchgear")}>
  <Link  >Switchgear</Link>
</li>
<li onClick={()=>handleClickelec("Conduit Pipe")}>
  <Link  >Conduit Pipe</Link>
</li>
<li onClick={()=>handleClickelec("Electrical Box")}>
  <Link  >Electrical Box</Link>
</li>
<li onClick={()=>handleClickelec("Wires & Cables")}>
  <Link  >Wires & Cables</Link>
</li>
<li onClick={()=>handleClickelec("Switch , Socket & Switchboard")}>
  <Link  >Switch , Socket & Switchboard</Link>
</li>

<li onClick={()=>handleClickelec("Lighting")}>
  <Link  >Lighting</Link>
</li>
<li onClick={()=>handleClickelec("Home Automation")}>
  <Link  >Home Automation</Link>
</li>

<li onClick={()=>handleClickelec("Electrical Fittings")}>
  <Link >Electrical Fittings</Link>
</li>
</ul>
</div>
<div class="menu-col-1">

<Link to="/catogoriesLanding/HVAC" >
<h4 class="menu-category">
HVAC 
</h4>
</Link>
<ul>
<li onClick={()=>handleClickhvac("Exhaust Fans , Ceiling Fans")}>
  <Link  >Exhaust Fans , Ceiling Fans</Link>
</li>
<li onClick={()=>handleClickhvac("Air Conditioner & Outdoor")}>
  <Link  >Air Conditioner & Outdoor</Link>
</li>
<li onClick={()=>handleClickhvac("Ventilation Louvre")}>
  <Link  >Ventilation Louvres</Link>
</li>
<li onClick={()=>handleClickhvac("Water Heater / Geyser")}>
  <Link  >Water Heater / Geyser</Link>
</li>
<li onClick={()=>handleClickhvac("Accessories")}>
  <Link  >Accessories</Link>
</li>
<li onClick={()=>handleClickelec("Other")}>

  <Link  >Other</Link>
</li>


</ul>
</div>
</div>
</li>
<li class="header_li">
<Link to="/catogoriesLanding/Chemicals">Chemicals</Link>
<div class="menu-sub flooring">
<div class="menu-col-1">
<ul>

<li onClick={()=>handleClickchem("Wall Putty")}>
  <Link  >Wall Putty </Link>
</li>
<li onClick={()=>handleClickchem("UPVC & CPVC Solvent")} >
  <Link  >UPVC & CPVC Solvent</Link>
</li>
<li onClick={()=>handleClickchem("Sealant")} >
  <Link  >Sealant</Link>
</li>
<li onClick={()=>handleClickchem("Adhesive")} >
  <Link  >Adhesive</Link>
</li>
<li onClick={()=>handleClickchem("Grout")} >
  <Link  >Grout</Link>
</li>
<li onClick={()=>handleClickchem("Waterproofing")} >
  <Link  >Waterproofing</Link>
</li>
<li onClick={()=>handleClickchem("Primer")} >
  <Link  >Primer</Link>
</li>
<li onClick={()=>handleClickchem("Screed")} >

  <Link  >Screed</Link>
</li>
<li onClick={()=>handleClickchem("Mortar")} >


  <Link  >Mortar</Link>
</li>
</ul>
</div>
</div>
</li>
<li class="header_li">
<Link to="/catogoriesLanding/Flooring_&_wall">Flooring & wall</Link>
<div class="menu-sub flooring">
<div class="menu-col-1">
<h4 class="menu-category">
<li onClick={()=>handleClickfloor("Tiles")}>
 Tiles
</li>
</h4>
<ul>
  <li onClick={()=>handleClickfloor("Tiles - Ceramic")} >
  <Link  >Ceramic</Link>
</li>

  <li onClick={()=>handleClickfloor("Tiles - Vitrified")} >
  <Link  >Vitrified</Link>
</li>
  <li onClick={()=>handleClickfloor("Tiles - Glass")} >
  <Link  >Glass</Link>
</li>
  <li onClick={()=>handleClickfloor("Tiles - Cement")} >
  <Link  >Cement</Link>
</li>
  <li onClick={()=>handleClickfloor("Tiles - Mosaic")} >
  <Link  >Mosaic</Link>
</li>
  <li onClick={()=>handleClickfloor("Tiles - Quarry")} >
  <Link  >Quarry</Link>
</li>

  <li onClick={()=>handleClickfloor("Tiles - Metal")} >
  <Link  >Metal</Link>
</li>
<li onClick={()=>handleClickfloor("Tiles - Resin")} >
  <Link  >Resin</Link>
</li>
<li onClick={()=>handleClickfloor("Tiles - Linoleum")} >
  <Link  >Linoleum</Link>
</li>
</ul>
</div>
<div class="menu-col-1">
<h4 class="menu-category"  style={{cursor:"pointer !important"}}>
<li onClick={()=>handleClickfloor("Wooden Flooring")}  style={{cursor:"pointer !important"}}>
Wooden Flooring
</li>
</h4>
<ul>
<li onClick={()=>handleClickfloor("Wooden Flooring - Hardwood")} >
  <Link  >Hardwood</Link>
</li>
<li onClick={()=>handleClickfloor("Wooden Flooring - Laminate")} >
  <Link  >Laminate</Link> 
</li>
<li onClick={()=>handleClickfloor("Wooden Flooring -  Engineered Wood")} >
  <Link  > Engineered Wood</Link>
</li>
<li onClick={()=>handleClickfloor("Wooden Flooring - Floor Board")} >
  <Link  > Floor Board</Link>
</li>



</ul>
<p className="fw-bold fs-5" >
Flooring - Other 
      </p> 

<p className="fw-bold fs-5" onClick={()=>handleClickfloor("WallPaper, Mural & Panels")}  style={{cursor:"cursor"}}>

WallPaper, Mural & Panels

      </p>
   
</div>
<div class="menu-col-1">
<h4 class="menu-category">
<li onClick={()=>handleClickfloor("Natural Stone")}  style={{cursor:"pointer !important"}}>
Natural Stone
</li>
</h4>

<ul>
<li onClick={()=>handleClickfloor("Natural Stone - Granite")} >
  <Link  > Granite</Link>
</li>

<li onClick={()=>handleClickfloor("Natural Stone - Marble")} >
  <Link  > Marble</Link>
</li>

<li onClick={()=>handleClickfloor("Natural Stone - Quartz")} >
  <Link  >Quartz</Link>
</li>

<li onClick={()=>handleClickfloor("Natural Stone - Sandstone")} >
  <Link  > Sandstone</Link>
</li>

<li onClick={()=>handleClickfloor("Natural Stone - Limestone")} >
  <Link  >Limestone</Link>
</li>

<li onClick={()=>handleClickfloor("Natural Stone - Slate")} >
  <Link  > Slate </Link>
</li>



</ul>
<p className="fw-bold fs-5" onClick={()=>handleClickfloor("Cladding Brick")}  style={{cursor:"cursor"}}>
Cladding Brick
      </p> 

<p className="fw-bold fs-5" onClick={()=>handleClickfloor("Pavers")}  style={{cursor:"cursor"}}>                          Pavers
      </p>
<p className="fw-bold fs-5" onClick={()=>handleClickfloor("Accessories")}  style={{cursor:"cursor"}}>                          Accessories
      </p>
</div>
<div class="menu-col-1">
<Link to="/catogoriesLanding/Paints_&_Finishes">
<h4 class="menu-category">
Paints & Finishes
</h4>      
</Link>                  
<ul>
<li onClick={()=>handlepaint("Interior")} >
  <Link  >Interior
</Link>
</li>
<li onClick={()=>handlepaint("Exterior")} >
  <Link  >Exterior
</Link>
</li>
<li onClick={()=>handlepaint("Wood & Metal Finishes")} >
  <Link  >Wood & Metal Finishes
</Link>
</li>
<li onClick={()=>handlepaint("Other")} >
  <Link  >Other</Link>
</li>

</ul>

</div>

</div>
</li>
<li class="header_li">
<Link to="/catogoriesLanding/Hardware">Hardware</Link>
<div class="menu-sub construction-chemicals">
<div class="menu-col-1">
<ul>
<li onClick={()=>handlehardware("Bath Hardware")} >                      
  <Link  >Bath Hardware</Link>
</li>
<li  onClick={()=>handlehardware("Door & Window Hardware")}>
  <Link  >Door & Window Hardware</Link>
</li>
<li  onClick={()=>handlehardware("Safe & Deposit Box")}>
  <Link  >Safe & Deposit Box</Link>
</li>
<li  onClick={()=>handlehardware("Railing System")}>
  <Link  >Railing System</Link>
</li>
<li  onClick={()=>handlehardware("Nails, Screws, Nuts & Bolts")}>
  <Link  >Nail , Screws, Nuts & Bolts
</Link>
</li>
<li  onClick={()=>handlehardware("Curtain Rings & Rod")}>
  <Link  >
  Curtain Rings & Rods
  </Link>
</li>
<li  onClick={()=>handlehardware("Smoke Detector")}>
  <Link  >Smoke Detector</Link>
</li>
<li  onClick={()=>handlehardware("Security System")}>
  <Link  >Security Systems</Link>
</li>
<li  onClick={()=>handlehardware("Ladder")}>
  <Link  >Ladders</Link>
</li>
<li  onClick={()=>handlehardware("Drawer Channel / Slider")}>

  <Link  >Drawer Channel / Slider</Link>
</li>
</ul>
</div>
</div>
</li>

<li class="header_li">
<Link to="/">Roofing & Cladding</Link>
<div class="menu-sub construction-chemicals">
<div class="menu-col-1">

<Link to="/catogoriesLanding/Roofing">

<h4 class="menu-category">
Roofing</h4>
</Link>

    <ul>

    <li  onClick={()=>handleroof("Metal Roofing Sheet & Accessories")}>
    <Link  >Metal Roofing Sheet & Accessories </Link>
  </li>
  <li onClick={()=>handleroof("Polycarbonate Sheet")}>
    <Link  >Polycarbonate Sheets</Link>
  </li>

  <li onClick={()=>handleroof("Fibre Cement Sheet")}>
    <Link  >Fibre Cement Sheets</Link>
  </li>
  <li onClick={()=>handleroof("Clay Tiles")}>
    <Link  >Clay Roof Tiles & Accessories</Link>
  </li>
  <li onClick={()=>handleroof('Clay Roof Tiles & Accessories')}>
    <Link  >Solar Roofing</Link>
  </li>
  <li onClick={()=>handleroof("Solar Roofing")}>
    <Link  >Ceiling Panel </Link>
  </li>

  </ul>
  <Link to="/catogoriesLanding/Boards_&_Sheets">
  <h4 class="menu-category">Boards & Sheets</h4>                       
       </Link>
<ul>             
<li onClick={()=>handleplywood("Plywood")}>
<Link  >Plywood</Link>
</li>
<li onClick={()=>handleplywood("Medium Density Fibreboard (MDF)")}>
<Link  >Medium Density Fibreboard (MDF)</Link>
</li>
<li onClick={()=>handleplywood("High Density Fibreboard (HDF)")}>
<Link  >High Density Fibreboard (HDF)</Link>
</li>
<li onClick={()=>handleplywood("Oriented Strand Board (OSB)")}>
<Link  >Oriented Strand Board (OSB)</Link>
</li>
<li onClick={()=>handleplywood("HDHMR Board")}>
<Link  >HDHMR Board </Link>
</li>
<li onClick={()=>handleplywood("Particleboard")}>
<Link  >Particleboard</Link>
</li>
<li onClick={()=>handleplywood("Blockboard")}>
<Link  >Blockboard</Link>
</li>
<li onClick={()=>handleplywood("Veneer & Mica")}>
<Link  >Veneer & Mica</Link>
</li>

</ul>

</div>

  <div class="menu-col-1">     
  <Link to="/catogoriesLanding/Glass">
<h4 class="menu-category">
Architectural Glass
</h4>
      </Link>    
<ul>
<li onClick={()=>handleGlass("Toughened")} >
    <Link  >Toughened</Link>
  </li>
    <li onClick={()=>handleGlass("Float")} >
    <Link  >Float</Link>
  </li>
    <li onClick={()=>handleGlass("Extra Clean")} >
    <Link  >Extra Clean</Link>
  </li>
    <li onClick={()=>handleGlass("Tinted")} >
    <Link  >Tinted</Link>
  </li>
    <li onClick={()=>handleGlass("Chromati")} >
    <Link  >Chromatic</Link>
  </li>
    <li onClick={()=>handleGlass("Reflective")} >
    <Link  >Reflective</Link>
  </li>
    <li onClick={()=>handleGlass("Laminated")} >
    <Link  >Laminated</Link>
  </li>
    <li onClick={()=>handleGlass("Lacquered")} >
    <Link  >Lacquered</Link>
  </li>
    <li onClick={()=>handleGlass("Bevelled")} >
    <Link  >Bevelled</Link>
  </li>
    <li onClick={()=>handleGlass("Frosted")} >
    <Link  >Frosted</Link>
  </li>
    <li onClick={()=>handleGlass("Textured")} >
    <Link  >Textured</Link>
  </li>
  </ul>
  </div>
 
</div>
</li>

<li class="header_li">
<Link to="/">More</Link>
<div class="menu-sub more">
<div class="menu-col-1">
<Link to="/catogoriesLanding/Doors_&_Windows">
<h4 class="menu-category">Doors & Windows</h4>
</Link>

<ul>
<li onClick={()=>handledoors("Metal")}>
<Link  >Metal </Link>
</li>
<li onClick={()=>handledoors("Wooden")}>
<Link  >Wooden </Link>
</li>
<li onClick={()=>handledoors("Modular")}>
<Link  >Modular</Link>
</li>
<li onClick={()=>handledoors("Glass")}>
<Link  >Glass </Link>
</li>
<li>
<Link  onClick={()=>handledoors("UPVC")} >UPVC </Link>

</li>

</ul>
</div>
<div class="menu-col-1">
<Link to="/catogoriesLanding/Modular">
<h4 class="menu-category">Modular</h4>

</Link>
<ul>
<li onClick={()=>handlemod("Kitchen")}>
<Link   >Kitchen </Link>

</li>
<li onClick={()=>handlemod("Bath")}>
<Link  >Bath </Link>
</li>
<li onClick={()=>handlemod("Wardrobe")}>
<Link  >Wardrobe </Link>
</li>

</ul>
</div>
<div class="menu-col-1">

<h4 class="menu-category">Miscellaneous</h4>
<ul>


<li>
<Link  >Shutter </Link>
</li>
<li>
<Link  >Shuttering Ply </Link>
</li>
<li>
<Link  >Fencing</Link>
</li>
<li>
<Link  >Gate </Link>
</li>
<li>
<Link  >Rebar Coupler </Link>
</li>

</ul>

</div>
</div>
</li>
<li class="header_li">
<Link to="/">Discover</Link> 
</li>
</ul>
</nav>
</div>
            <div class="hamburger-menu-container">
            <Link to="/login">
            <a class="w-full block py-2 px-1 text-center hover:bg-black-200 hover:text-white-800">
              <i class="fas fa-user-alt w-6 h-6  mx-auto" style={{color:"white"}}></i>
              
              {/* <span> Account</span> */}
            </a>
          </Link>
          

              <div class="hamburger-menu">
                <div>

                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <nav class="mobileBottomNav fixed bottom-0 inset-x-0  flex justify-between text-sm text-white-900 uppercase font-mono">
          <Link to="/help">
            <a class="w-full block py-2 px-1 text-center  transition duration-300">
              <i class="fas fa-question w-6 h-6  mx-auto"></i>

              <span> Help</span>
            </a>
          </Link>
          <Link to="/track">
            <a class="w-full block py-2 px-1 text-center hover:bg-black-200 hover:text-white-800">
              <i class="fas fa-truck-moving w-6 h-6  mx-auto"></i>

              <span> Track</span>
            </a>
          </Link>

          <Link to="cart">
            <a className="w-full block py-2 px-1 text-center hover:bg-black-200 hover:text-white-800">
              <i className="fas fa-shopping-cart w-6 h-6  mx-auto"></i>

              <span> Cart</span>
            </a>
          </Link>

          <Link to="/login">
            <a class="w-full block py-2 px-1 text-center hover:bg-black-200 hover:text-white-800">
              <i class="fas fa-user-alt w-6 h-6  mx-auto"></i>
              <span> Account</span>
            </a>
          </Link>
        </nav> */}
      </div>
    </div>
  );
}

export default withRouter(Navbar);
