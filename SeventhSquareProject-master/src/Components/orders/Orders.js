import React from 'react'

import Ordercard from './ordercard';
import axios from "axios";
import '../orders/orders.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react';
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
        <div>
            
            <div className='row'>
            <div className='col-md-7 sm-12'>
            <div className="d-flex justify-content-center my-5">
            <h1 className='mx-2 my-2'>My Orders</h1>
            </div>
            {/* <div class="card mb-5 mx-5 px-3" >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img" alt="..."/>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h3 class="card-title fw-bold">Order</h3>
        <p class="mb-2 fw-bold">
        Price :{" "}
        <span class="text-underline text-danger text-decoration-line-through">10</span>{" "}
        <span class="text-success">20</span>
        </p>
        <p class="mb-2  fw-bold">Description : Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        
        <p class="mb-2  fw-bold">
        Seller :{" "}
        <span >Seven Square</span>{" "}
        </p>
        <p class="mb-2 mx-1 fw-bold">
        <a href="/">Product details</a>{" "}
        </p>
      </div>
    </div>

    <div class="col-md-4 mt-4">
      <div class="card-body">
       
        <p class="mb-2 fw-bold">
        Order no. :{" "}
        <span class="text-underline ">1</span>{" "}
       
        </p>
        <p class="mb-2  fw-bold">Invoice no. : 2 </p>
        <p class="mb-2  fw-bold">Pck. Size : 2</p>
        <p class="mb-2  fw-bold">
         Delivery Date :{" "}
        <span >1/3/2021</span>{" "}
        </p>
        <p class="mb-2  fw-bold">
         Order Status :{" "}
        <span >Delievered</span>{" "}
        </p>
        <p class="mb-2 mx-1 fw-bold">
        <a href="/">Review</a>{" "}
        </p>
        
      </div>
    </div>
  </div>
</div> */}
        
        <div className="d-flex justify-content-center my-5">
            
            </div>
      {
                    orderdata.map((curr,index)=>{
                    return(
                     
                         <Ordercard  title={curr.title} oldprice={curr.oldprice} price={curr.price}
                          pcksize={curr.pcksize} estdelivery={curr.estdelivery}  key={index} orderid={curr.id}
                          items={curr.items} status={curr.order_success} />
                     
                      
                    )
                      
                })
            }
      </div>
      
      <div className='col-md-6 sm-12'>
      
     
        
      </div>
            </div>
          
            
        </div>
    )
}

export default Orders
