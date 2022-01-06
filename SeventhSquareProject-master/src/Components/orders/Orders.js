import React from 'react'

import Ordercard from './ordercard';
import axios from "axios";
import '../orders/orders.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

function Orders() {
  const[orderdata,setdata]=useState([]);
  const getdata=async()=>{
    
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
   
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/orders/orders/all/',config);
    const data= await res.json();
    console.log(data);
    setdata(data);
    
  
}
useEffect(()=>{
  getdata();
},[])
   
    return (
      <div style={{overflowX:"auto"}}>
        {/* Customer Support Seventh Square */}
        {/* <Helmet>
    <title>Customer Support Seventh Square </title>
    <meta name="description" content="Login Seventh Square" />
  </Helmet> */}

    <div style={{justifyContent: "center", alignItems:"center",display: "flex"}} className=" requestForQuote">
      <div className="requests py-3">
        <h1 className="mx-5 my-5 text-center" style={{fontFamily:"crimson text",fontSize:"35px"}}>MY ORDERS</h1>
        <span
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    marginLeft: "10px",
                    marginRight: "4px",
                    fontFamily: "open sans",
                    clear: "both",
                    display: "inline-block",
                    overflow: "hidden",
                    paddingRight: "45px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sort By
                </span>

                <select
                  id="htl"
                  class="form-select"
                  // onChange={handleorder}
                  style={{ fontSize: "15px !important" }}
                >
                  {/* <select class="form-select" > */}
                  <option
                    value="date"
                    name="date"
                    style={{ fontSize: "15px !important" }}
                  >
                  date
                  </option>
                  <option
                    value="Status"
                    name="Status"
                    style={{ fontSize: "15px !important" }}
                  >
           Status
                  </option>
                  <option
                    value="Amount"
                    name="Amount"
                    style={{ fontSize: "15px !important" }}
                  >
                Amount
                  </option>
                </select>

{/* style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px"}} */}
        <div className="">
          <Table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px", height:"20px"}}>Order no.</th>
                <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"250px"}}>Product Info</th>
                <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"90px"}}>Price</th>

                <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px"}}>Quantity</th>
                <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"100px"}}>Purchase Date</th>
                <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px"}}>Status </th>
                <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"100px"}}>Amount Paid</th>
                <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"100px"}}>Action </th>
              </tr>
            </thead>

            <tbody>
              {orderdata
                ? orderdata.map((curr, index) => {
                  if(curr.order_success){
                    return (
      
                         <Ordercard  title={curr.title} oldprice={curr.oldprice} price={curr.price}
                          pcksize={curr.pcksize} estdelivery={curr.estdelivery}  key={index} orderid={curr.id}
                          items={curr.items} status={curr.order_success} datee={curr.created_at.slice(0,10)}/>
              
                                  
                  );
                  }
                  })
                : null}


              {/*  */}
            </tbody>
          </Table>

        
        </div>
      </div>
    </div>
    </div>
    );
}

export default Orders

// {props.brands
//   ? props.brands.map((curr, index) => {
//       return (
//         <div>
       

    
//         </div>
//       );
//     })
//   : null}