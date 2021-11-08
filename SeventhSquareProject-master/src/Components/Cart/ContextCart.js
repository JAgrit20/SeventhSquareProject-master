import React from "react"; 
import Items from "./Items";
import { CartContext } from "../../App";
import { useState, useEffect,useCallback } from 'react';
import { useHistory } from "react-router-dom";
import {FaRegFolder} from "react-icons/fa"
import axios from "axios";
import "./cart.css"
import { BrowserRouter as Link } from "react-router-dom";

const ContextCart = () => {
 
  const [addressdata,setaddress]=useState([])
  const[cartdata,setdata]=useState([]);
  const[localcartdata,setlocaldata]=useState([]);
  const[total,settotal]=useState(0);
  const[gst,setgst]=useState(0);
  const[j,setj]=useState(0);
  let cartItems=[]
  let cartProduct={}
  let g=0
  const[usertoken,setusertoken]=useState();
   let history = useHistory();

    const Verify=async()=>{
      const token= await localStorage.getItem('token')
   console.log(token)
   if(token==null){
      history.push("/login");
    
   }

    }
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
         setaddress(res.data)
         
        },
        (err) => {
          console.log(err);
        }
      );
    }

   
    
    const getdata=async()=>{
      
      const config = {
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          'Content-Type': 'application/json',
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
      settotal(s)
      data.forEach(myFunction2)
      function myFunction2(item) {
        g += (item.price*item.gst)/100*item.quantity;
      }
      setgst(g)
      
    
  }
 
  const incrementcart=useCallback(async(title,oldprice,pcksize,price,item)=>{
    
    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "title": title,
          "oldprice": oldprice,
          "pcksize": pcksize,
          "estdelivery": '1' ,
          "price": price ,
          "quantity": 1,
          "item": item,
        
      })
    };
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
    
    const data= await res.json();
    console.log(data);
    setj(j+1)
    
    
  },[j])
  
  const decrementcart=useCallback(async(title,oldprice,pcksize,price,item)=>{
    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "title": title,
        "oldprice": oldprice,
        "pcksize": pcksize,
        "estdelivery": '1' ,
        "price": price ,
        "quantity": -1,
        "item": item,
      })
    };
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
    const data= await res.json();
    setj(j+1)
    console.log(data);
    
    
},[j])

const removecart=useCallback(async(title,oldprice,pcksize,price,item)=>{
    
  const config = {
    method:'POST',
    headers: {
      Authorization: "token " + localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "title": title,
        "oldprice": oldprice,
        "pcksize": pcksize,
        "estdelivery": '1' ,
        "price": price ,
        "quantity": -10000,
        "item": item,
      
    })
  };
  console.log(config);
  const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
  
  const data= await res.json();
  setj(j+1)
  console.log(data);
  
  
},[j])

const getlocaldata=()=>{
  var storedcart = JSON.parse(localStorage.getItem("localcart"));
  setlocaldata(storedcart)
  console.log(storedcart)
  if(storedcart!=null){
    let s=0
  
  storedcart.forEach(myFunction)
  function myFunction(item) {
    s += item.price*item.quantity;
  }
  settotal(s)
  
  storedcart.forEach(myFunction2)
  function myFunction2(item) {
    g += (item.price*item.gst)/100*item.quantity;
  }
  setgst(g)

  }
 
}

const getlocalpostcart=async()=>{
  var storedcart = JSON.parse(localStorage.getItem("localcart"));
  
  // console.log(storedcart)
  // console.log(storedcart[0].title)
  if(storedcart!=null){

    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": storedcart[0].title,
        "oldprice": storedcart[0].oldprice,
        "pcksize": '3',
        "estdelivery": '1' ,
        "price": storedcart[0].price,
        "quantity": 1,
        "item": storedcart[0].item,
        "gst":storedcart[0].gst
       
      }) 
      
    };
    console.log(config);

    const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
   
    const data= await res.json();
    localStorage.removeItem('localcart')
    console.log(data);
    

  }

}

const invalid=()=>{
  window.alert('Login First!')
}

useEffect(()=>{
 
    
},[])

useEffect(()=>{
  const token= localStorage.getItem('token')
  console.log(token)
  if(token!=undefined ){
    console.log('seconf')
  getlocalpostcart()
  getdata();

}
},[incrementcart,decrementcart,removecart])

useEffect(()=>{
  const token= localStorage.getItem('token')
  setusertoken(token)
  if(token==undefined){
    getlocaldata()
  }
  getaddressdata();
},[])


  return (
    <>
      
      {cartdata!=null || localcartdata!=null ? 
      <div>
        <div class="container-fluid">
          <h2 class="text-center text-dark py-4 h1">My Cart</h2>
        
          <div class="row">
            <div class="col-md-10 col-11 mx-auto">
              <div class="row mt-5 gx-3">
                <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-2 ">
                  {/* your items goes here */}
                  {

                      cartdata.length>0?
                      cartdata.map((curItem,index) => {
                        return <Items key={curItem.id} {...curItem} incrementcart={incrementcart}
                        decrementcart={decrementcart} removecart={removecart}
                         />;
                      }):localcartdata!=null?
                      localcartdata.map((curItem,index) => {
                        return <Items key={curItem.id} {...curItem} incrementcart={incrementcart}
                        decrementcart={decrementcart} removecart={removecart}
                         />;
                      }):null

                  }
                    
                </div>

                <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5 cart-right_section">
                  <div class="right_side p-3 shadow bg-white">
                    <h3 class=" h3 product_name mb-3 text-center">SUMMARY</h3>
                    <div class="price_indiv d-flex justify-content-between">
                      <p style={{"fontSize":"15px"}} className='ml-3'>Product amount</p>
                     
                     
                      <p>
                       <span id="product_total_amt">₹ {total + gst}</span>
                      </p>
                    </div>
                    <div className='col'>
                      {
                        cartdata.map((curr,index)=>{
                             return(
                               <li key={index} >
                                 
                                 {curr.title} x {curr.quantity}  
                               </li>
                             )
                        })
                      }
                      </div>
                    {/* <div class="price_indiv d-flex justify-content-between">
                      <p>GST</p>
                      <p>
                       <span id="gst_charge">₹ {gst}</span>
                      </p>
                    </div>
                    */}
                  </div>
                  <div
                    class="
                  container-fluid
                    total-amt
                    d-flex
                    
                    font-weight-bold
                  "
                  >
                    <p style={{"fontSize":"14px"}} className='ml-3'>Cart Total </p>
                    <p id="total_cart_amt" style={{"fontSize":"14px"}} >
                    ₹ {total+gst}
                    </p>
                  </div>
                 
                    {
                      usertoken? <a href=  {'/checkout'} ><button className="btncheckoutbutton text-uppercase btn btn-dark mt-5"> Proceed to Checkout</button></a>
                      : <a href='#' ><button className="btncheckoutbutton text-uppercase btn btn-dark mt-5" onClick={()=>invalid()}> Proceed to Checkout</button></a>
                    }
                   
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <>
        <h1 class="text-center text-dark mt -5 pt-5 py-4 h1">Your Cart is Empty</h1>
        <h5 class="text-center text-dark mt-4">Please add some products</h5>
        <FaRegFolder size={155} className='mx-auto mt-5'/>
        </>
         }


    </>
  );
};

export default ContextCart;


