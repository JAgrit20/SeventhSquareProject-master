import React from 'react'
import "./Request.css"
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function RequestQuotation() {


    const [product,setproduct]=useState('')
    const [category,setcategory]=useState('')
    const [brand,setbrand]=useState('')
    const [quantity,setquantity]=useState([])
    const [location,setlocation]=useState('')
    const [time,settime]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [token,setusertoken]=useState()
    const [description,setdescription]=useState('')
    const [userdata,setuserdata]=useState([])

    const handlechange=(e)=>{
		let name=e.target.name
		let value=e.target.value
		if(name=='location'){
			setlocation(value)
		}
		if(name=='time'){
		   settime(value)
	   }
        if(name=='description'){
        setdescription(value)
        }
        if(name=='product'){
            setproduct(value)
            }
        if(name=='quantity'){
            setquantity(value)
            }
        if(name=='category'){
            setcategory(value)
            }
        if(name=='brand'){
            setbrand(value)
            }
	  
	 }


   const handlerfq=async(e)=>{
    e.preventDefault();
    const config = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
     
      body:JSON.stringify({
        "product_name": product,
        "category": category,
        "brand_preference": brand,
        "desc": description,
        "quantity_required": quantity,
        "delivery_location": location,
        "delivery_timeline": time,
        "is_replyed":false,
        "email": userdata.email,
        "phone": userdata.phone,
        "seller": '1'
        
      })
    };
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/enquiry/request/main/',config);
    window.alert('Your enquiry was sent successfully')
    const data= await res.json();
    console.log(data);
    
    
}

const getlocalpostreq=async()=>{
  var storedreq = await JSON.parse(localStorage.getItem("localreq"));
  console.log(storedreq)

 
    
    
  // console.log(storedcart)
  // console.log(storedcart[0].title)
  if(storedreq!=null){
   
       var email=localStorage.getItem('email')
       var phone =localStorage.getItem('phone')
    const config = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({
        "product_name": storedreq[0].product_name,
        "category": storedreq[0].category,
        "brand_preference": storedreq[0].brand_preference,
        "desc": storedreq[0].desc,
        "quantity_required": storedreq[0].quantity_required,
        "delivery_location": storedreq[0].delivery_location,
        "delivery_timeline": storedreq[0].delivery_timeline,
        "is_replyed":false,
        "email": email.toString(),
        "phone": phone.toString(),
        "seller": '1'
        
      })
      
    };
    console.log(config);

    const res=await fetch('https://api.seventhsq.com/enquiry/request/main/',config);
   
    const data= await res.json();
    localStorage.removeItem('localreq')
    window.alert('Your request was Sent')
    console.log(data);
    

  }

}

const loginfirst=(e)=>{
  e.preventDefault();
  window.alert('Login First')

  const body={
    "product_name": product,
    "category": category,
    "brand_preference": brand,
    "desc": description,
    "quantity_required": quantity,
    "delivery_location": location,
    "delivery_timeline": time,
    "is_replyed":false,
    "seller": '1'

}
var localreq=[]


localreq.push(body)
console.log(localreq)
localStorage.setItem('localreq',JSON.stringify(localreq))
var storedreq = JSON.parse(localStorage.getItem("localreq"));
console.log(storedreq)
}

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
    console.log(userdata);
}
       
useEffect(()=>{
  getuser();
  const token= localStorage.getItem('token')
  setusertoken(token)
  getlocalpostreq()
  },[])

 
  
    return (<>
    {/* Request A Quote | Seventh Square */}
    <Helmet>
    <title>Request A Quote | Seventh Square</title>
    <meta name="description" content="Request A Quotation on Seventh Square " /> 
  </Helmet>
        <div className="d-flex flex-column justify-content-center align-items-center requestForQuote " >
        <h2>Request For Quotation</h2> 
        </div>
        <hr/>
        <div className="d-flex flex-column justify-content-center align-items-center requestForQuote ">
        <form className="card" >
        <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Product Required</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputEmail2" placeholder="Mention Product Type with Basic Specifications" name='product' onChange={handlechange} />
        </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
        <select className="form-select" onChange={handlechange} name='category' id="cat">
                      
                     <option id="Select Category" value='Select Categoty'>Select Category</option>
                      <option id="Andhra Pradesh" value='Cement'>Cement</option>
                      <option id="Arunachal Pradesh" value='Bricks'>Bricks</option>
                      <option id="Assam" value='Pipes & Fittings'>Pipes & Fittings</option>
                      
                      <option id="Bihar" value='Sanitaryware'>Sanitaryware</option>
                      <option id="Steel"  value='Steel'>Steel</option>
                      <option id="Electricals" value='Electricals'>Electricals</option>
                      <option id="Aggregates" value='Aggregates'>Aggregates</option>
                      <option id="Flooring & wall" value='Flooring & wall'>Flooring & wall</option>
                      <option id="wood" value='wood'>wood</option>
                      <option id="Chemicals" value='Chemicals'>Chemicals</option>
                      <option id="Glass" value='Glass'>Glass</option>
                      <option id="Paints & Finishes" value='Paints & Finishes'>Paints & Finishes</option>
                      <option id="Hardware" value='Hardware'>Hardware</option>
                      <option id="Modular" value='Modular'>Modular</option>
                      <option id="Roofing"  value='Roofing'>Roofing</option>
                      <option id="Doors & Windows" value='Doors & Windows'>Doors & Windows</option>
                      
                    </select>
        </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Brand Preference</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPassword2" placeholder="Optional" name='brand' onChange={handlechange} />
        </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label" >Description</label>
        <div class="col-sm-10">
        <textarea  id= "des" class="form-control" placeholder="Include Your Specifications, customisations, dimensions, etc." id="exampleFormControlTextarea1" rows="2" name='description' onChange={handlechange} ></textarea>
        </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Quantity Required</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPassword2" placeholder="Please Specify measurement unit too (For Ex. 150 Bags or 25 Tons )" name='quantity' onChange={handlechange} />
        </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Delivery Location</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPassword2" placeholder="City / District , if multiple please mention" name='location' onChange={handlechange} />
        </div> 
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Delivery Timeline</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPassword2" placeholder="Required Delivery Date / Range" name='time' onChange={handlechange} />
        </div>
        </div>
        <div class="form-group row">
        <div class="col-md-12">
        <button onClick={token?handlerfq:loginfirst} class="btn btn-dark">Request</button>
        </div>
        </div>
        </form>
            </div>
    </>
            )
}

export default RequestQuotation
