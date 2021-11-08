import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './payustyles.css'
function Success() {

    const [orderdata,setorderata]=useState([])
  

    
    const postid=async()=>{
        let id=localStorage.getItem('orderID')
        console.log(id)
        
        
        var bodyFormData = new FormData();
        bodyFormData.append('orderId',id)

    axios({
      method: "post",
      url: "https://api.seventhsq.com/payu/payment_status/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        
        console.log(response.data.details);
        setorderata(response.data.details)
      })
      .catch(function (response) {
        //handle error
        
        console.log(response);
      });
    

        // const config = {
        //     method:'POST',
        //     headers: {
              
        //       'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({   
        //       'orderId': id,
        //   })
        
        //   };
         
        //   const res=await fetch('https://api.seventhsq.com/payu/payment_status/',config);
        //   const data = await res.json()
        //   console.log(res)
          
    }

    useEffect(()=>{
       postid()
       
      },[])
  

    return (
      
        <div class="d-flex justify-content-center align-items-center my-5">
          {
        orderdata.orderStatus=='PAID'?
        <div class="card border-S mb-3  success-box" >
                <div class="card-header">Transition Status</div>
                <div class="card-body text-success">
                    <h4 class="card-title">Payment was Successfull</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                           <p>Amount</p>
                           
                           <p>Mobile</p>
                           <p>Transaction ID</p>
                          
                           
                           
                        </div>
                        <div className='col-md-6'>
                            <p>{orderdata.orderAmount}</p>
                            <p>{orderdata.customerPhone}</p>
                            <p>{orderdata.orderId}</p>
                           
                        </div>

                    </div>
                </div>
                </div>:
                 <div class="card border-S mb-3  failure-box" >
                 <div class="card-header">Transition Status</div>
                 <div class="card-body text-danger">
                     <h4 class="card-title">Payment was Failed</h4>
                     <div className='row'>
                     <div className='col-md-6'>
                           <p>Amount</p>
                           
                           <p>Mobile</p>
                           <p>Transaction ID</p>
                          
                          
                           
                        </div>
                        <div className='col-md-6'>
                            <p>{orderdata.orderAmount}</p>
                            <p>{orderdata.customerPhone}</p>
                            <p>{orderdata.orderId}</p>
                           
                        </div>
 
                     </div>
                 </div>
                 </div>

      }
             
        </div>
    )
}

export default Success