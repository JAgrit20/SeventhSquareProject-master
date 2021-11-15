import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {Container, Row ,Form , Col , Formlabel,FormControl , Button } from 'react-bootstrap'
function Checkout() {
  const [addressdata,setaddress]=useState([])
  const[cartdata,setdata]=useState([]);
  const[userdata,setuserdata]=useState([]);
  const[total,settotal]=useState(0);
  const [baseurl]=useState('https://test.cashfree.com/api/v1/order/create');

  const [title]=useState('Reactjs checkout')
  
  const [orderId,settxnid]=useState(Math.round(Math.random(10000,50000)*1000000))
  
  const [orderAmount, setAmount]=useState('')
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [customerEmail,setEmail]=useState('')
  const [customerPhone,setPhone]=useState('')
  const [productinfo, setproductinfo]=useState('ok')
  
  
  const [plotno,setplotno]=useState('')
  const [street,setstreet]=useState('')
  const [city,setcity]=useState('')
  const [state,setstate]=useState('')
  const [zipcode,setzip]=useState('')
  const [plotno2,setplotno2]=useState('')
  const [street2,setstreet2]=useState('')
  const [city2,setcity2]=useState('')
  const [state2,setstate2]=useState('')
  const [zipcode2,setzip2]=useState('')
  const [same,setsame]=useState(true)
  const [hash,]=useState('hdhcdgdew6tg')

  let cartItems=[]
  

  // const postcashfree=async()=>{
    
  //   var bodyFormData = new FormData();
  //   bodyFormData.append('orderId', orderId)
  //   bodyFormData.append('orderAmount', orderAmount)
  //   bodyFormData.append('customerPhone',customerPhone)
  //   bodyFormData.append('customerEmail',customerEmail)
  //   bodyFormData.append( 'customerName',firstname)



  //   axios({
  //     method: "post",
  //     url: "https://api.seventhsq.com/payu/create_cashfree/",
  //     data: bodyFormData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response);
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response);
  //     });
    
  //   // const config = {
  //   //   method:'POST',
      
     
  //   //   headers: {
        
  //   //     'Content-Type': 'application/form-data'
  //   //   },
  //   //   body:JSON.stringify({
        
  //   //     'orderId': orderId,
  //   //     'orderAmount': orderAmount,
  //   //     'customerPhone':customerPhone,
  //   //     'customerEmail':customerEmail,
  //   //     'customerName':firstname
       
  //   // })
  
  //   // };
   
  //   // const res=await fetch('https://api.seventhsq.com/payu/create_cashfree/',config);
    
  //   // console.log(res)
    
  
  // }
/////////////////////////////////////////to get hash value
//   const gethash=async()=>{
    
//     console.log(`amount${amount}`)
//     const config = {
//       method:'POST',
//       headers: {
//         'Content-Type': 'application/json',
        
//       },
//       body:JSON.stringify({
//         "amount": amount,
//         "productinfo": 'ok',
//         "firstname": userdata.first_name,
//         "email": userdata.email ,
        
//       })
//     };
    
//     const res=await fetch('https://api.seventhsq.com/payu/hash/',config);
//     const data= await res.json();
//     console.log(data);
//     sethash(data.hash);
//     settxnid(data.txnid)
//     console.log(data.hash)
//     console.log(data.txnid)
    
    
// }

////////////////////////////////////for posting order
  const postorder=async()=>{
    localStorage.setItem('orderID',orderId)
    cartdata.forEach(myfn)

    function myfn(item) {
      console.log("item object ")
      console.log(item)
    cartItems.push({
      price:item.price,
     product:item.item,
     quantity:item.quantity,
     gst:item.gst,
     seller:item.sellerId
    })
  } 
    console.log(cartItems)

    if(same==true){
      const config = {
        method:'POST',
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "address": plotno,
          "zipcode": zipcode,
          "place": street,
          "items": cartItems,
          "paid_amount":total,
          "order_success":false,
          "desc":'ok',
          "txnid":orderId,
          


  
      })
  
      };
      console.log(config.body)
      const res=await fetch('https://api.seventhsq.com/orders/orders/',config);
      window.alert("order placed");
      const data= await res.json();
      console.log(data);
      
    }
    if(same==false){
      const config = {
        method:'POST',
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "address": plotno2,
          "zipcode": zipcode2,
          "place": street2,
          "items": cartItems,
          "paid_amount":total,
          "order_success":false,
          "desc":'ok',
          "txnid":orderId,
          
  
      })
  
      };
      console.log(config.body)
      const res=await fetch('https://api.seventhsq.com/orders/orders/',config);
      window.alert("order placed");
      const data= await res.json();
      console.log(data);
     
    }
    
   
   
    
}
/////////////////////////////////////////for getting user address data
  const getaddressdata=()=>{
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };

    axios
    .get(
      "https://api.seventhsq.com/orders/addresses",
      config
    )
    .then(
      (res) => {
       setaddress(res.data[0])
       setplotno(res.data[0].apartment_address)
       setstreet(res.data[0].street_address)
       
       setcity(res.data[0].city)
       setstate(res.data[0].state)
       setzip(res.data[0].zip)
       console.log(res.data[0])
      },
      (err) => {
        console.log(err);
      }
    );
  }
///////////////////////////////////for getting user data
  const getuserdata=async()=>{
      
    const config = {
      headers: {
          Authorization : 'token ' + localStorage.getItem('token')
      }
  }
  const res=await fetch('https://api.seventhsq.com/user_profile/get_profile/',config);
  const data= await res.json();
  
  setuserdata(data.user);
  console.log(data.user)
  setfirstname(data.user.first_name)
  setEmail(data.user.email)
  setPhone(data.user.phone)
  setlastname(data.user.last_name)
  

  
    
}
////////////////////////////////////for getting cart details
const getdata=async()=>{
      
  const config = {
    headers: {
      Authorization: "token " + localStorage.getItem("token"),
    },
  };
  console.log(config);
  const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
  const data= await res.json();
  console.log(data);
  setdata(data);
  let s=0
  data.forEach(myFunction)
  function myFunction(item) {
    s += item.price*item.quantity;
  }
  let g=0

  data.forEach(myFunction2)
  function myFunction2(item) {
    g += (item.price*item.gst)/100*item.quantity;
  }
  let j=parseFloat(s)+parseFloat(g)
  settotal(j)
  setAmount(j)
  

}

const handlesame=()=>{
  setsame(!same)
}
useEffect(()=>{
  getdata();
  getuserdata()
  getaddressdata()
 
},[])
// useEffect(()=>{
//   gethash();
// },[amount,userdata.first_name,userdata.email])





        return (
            <div>
              
                <div class="container">
      <div class="py-5 text-center">
        <h2>CHECKOUT</h2>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Cart Summary</span>
            <span class="badge badge-secondary badge-pill">{cartdata.length}</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Products info</h6>
                <div className='d-flex flex-column bd-highlight mb-3'>

                {
                cartdata.map((curr,index)=>{
                       return(
                        <div class="d-flex flex-row bd-highlight mb-3">
                        <small class="text-muted mx-1" key={curr.id}>{curr.title} x</small>
                        
                        {/* <small class="text-muted mx-1" key={index}>{curr.price}</small> */}
                        <small class="text-muted  mx-1" key={index}>{curr.quantity}</small>
                        </div>
                        
                       )
                })
              }
                </div>
               
              </div>
             

             
            </li>
            {/* <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li> */}
            {/* <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li> */}
            <li class="list-group-item d-flex justify-content-between">
               Total
              <strong>₹{total}</strong>
            </li>
          </ul>

          {/* <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form> */}
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing Address</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" value={firstname} required onChange={(e)=>setfirstname(e.target.value)}  />
                <div class="invalid-feedback">
                  Valid first name is.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" value={lastname}  required onChange={(e)=>setlastname(e.target.value)} />
                <div class="invalid-feedback">
                  Valid last name is.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="phonenumber">Phone number</label>
              <div class="input-group">
                
                <input type="text" class="form-control" id="phonenumber" value={customerPhone} required onChange={(e)=>setPhone(e.target.value)} />
                <div class="invalid-feedback" >
                  Your Phone number is.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control" id="email" value={customerEmail} required onChange={(e)=>setEmail(e.target.value)}/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            {
              addressdata.length!=0?
              <>
              <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Plot No.</label>
                <input type="text" required class="form-control"   value={plotno} required onChange={(e)=>setplotno(e.target.value)}/>
                <div class="invalid-feedback">
                  Valid Plot No. is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Street</label>
                <input type="text" required class="form-control"  value={street} required onChange={(e)=>setstreet(e.target.value)} />
                <div class="invalid-feedback">
                  Valid Street is required.
                </div>
              </div>
            </div>

                  <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="firstName">City</label>
                    <input type="text" required class="form-control"  value={city}  required onChange={(e)=>setcity(e.target.value)}/>
                    <div class="invalid-feedback">
                      Valid City is required.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="lastName">State</label>
                    <input type="text" required class="form-control"  value={state} required onChange={(e)=>setstate(e.target.value)}/>
                    <div class="invalid-feedback">
                      Valid State is required.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="lastName">Zip Code</label>
                    <input type="text" required class="form-control"  value={zipcode} required onChange={(e)=>setzip(e.target.value)} />
                    <div class="invalid-feedback">
                      Valid Zip Code is required.
                    </div>
                  </div>
                  </div>
                  </>
            :  <button class="btn btn-primary btn-md btn-block "><a href='/profile'>Add Billing Address</a></button>
            }
           
           
      
            <hr class="mb-4" />
                       
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address" checked={same} onChange={()=>handlesame()}/>
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            {/* <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info" />
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div> */}
           
            <hr class="mb-4" />
            {
              same==false?<><h4 class="mb-3">Shipping Address</h4>
              <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Plot No.</label>
                <input type="text" required class="form-control"   value={plotno2} onChange={(e)=>setplotno2(e.target.value)}/>
                <div class="invalid-feedback">
                  Valid Plot No. is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Street</label>
                <input type="text" required class="form-control" value={street2} onChange={(e)=>setstreet2(e.target.value)} />
                <div class="invalid-feedback">
                  Valid Street is required.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="firstName">City</label>
                <input type="text" required class="form-control"  value={city2}  onChange={(e)=>setcity2(e.target.value)}/>
                <div class="invalid-feedback">
                  Valid City is required.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="lastName">State</label>
                <input type="text" required class="form-control"   value={state2} onChange={(e)=>setstate2(e.target.value)}/>
                <div class="invalid-feedback">
                  Valid State is required.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="lastName">Zip Code</label>
                <input type="text" required class="form-control"  value={zipcode2} onChange={(e)=>setzip2(e.target.value)} />
                <div class="invalid-feedback">
                  Valid Zip Code is required.
                </div>
              </div>
            </div>
              </>
              :null
            }

            <div className='row d-flex justify-content-evenly'>
              <div className='col-md-4 pt-5'>
              <button class="btn btn-primary btn-md btn-block "><a href='/cart'>Go Back</a></button>
              </div>
              <div className='col-md-4'>
              <div>
            <Form action={'https://api.seventhsq.com/payu/create_cashfree/'} method="post" >
               
               
                <Row className='pt-sm-2'>
                      
                      <Col sm>
                          <Form.Control type="hidden" name='orderId' value={orderId} >
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      
                      <Col sm>
                          <Form.Control type="hidden" name='orderAmount' value={orderAmount} >
                             
                          </Form.Control>
                      </Col>
                </Row>
               
                <Row className='pt-sm-2'>
                     
                      <Col sm>
                          <Form.Control type="hidden" name='customerEmail' value={customerEmail} >
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                     
                      <Col sm>
                          <Form.Control type="hidden" name='customerPhone' value={customerPhone} >
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                     
                      <Col sm>
                          <Form.Control type="hidden" name='customerName' value={firstname} >
                              
                          </Form.Control>
                      </Col>
                </Row>
              
               
               
               
                {/* <Row className='pt-sm-2'>
                      <Col sm>
                          <Button type='submit'>
                                 Pay
                          </Button>
                      </Col>
                      
                </Row> */}
                 <Button class="btn btn-primary btn-lg btn-block "  type='submit' onClick={postorder}>Proceed to Payment</Button>
                 
            </Form>
           
        </div>
             
        
              
              </div>
              
            </div>
            
          </form>
        </div>
      </div>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2017-2018 Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="/">Privacy</a></li>
          <li class="list-inline-item"><a href="/">Terms</a></li>
          <li class="list-inline-item"><a href="/">Support</a></li>
        </ul>
      </footer>
    </div>
            </div>
        )
    }
export default withRouter(Checkout);
