import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./payustyles.css";
import tick from "././../../images/tick.png" 
import cross from "././../../images/cross.png" 
function Success() {
  const [orderdata, setorderata] = useState([]);

  const postid = async () => {
    let id = localStorage.getItem("orderID");
    console.log(id);

    var bodyFormData = new FormData();
    bodyFormData.append("orderId", id);

    axios({
      method: "post",
      url: "https://api.seventhsq.com/payu/payment_status/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        
        console.log("response.data.details");
        console.log(response.data.details);
        setorderata(response.data.details);
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
  };

  useEffect(() => {
    postid();
  }, []);

  return (
    <div class="d-flex justify-content-center align-items-center my-5">
      {orderdata.orderStatus == "PAID" ? (
        

        <div class="success-box">
          <div className="review_card_s">
            <div className=" tick_image" >
            <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/>
       </div>
            <span style={{ flex: 1 }}>
              <span className="review_card_1st_child_s mt-2">
                <h2 style={{ color:"green" }}>Order Successful</h2>

                <span 
                  style={{
                    alignContent:"center",
                    justifyContent:"center",
                    display:"flex",
                   fontFamily:"open sans",
                   fontSize:"11px",
                    // marginLeft: "auto",
                    width:"180px"
                  }}
                >
                 Thank you for your purchase.{"   "} We will email you the details shortly
                </span>

                {/* <p className="review_body_p" style={{}}>Payment Type: </p> */}
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",columnGap: "50px",paddingTop:"10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Payment_Type:</p>
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.customerPhone} </p>
              </span>
                {/* <span style={{display:"flex",justifyContent:"space-between",alignContent:"center"}} className="content_inside">
                 
                <p className="review_body_p_ans" style={{}}>Mobile: </p>
           
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.customerPhone} </p>
                </span> */}
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",columnGap: "80px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Mobile: </p>
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.customerPhone} </p>
              </span>

                {/* <p className="review_body_p" style={{}}>Email: </p> */}
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",columnGap: "110px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Email:</p>
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.orderId}</p>
              </span>
                {/* <p className="review_body_p" style={{}}>Order no: {orderdata.orderId}</p> */}
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",columnGap: "90px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Order_no:</p>
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.orderId}</p>
              </span>
                {/* <p className="review_body" style={{}}>Review: </p> */}

                <h3>Amount Paid: INR {orderdata.orderAmount}</h3>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",columnGap: "80px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Transaction.Id:</p>
                <p className="review_body_p" style={{width:"40%",marginLeft:"60px"}}>{orderdata.orderId}</p>
              </span>
              </span>
            </span>
          </div>
              <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"20px"}}>
              <button style={{width:"30%"}}className="btn btn-dark">
               view orders
              </button>
              <button style={{marginLeft:"30px"}}className="btn btn-dark">
               continue shopping 
              </button>
              </div>

         {/* <div class="card-header">Transition Status</div>
          <div class="card-body text-success">
            <h4 class="card-title">Payment was Successfull</h4>

            <div className="row">
              <div className="col-md-6">
                <p>Amount</p>

                <p>Mobile</p>
                <p>Transaction ID</p>
              </div>
              <div className="col-md-6">
                <p>{orderdata.orderAmount}</p>
                <p>{orderdata.customerPhone}</p>
                <p>{orderdata.orderId}</p>
              </div>
            </div>
          </div>  */}
        </div>
      ) : (
        <div class="success-box">
        <div style={{height:"180px"}} className="review_card_s">
          <div className=" tick_image" >
          <img  style={{height:"40px",width:"40px",paddingTop:"6px",marginBottom: "10px",background: "transparent"}} src={cross}/>
     </div>
          {/* <span style={{ flex: 1 }}> */}
            <span className="review_card_1st_child_s mt-2">
              <h2 style={{ color:"red",marginBottom: "30px" }}>Payment  Failed</h2>
              <h2  style={{paddingLeft:"10px",fontWeight:100,fontSize:"15px",marginBottom: "20px" 
                  }} >Error occured while processing your payment for <span style={{fontWeight:500}}> Order No {orderdata.orderId} </span>  please try again
        </h2>
                        
            </span>
            {/* </span> */}
            </div>
            <div style={{display:"flex",justifyContent:"center",alignContent:"center",paddingTop:"20px"}}>
              <button style={{width:"40%"}}className="btn btn-dark">
               Try Again
              </button>
              <button style={{marginLeft:"30px"}}className="btn btn-dark">
               Back to Cart
              </button>
              </div>
            </div>
            

        /* <div class="card border-S mb-3  failure-box">
          <div class="card-header">Transition Status</div>
          <div class="card-body text-danger">
            <h4 class="card-title">Payment  Failed</h4>
            <div className="row">
              <div className="col-md-6">
                <p>Amount</p>

                <p>Mobile</p>
                <p>Transaction ID</p>
              </div>
              <div className="col-md-6">
                <p>{orderdata.orderAmount}</p>
                <p>{orderdata.customerPhone}</p>
                <p>{orderdata.orderId}</p>
              </div>
            </div>
          </div>
        </div> */

      )}
    </div>
  );
}

export default Success;
