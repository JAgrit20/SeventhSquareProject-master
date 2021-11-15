import React  from 'react'
import "./Navbar.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import Login from '../Login/Navlogin.js';
import { FaUserAlt } from 'react-icons/fa';


import axios from "axios"
import { useState, useEffect ,useContext} from 'react';
import { withRouter } from 'react-router-dom';
import SuggestionsList from './Autocomplete';
 function Navbar() {
  const [userdata,setuserdata]=useState([])
  const [tagdata,settagdata]=useState([])
  const [city,setc]=useState('Select Region')
  const [search,setsearch]=useState('')
  const [searchtag,setsearchtag]=useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  let history = useHistory();
  let c=''
  const getuser=async()=>{
		const config = {
			headers: {
			  Authorization: "token " + localStorage.getItem("token"),
			},
		  };
		  console.log(config);
		  const res=await fetch('https://api.seventhsq.com/user_profile/get_profile/',config);
			const data= await res.json();
			
			setuserdata(data.user);

      if(data.user!=undefined){
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('phone',data.user.phone)
      }
      
      
			console.log(data);
      
      
	}
  const gettagdata=async()=>{
	
		
		  const res=await fetch('https://api.seventhsq.com/payu/get_item_all/');
			const data= await res.json();
			settagdata(data)
			console.log(data)
	}
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
      
  const handlesearch=(e)=>{
		let name=e.target.name
		let value=e.target.value
		if(name=='search'){
			setsearch(value)
	
		}
		
	 }
  
  const logout=(event) =>{
    event.preventDefault();
      const token=localStorage.getItem('token')
   console.log(token)
   
    window.localStorage.removeItem("token");
    history.push({
      pathname: `/`,
      
  });
  }

  const handlecity=(event)=>{
    const mycity=event.target.value
    
   
      if (mycity.toString()=='Select Region'){
        setc('Select Region')
        window.localStorage.removeItem('city');
        console.log('removed city')
        window.location.reload()
      }
    
    
    else{
      localStorage.setItem('city', mycity);
      console.log(mycity)
      window.location.reload()
    }
    
   }

   const getcity=()=>{
     let c=localStorage.getItem('city')
     setc(c)
     console.log(city)
   }

  //  const Gosearch=(event)=>{
  //    event.preventDefault()
  //   const history = useHistory();
  //   history.push(`search-result/j`);
    
  //  }


  useEffect(()=>{
		getuser();
    getcity()
	  gettagdata()
	  },[])

    const onChange = event => {
      const value = event.target.value;
      setsearch(value);
  
      const filteredSuggestions = tagdata.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
  
      setFilteredSuggestions(filteredSuggestions);
      setDisplaySuggestions(true);
    };
  
    const onSelectSuggestion = index => {
      setSelectedSuggestion(index);
      setsearch(filteredSuggestions[index]);
      setFilteredSuggestions([]);
      setDisplaySuggestions(false);
    };
  
    if(userdata){
      return(
        <div>
        <div>
      <header>

        <div class="upper-pannel">
          <div className="upper-pannel_left">
            <span>
              <i class="fas fa-question"> </i>&nbsp;&nbsp;{" "}
              {/* <Link to="/track-order">Help</Link> */}
              <Link to="/contact">
                Help
              </Link>
            </span>
          </div>
          <div className="upper-pannel_right">
            <span>
              <i class="fas fa-book-open"> </i>&nbsp;&nbsp;{" "}
              {/* <Link to="/track-order">TRequest for Quote</Link> */}
              <Link to="/requestQuotation">
                Request for Quote
              </Link>
            </span>

            <span>
              <i class="fas fa-truck-moving"> </i>&nbsp;&nbsp;{" "}
              {/* <Link to="/track-order">Track your Order</Link> */}
              <Link to="/track-order">
                Track your Order
              </Link>
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
                    placeholder='Search Your Product'
                    aria-label="Search Your Product"
                    aria-describedby="button-addon2"
                    name='search'
                    value={search}
                    onChange={onChange}
                    
                    
                    
                  />
                <AiOutlineSearch />
                <SuggestionsList
                inputValue={search}
                selectedSuggestion={selectedSuggestion}
                onSelectSuggestion={onSelectSuggestion}
                displaySuggestions={displaySuggestions}
                suggestions={filteredSuggestions}
                />
                  
                  </form>
                  
                 
                 
                </li>
               
                
                <li class="log-sign">
                  <a to="/">
                    <FaMapMarkerAlt />
                    
                    <select className="form-select" onChange={handlecity} >
                      {
                       
                        city? <option id={city.toString()} value={city.toString}>{city}</option>:
                        <option selected disabled hidden>
                        Select  Region
                      </option>
                        
                      }
                     <option id="Select Region" value='Select Region'>Select Region</option>
                      <option id="Andhra Pradesh" value='Andhra Pradesh'>Andhra Pradesh</option>
                      <option id="Arunachal Pradesh" value='Arunachal Pradesh'>Arunachal Pradesh</option>
                      <option id="Assam" value='Assam'>Assam</option>       
                      <option id="Bihar" value='Bihar'>Bihar</option>
                      <option id="Chhattisgarh"  value='Chhattisgarh'>Chhattisgarh</option>
                      <option id="Goa" value='Goa'>Goa</option>
                      <option id="Gujarat" value='Gujarat'>Gujarat</option>
                      <option id="Haryana" value='Haryana'>Haryana</option>
                      <option id="Himachal Pradesh" value='Himachal Pradesh'>Himachal Pradesh</option>
                      <option id="Jharkhand" value='Jharkhand'>Jharkhand</option>
                      <option id="Karnataka" value='Karnataka'>Karnataka</option>
                      <option id="Kerala" value='Kerala'>Kerala</option>
                      <option id="Madhya Pradesh" value='Madhya Pradesh'>Madhya Pradesh</option>
                      <option id="Maharashtra" value='Maharashtra'>Maharashtra</option>
                      <option id="Manipur"  value='Manipur'>Manipur</option>
                      <option id="Meghalaya" value='Meghalaya'>Meghalaya</option>
                      <option id="Mizoram"  value='Mizoram'>Mizoram</option>
                      <option id="Nagaland" value='Nagaland'>Nagaland</option>
                      <option id="Odisha"  value='Odisha'>Odisha</option>
                      <option id="Punjab" value='Punjab'>Punjab</option>
                      <option id="Rajasthan" value='Rajasthan'>Rajasthan</option>
                      <option id="Sikkim"  value='Sikkim'>Sikkim</option>
                      <option id="Tamil Nadu"  value='Tamil Nadu'>Tamil Nadu</option>
                      <option id="Telangana" value='Telangana'>Telangana</option>
                      <option id="Tripura"  value='Tripura' >Tripura</option>
                      <option id="Uttar Pradesh"  value='Uttar Pradesh'>Uttar Pradesh</option>
                      <option id="Uttarakhand"  value='Uttarakhand'>Uttarakhand</option>
                      <option id="West Bengal" value='West Bengal'>West Bengal</option>
                      <option id="Chandigarh" value='Chandigarh'>Chandigarh</option>
                      <option id="Daman" value='Daman'>Daman</option>
                      <option id="Delhi"  value='Delhi'>Delhi</option>
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
                    <button >
                  <a>
                    <FaUserCircle />
                   
                    <span>{userdata.first_name}</span>
                  </a>
                  </button>
                          {
                  
                      
                      <div className="menu">
                       <button  className='my-2'><a href='/profile'>My Profile</a></button>
                        <button  className='my-2'><a href='/orders'>Orders</a></button>
                        <button  className='my-2'><a href='/payments'>Payments</a></button>
                        <button  className='my-2'><a href='/enquiry'>Enquiries</a></button>
                        <button  className='my-2'><a href='/wishlist'>Wishlist</a></button>
                        <button  className='my-2'><a href='/requests'>Customer Service</a></button>
                        <button  className='my-2'><a href='/review'>Reviews</a></button>
                       
                        <button onClick={logout} className='my-2'><a href='/login'>Logout</a></button>
                       
                      </div>
                    
                }
                  </div>
                 
                  
             
                </li>
              
              </ul>
            </div>
            
            <div>
              
            </div>
            <nav className="lowerNavbar">
              <ul class="menu-main">
                <li class="header_li">
                  <Link to="/product" style={{fontSize:"2.0rem !important"}}>Construction Materials</Link>
                  <div class="menu-sub building">
                    <div class="menu-col-1">
                      <h4 class="menu-category">Cement</h4>
                      <ul>
                        <li>
                        <Link href="/product"><p className="fw-bold text-decoration-underline">Ordinary Portland cement</p></Link>

                          <ul>
                            <li>
                              <Link to="/product">
                                <b>OPC 33</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>OPC 43</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>OPC 53</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/product">Portland Slag Cement (PSC)</Link>
                        </li>
                        <li>
                          <Link to="/product">Portland Composite Cement (PCC)</Link>
                        </li>
                        <li>
                          <Link to="/product">White Cement (PSC)</Link>
                        </li>
                      </ul>
                      <h4 class="menu-category">Bricks and Blocks</h4>
                      <ul>
                        <li>
                          <Link to="/product">Red Clay Brick</Link>
                        </li>

                        <li>
                          <Link to="/product">Fly Ash Brick</Link>
                        </li>
                       
                        <li>
                          <Link to="/product">AAC Blocks</Link>
                        </li>
                        <li>
                          <Link to="/product">Concrete Brick</Link>
                        </li>
                        <li>
                          <Link to="/product">Concrete Block</Link>
                        </li>
                        <li>
                          <Link to="/product">Porotherm Hollow Block</Link>
                        </li>
                        <li>
                          <Link to="/product">Fire Brick</Link>
                        </li>
                        <li>
                          <Link to="/product">Engineering Brick</Link>
                        </li>
                       
                        
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Glass</h4>
                      <ul>
                        <li>
                          <Link to="/product">Toughened</Link>
                        </li>
                        <li>
                          <Link to="/product">Float Glass</Link>
                        </li>
                        <li>
                          <Link to="/product">Extra Clean</Link>
                        </li>
                        <li>
                          <Link to="/product">Chromatic</Link>
                        </li>
                        <li>
                          <Link to="/product">Tinted</Link>
                        </li>
                        <li>
                          <Link to="/product">Reflective</Link>
                        </li>
                        <li>
                          <Link to="/product">Laminated</Link>
                        </li>
                        <li>
                          <Link to="/product">Lacquered</Link>
                        </li>
                        <li>
                          <Link to="/product">Bevelled</Link>
                        </li>
                        <li>
                          <Link to="/product">Frosted</Link>
                        </li>
                        <li>
                          <Link to="/product">Textured</Link>
                        </li>
                      </ul>

                      <h4 class="menu-category">Steel</h4>
                      <ul>
                        <li>
                          <Link to="/product">TMT / Reinforcing Bars</Link>
                        </li>
                        <li>
                          <Link to="/product">Structural Steel</Link>
                        </li>
                        <li>
                          <Link to="/product">Binding Wires & Stirrups</Link>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Aggregates</h4>
                      <ul>
                        <li>
                         
                          <ul>
                            <li>
                              <Link to="/product">
                                <b>M-Sand</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>P-Sand</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>River Sand</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                        
                          <ul>
                            <li>
                              <Link to="/product">
                                <b>Crushed Stone</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>Gravel</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Timber / Wood</h4>
                      <ul>
                        <li>
                          <Link to="/product">Plywood</Link>
                          <ul>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Moisture Resistant ( MR )</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Boiling Water Resistant ( BWR )</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Decorative Plywood</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Fire Retardant Plywood</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/product">Hardwood / Solid Wood</Link>
                        </li>
                        <li>
                          <Link to="/product">Softwood</Link>
                        </li>
                        <li>
                          <Link to="/product">
                            Medium Density Fiberboard ( MDF )
                          </Link>
                        </li>
                        <li>
                          <Link to="/product">HDHMR Board</Link>
                        </li>

                        <li>
                          <Link to="/product">Particleboard</Link>
                        </li>
                        <li>
                          <Link to="/product">Blockboard</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Plumbing and Electrical</Link>
                  <div class="menu-sub hvac">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Pipes & Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">UPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">CPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">HDPE</Link>
                        </li>
                        <li>
                          <Link to="/product">Copper</Link>
                        </li>
                        <li>
                          <Link to="/product">Stainless Steel</Link>
                        </li>
                        <li>
                          <Link to="/product">Plastic Pipes</Link>
                        </li>
                        <li>
                          <Link to="/product">Cast Iron</Link>
                        </li>
                        <li>
                          <Link to="/product">Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">Sanitary ware</Link>
                        </li>
                        <li>
                          <Link to="/product">Wash Basin</Link>
                        </li>
                        <li>
                          <Link to="/product">Sink</Link>
                        </li>
                        <li>
                          <Link to="/product">Bath Tub</Link>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <ul>
                        <li>
                          <Link to="/product">Water Closet ( WC )</Link>
                        </li>
                        <li>
                          <Link to="/product">Urinal</Link>
                        </li>
                        <li>
                          <Link to="/product">Flushing Cistern</Link>
                        </li>
                        <li>
                          <Link to="/product">Shower</Link>
                        </li>
                        <li>
                          <Link to="/product">Tap</Link>
                        </li>
                        <li>
                          <Link to="/product">Electricals</Link>
                        </li>

                        <li>
                          <Link to="/product">Switchgear</Link>
                        </li>
                        <li>
                          <Link to="/product">Conduit Pipe</Link>
                        </li>
                        <li>
                          <Link to="/product">Electrical Box</Link>
                        </li>
                        <li>
                          <Link to="/product">Wires & Cables</Link>
                        </li>
                        <li>
                          <Link to="/product">Switch & Sockets</Link>
                        </li>

                        <li>
                          <Link to="/product">Lighting</Link>
                        </li>
                        <li>
                          <Link to="/product">Fan</Link>
                        </li>

                        <li>
                          <Link to="/product">Switchboard</Link>
                        </li>
                        <li>
                          <Link to="/product">HVAC</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Hardware</Link>
                  <div class="menu-sub sanitaryware">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Handles & Knobs</Link>
                        </li>
                        <li>
                          <Link to="/product">Locks</Link>
                        </li>
                        <li>
                          <Link to="/product">Railing</Link>
                        </li>
                        <li>
                          <Link to="/product">Hinges</Link>
                        </li>
                        <li>
                          <Link to="/product">Door Closer</Link>
                        </li>
                        <li>
                          <Link to="/product">Curtain Hardware & Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">Smake Detector</Link>
                        </li>
                        <li>
                          <Link to="/product">Security Systems</Link>
                        </li>
                        <li>
                          <Link to="/product">Nails & Screws</Link>
                        </li>
                        <li>
                          <Link to="/product">Ladders & Scaffoldings</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Flooring & wall</Link>
                  <div class="menu-sub flooring">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Tiles</Link>
                        </li>
                        <li>
                          <Link to="/product">Ceramic</Link>
                        </li>
                        <li>
                          <Link to="/product">Porcelain</Link>
                        </li>
                        <li>
                          <Link to="/product">Vitrified</Link>
                        </li>
                        <li>
                          <Link to="/product">Glass</Link>
                        </li>
                        <li>
                          <Link to="/product">Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Mosaic</Link>
                        </li>
                        <li>
                          <Link to="/product">Quarry</Link>
                        </li>

                        <li>
                          <Link to="/product">Metal</Link>
                        </li>
                        <li>
                          <Link to="/product">Resin</Link>
                        </li>
                        <li>
                          <Link to="/product">Linoleum</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="/product">Linoleum</Link>
                        </li>
                        <li>
                          <Link to="/product">vinyl</Link>
                        </li>
                        <li>
                          <Link to="/product">Wooden</Link>
                        </li>
                        <li>
                          <Link to="/product">Rubber</Link>
                        </li>
                        <li>
                          <Link to="/product">Epoxy</Link>
                        </li>
                        <li>
                          <Link to="/product">Leather</Link>
                        </li>
                        <li>
                          <Link to="/product">Terrazzo</Link>
                        </li>
                        <li>
                          <Link to="/product">Red Oxide</Link>
                        </li>
                        <li>
                          <Link to="/product">Bamboo</Link>
                        </li>
                        <li>
                          <Link to="/product">Carpet</Link>
                        </li>
                        <li>
                          <Link to="/product">Artificial Grass</Link>
                        </li>

                        <li>
                          <Link to="/product">Wallpaper</Link>
                        </li>
                        <li>
                          <Link to="/product">Natural Stone</Link>
                        </li>
                        <li>
                          <Link to="/product">Flooring Accessories</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li class="header_li">
                  <Link to="/">Roofing</Link>
                  <div class="menu-sub construction-chemicals">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                        <Link href="/product"><p className="fw-bold text-decoration-underline">Roofing Sheets</p></Link>
                         
                        </li>
                        <li>
                          <Link to="/product">Metal Sheets</Link>
                        </li>
                        <li>
                          <Link to="/product">Fibre Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Polycarbonate</Link>
                        </li>
                        <li>
                          <Link to="/product">Insulated</Link>
                        </li>
                        <li>
                        <Link href="/product"><p className="fw-bold text-decoration-underline">Roofing Accessories</p></Link>
                        
                        </li>
                        <li>
                          <Link to="/product">Clay Roof Tiles</Link>
                        </li>
                        <li>
                          <Link to="/product">Solar Roofing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Green Materials</Link>
                </li>
                <li class="header_li">
                  <Link to="/">Discover</Link>
                </li>
                <li class="header_li">
                  <Link to="/">More</Link>
                  <div class="menu-sub more">
                    <div class="menu-col-1">
                      <ul>
                        <li>
                          <Link to="/product">Construction Chemicals</Link>
                        </li>
                        <li>
                          <Link to="/product">Doors & Windows</Link>
                        </li>
                        <li>
                          <Link to="/product">Paints & Finishes</Link>
                        </li>
                        <li>
                          <Link to="/product">Modular</Link>
                        </li>
                        <li>
                          <Link to="/product">PPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">Home Automation</Link>
                        </li>
                        <li>
                          <Link to="/product">Ready Mix Concrete</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div class="hamburger-menu-container">
            <div class="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <nav class="mobileBottomNav fixed bottom-0 inset-x-0  flex justify-between text-sm text-white-900 uppercase font-mono">
       <Link to="/help">
        <a
          
          class="w-full block py-2 px-3 text-center  transition duration-300"
        >
          <i class="fas fa-question w-6 h-6  mx-auto"></i>
      
         <span> Help</span>
        </a>
        </Link>
<Link to="/track">
<a
          
          class="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          <i class="fas fa-truck-moving w-6 h-6  mx-auto"></i>
         
          <span> Track</span>
        </a></Link>
        
<Link to="cart"><a
          
          className="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          <i className="fas fa-shopping-cart w-6 h-6  mx-auto"></i>
          
          <span> Cart</span>
        </a></Link>
        
<Link to="/login"><a
          
          class="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          
            <i class="fas fa-user-alt w-6 h-6  mx-auto"></i>
          <span> Account</span>
        </a></Link>
        
      </nav>
    </div>
      </div>
      )
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
              <Link to="/contact">
                Help
              </Link>
            </span>
          </div>
          <div className="upper-pannel_right">
            <span>
              <i class="fas fa-book-open"> </i>&nbsp;&nbsp;{" "}
              {/* <Link to="/track-order">TRequest for Quote</Link> */}
              <Link to="/requestQuotation">
                Request for Quote
              </Link>
            </span>

            <span>
              <i class="fas fa-truck-moving"> </i>&nbsp;&nbsp;{" "}
              {/* <Link to="/track-order">Track your Order</Link> */}
              <Link to="/track-order">
                Track your Order
              </Link>
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
                  id="search_box"
                    type="text"
                    class="form-control"
                    placeholder='Search Your Product'
                    aria-label="Search Your Product"
                    aria-describedby="button-addon2"
                    fontSize="20px"
                    
                    name='search'
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
                  
                  <i class="fas fa-search fa-lg"></i>
                 
                </li>
                <li class="log-sign">
                  <a to="/">
                    <FaMapMarkerAlt />
                    <select className="form-select" onChange={handlecity} >
                      {
                        city? <option id={city.toString()} value={city.toString}>{city.toString}</option>:
                        <option selected disabled hidden>
                        Select  Region
                      </option>
                        
                      }
                      <option id="Select Region" value='Select Region'>Select Region</option>
                      <option id="Andhra Pradesh" value='Andhra Pradesh'>Andhra Pradesh</option>
                      <option id="Arunachal Pradesh" value='Arunachal Pradesh'>Arunachal Pradesh</option>
                      <option id="Assam" value='Assam'>Assam</option>
                      
                      <option id="Bihar" value='Bihar'>Bihar</option>
                      <option id="Chhattisgarh"  value='Chhattisgarh'>Chhattisgarh</option>
                      <option id="Goa" value='Goa'>Goa</option>
                      <option id="Gujarat" value='Gujarat'>Gujarat</option>
                      <option id="Haryana" value='Haryana'>Haryana</option>
                      <option id="Himachal Pradesh" value='Himachal Pradesh'>Himachal Pradesh</option>
                      <option id="Jharkhand" value='Jharkhand'>Jharkhand</option>
                      <option id="Karnataka" value='Karnataka'>Karnataka</option>
                      <option id="Kerala" value='Kerala'>Kerala</option>
                      <option id="Madhya Pradesh" value='Madhya Pradesh'>Madhya Pradesh</option>
                      <option id="Maharashtra" value='Maharashtra'>Maharashtra</option>
                      <option id="Manipur"  value='Manipur'>Manipur</option>
                      <option id="Meghalaya" value='Meghalaya'>Meghalaya</option>
                      <option id="Mizoram"  value='Mizoram'>Mizoram</option>
                      <option id="Nagaland" value='Nagaland'>Nagaland</option>
                      <option id="Odisha"  value='Odisha'>Odisha</option>
                      <option id="Punjab" value='Punjab'>Punjab</option>
                      <option id="Rajasthan" value='Rajasthan'>Rajasthan</option>
                      <option id="Sikkim"  value='Sikkim'>Sikkim</option>
                      <option id="Tamil Nadu"  value='Tamil Nadu'>Tamil Nadu</option>
                      <option id="Telangana" value='Telangana'>Telangana</option>
                      <option id="Tripura"  value='Tripura' >Tripura</option>
                      <option id="Uttar Pradesh"  value='Uttar Pradesh'>Uttar Pradesh</option>
                      <option id="Uttarakhand"  value='Uttarakhand'>Uttarakhand</option>
                      <option id="West Bengal" value='West Bengal'>West Bengal</option>
                      <option id="Chandigarh" value='Chandigarh'>Chandigarh</option>
                      <option id="Daman" value='Daman'>Daman</option>
                      <option id="Delhi"  value='Delhi'>Delhi</option>
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
              <ul class="menu-main">
                <li class="header_li">
                  <Link to="/product">Construction Materials</Link>
                  <div class="menu-sub building">
                    <div class="menu-col-1">
                      <h4 class="menu-category">Cement</h4>
                      <ul>
                        <li>
                          <Link href="/product"><p className="fw-bold text-decoration-underline">Ordinary Portland cement</p></Link>
                 
                          <ul>
                            <li>
                              <Link to="/product">
                                <b>OPC 33</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>OPC 43</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>OPC 53</b>
                              </Link>
                            </li>
                            <button  className='my-2'><a href='/success'>Success</a></button>
                            <button  className='my-2'><a href='/failed'>Failed</a></button>
                          </ul>
                        </li>
                        <li>
                          <Link to="/product">Portland Slag Cement (PSC)</Link>
                        </li>
                        <li>
                          <Link to="/product">Portland Composite Cement (PCC)</Link>
                        </li>
                        <li>
                          <Link to="/product">White Cement (PSC)</Link>
                        </li>
                      </ul>
                      <h4 class="menu-category">Bricks and Blocks</h4>
                      <ul>
                        <li>
                          <Link to="/product">Red Clay Brick</Link>
                        </li>

                        <li>
                          <Link to="/product">Fly Ash Brick</Link>
                        </li>
                        
                        <li>
                          <Link to="/product">AAC Blocks</Link>
                        </li>
                        <li>
                          <Link to="/product">Concrete Brick</Link>
                        </li>
                        <li>
                          <Link to="/product">Concrete Block</Link>
                        </li>
                        <li>
                          <Link to="/product">Porotherm Hollow Block</Link>
                        </li>
                        <li>
                          <Link to="/product">Fire Brick</Link>
                        </li>
                        <li>
                          <Link to="/product">Engineering Brick</Link>
                        </li>
                       
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Glass</h4>
                      <ul>
                        <li>
                          <Link to="/product">Toughened</Link>
                        </li>
                        <li>
                          <Link to="/product">Float Glass</Link>
                        </li>
                        <li>
                          <Link to="/product">Extra Clean</Link>
                        </li>
                        <li>
                          <Link to="/product">Chromatic</Link>
                        </li>
                        <li>
                          <Link to="/product">Tinted</Link>
                        </li>
                        <li>
                          <Link to="/product">Reflective</Link>
                        </li>
                        <li>
                          <Link to="/product">Laminated</Link>
                        </li>
                        <li>
                          <Link to="/product">Lacquered</Link>
                        </li>
                        <li>
                          <Link to="/product">Bevelled</Link>
                        </li>
                        <li>
                          <Link to="/product">Frosted</Link>
                        </li>
                        <li>
                          <Link to="/product">Textured</Link>
                        </li>
                      </ul>

                      <h4 class="menu-category">Steel</h4>
                      <ul>
                        <li>
                          <Link to="/product">TMT / Reinforcing Bars</Link>
                        </li>
                        <li>
                          <Link to="/product">Structural Steel</Link>
                        </li>
                        <li>
                          <Link to="/product">Binding Wires & Stirrups</Link>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Aggregates</h4>
                      <ul>
                        <li>
                          
                          <ul>
                            <li>
                              <Link to="/product">
                                <b>M-Sand</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>P-Sand</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>River Sand</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          
                          <ul>
                            <li>
                              <Link to="/product">
                                <b>Crushed Stone</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                <b>Gravel</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <h4 class="menu-category">Timber / Wood</h4>
                      <ul>
                        <li>
                          <Link to="/product">Plywood</Link>
                          <ul>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Moisture Resistant ( MR )</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Boiling Water Resistant ( BWR )</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Decorative Plywood</b>
                              </Link>
                            </li>
                            <li>
                              <Link to="/product">
                                {" "}
                                <b>Fire Retardant Plywood</b>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/product">Hardwood / Solid Wood</Link>
                        </li>
                        <li>
                          <Link to="/product">Softwood</Link>
                        </li>
                        <li>
                          <Link to="/product">
                            Medium Density Fiberboard ( MDF )
                          </Link>
                        </li>
                        <li>
                          <Link to="/product">HDHMR Board</Link>
                        </li>

                        <li>
                          <Link to="/product">Particleboard</Link>
                        </li>
                        <li>
                          <Link to="/product">Blockboard</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Plumbing and Electrical</Link>
                  <div class="menu-sub hvac">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Pipes & Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">UPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">CPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">HDPE</Link>
                        </li>
                        <li>
                          <Link to="/product">Copper</Link>
                        </li>
                        <li>
                          <Link to="/product">Stainless Steel</Link>
                        </li>
                        <li>
                          <Link to="/product">Plastic Pipes</Link>
                        </li>
                        <li>
                          <Link to="/product">Cast Iron</Link>
                        </li>
                        <li>
                          <Link to="/product">Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">Sanitary ware</Link>
                        </li>
                        <li>
                          <Link to="/product">Wash Basin</Link>
                        </li>
                        <li>
                          <Link to="/product">Sink</Link>
                        </li>
                        <li>
                          <Link to="/product">Bath Tub</Link>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-col-1">
                      <ul>
                        <li>
                          <Link to="/product">Water Closet ( WC )</Link>
                        </li>
                        <li>
                          <Link to="/product">Urinal</Link>
                        </li>
                        <li>
                          <Link to="/product">Flushing Cistern</Link>
                        </li>
                        <li>
                          <Link to="/product">Shower</Link>
                        </li>
                        <li>
                          <Link to="/product">Tap</Link>
                        </li>
                        <li>
                          <Link to="/product">Electricals</Link>
                        </li>

                        <li>
                          <Link to="/product">Switchgear</Link>
                        </li>
                        <li>
                          <Link to="/product">Conduit Pipe</Link>
                        </li>
                        <li>
                          <Link to="/product">Electrical Box</Link>
                        </li>
                        <li>
                          <Link to="/product">Wires & Cables</Link>
                        </li>
                        <li>
                          <Link to="/product">Switch & Sockets</Link>
                        </li>

                        <li>
                          <Link to="/product">Lighting</Link>
                        </li>
                        <li>
                          <Link to="/product">Fan</Link>
                        </li>

                        <li>
                          <Link to="/product">Switchboard</Link>
                        </li>
                        <li>
                          <Link to="/product">HVAC</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Hardware</Link>
                  <div class="menu-sub sanitaryware">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Handles & Knobs</Link>
                        </li>
                        <li>
                          <Link to="/product">Locks</Link>
                        </li>
                        <li>
                          <Link to="/product">Railing</Link>
                        </li>
                        <li>
                          <Link to="/product">Hinges</Link>
                        </li>
                        <li>
                          <Link to="/product">Door Closer</Link>
                        </li>
                        <li>
                          <Link to="/product">Curtain Hardware & Fittings</Link>
                        </li>
                        <li>
                          <Link to="/product">Smake Detector</Link>
                        </li>
                        <li>
                          <Link to="/product">Security Systems</Link>
                        </li>
                        <li>
                          <Link to="/product">Nails & Screws</Link>
                        </li>
                        <li>
                          <Link to="/product">Ladders & Scaffoldings</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Flooring & wall</Link>
                  <div class="menu-sub flooring">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                          <Link to="/product">Tiles</Link>
                        </li>
                        <li>
                          <Link to="/product">Ceramic</Link>
                        </li>
                        <li>
                          <Link to="/product">Porcelain</Link>
                        </li>
                        <li>
                          <Link to="/product">Vitrified</Link>
                        </li>
                        <li>
                          <Link to="/product">Glass</Link>
                        </li>
                        <li>
                          <Link to="/product">Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Mosaic</Link>
                        </li>
                        <li>
                          <Link to="/product">Quarry</Link>
                        </li>

                        <li>
                          <Link to="/product">Metal</Link>
                        </li>
                        <li>
                          <Link to="/product">Resin</Link>
                        </li>
                        <li>
                          <Link to="/product">Linoleum</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="/product">Linoleum</Link>
                        </li>
                        <li>
                          <Link to="/product">vinyl</Link>
                        </li>
                        <li>
                          <Link to="/product">Wooden</Link>
                        </li>
                        <li>
                          <Link to="/product">Rubber</Link>
                        </li>
                        <li>
                          <Link to="/product">Epoxy</Link>
                        </li>
                        <li>
                          <Link to="/product">Leather</Link>
                        </li>
                        <li>
                          <Link to="/product">Terrazzo</Link>
                        </li>
                        <li>
                          <Link to="/product">Red Oxide</Link>
                        </li>
                        <li>
                          <Link to="/product">Bamboo</Link>
                        </li>
                        <li>
                          <Link to="/product">Carpet</Link>
                        </li>
                        <li>
                          <Link to="/product">Artificial Grass</Link>
                        </li>

                        <li>
                          <Link to="/product">Wallpaper</Link>
                        </li>
                        <li>
                          <Link to="/product">Natural Stone</Link>
                        </li>
                        <li>
                          <Link to="/product">Flooring Accessories</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li class="header_li">
                  <Link to="/">Roofing</Link>
                  <div class="menu-sub construction-chemicals">
                    <div class="menu-col-1">
                      
                      <ul>
                        <li>
                        <Link href="/product"><p className="fw-bold text-decoration-underline">Roofing Sheets</p></Link>
                        </li>
                        <li>
                          <Link to="/product">Metal Sheets</Link>
                        </li>
                        <li>
                          <Link to="/product">Fibre Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Cement</Link>
                        </li>
                        <li>
                          <Link to="/product">Polycarbonate</Link>
                        </li>
                        <li>
                          <Link to="/product">Insulated</Link>
                        </li>
                        <li>
                        <Link href="/product"><p className="fw-bold text-decoration-underline">Roofing Accessories</p></Link>
                         
                        </li>
                        <li>
                          <Link to="/product">Clay Roof Tiles</Link>
                        </li>
                        <li>
                          <Link to="/product">Solar Roofing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="header_li">
                  <Link to="/">Green Materials</Link>
                </li>
                <li class="header_li">
                  <Link to="/">Discover</Link>
                </li>
                <li class="header_li">
                  <Link to="/">More</Link>
                  <div class="menu-sub more">
                    <div class="menu-col-1">
                      <ul>
                        <li>
                          <Link to="/product">Construction Chemicals</Link>
                        </li>
                        <li>
                          <Link to="/product">Doors & Windows</Link>
                        </li>
                        <li>
                          <Link to="/product">Paints & Finishes</Link>
                        </li>
                        <li>
                          <Link to="/product">Modular</Link>
                        </li>
                        <li>
                          <Link to="/product">PPVC</Link>
                        </li>
                        <li>
                          <Link to="/product">Home Automation</Link>
                        </li>
                        <li>
                          <Link to="/product">Ready Mix Concrete</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div class="hamburger-menu-container">
            <div class="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <nav class="mobileBottomNav fixed bottom-0 inset-x-0  flex justify-between text-sm text-white-900 uppercase font-mono">
       <Link to="/help">
        <a
          
          class="w-full block py-2 px-3 text-center  transition duration-300"
        >
          <i class="fas fa-question w-6 h-6  mx-auto"></i>
      
         <span> Help</span>
        </a>
        </Link>
<Link to="/track">
<a
          
          class="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          <i class="fas fa-truck-moving w-6 h-6  mx-auto"></i>
         
          <span> Track</span>
        </a></Link>
        
<Link to="cart"><a
          
          className="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          <i className="fas fa-shopping-cart w-6 h-6  mx-auto"></i>
          
          <span> Cart</span>
        </a></Link>
        
<Link to="/login"><a
          
          class="w-full block py-2 px-3 text-center hover:bg-black-200 hover:text-white-800"
        >
          
            <i class="fas fa-user-alt w-6 h-6  mx-auto"></i>
          <span> Account</span>
        </a></Link>
        
      </nav>
    </div>
      </div>
    )
  }

export default withRouter(Navbar);