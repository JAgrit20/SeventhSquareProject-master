import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./order_sum.css";
import { useParams } from "react-router-dom";

function Order_sum_i() {
  const [allorderdata, setallorderata] = useState([]);
  const [orderdatac, setorderatac] = useState([]);
  const [orderdatac2, setorderatac2] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderText, setOrderText] = useState([]);
  const [orderdata1, setorderata1] = useState([]);
  const [orderdata, setorderdata] = useState([]);
  const [orderaddress, setorderaddress] = useState([]);
  const [orderplace, setorderplace] = useState([]);
  const [prc, setprc] = useState([]);
  const [orderi, setorderid] = useState([]);
  const [orderpro, setorderpro] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const { id } = useParams();
  const NewID = id.toString();

  const getUserss = async () => {

    console.log(`id${NewID}`);
      await fetch(
        `https://api.seventhsq.com/orders/orders/${NewID}`, {
          method: 'GET',
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
        }
       
      ).then( async (res) => {
        const data = await res.json();
        console.log(data);
        setOrderText(data[1]['txid']);

      })
     
      .catch((err) => console.error(err))
      
      
    
  };
  const getadd= async () => {

    console.log(`id${NewID}`);
      await fetch(
        `https://api.seventhsq.com/orders/orders/sellers/${NewID}`, {
          method: 'GET',
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
        }
       
      ).then( async (res) => {
        const data = await res.json();
        console.log(data);
        setorderdata(data)
        console.log(data[1]['product_no']);
        // setorderaddress
        setorderaddress(data[1]['place']);
        setOrderInfo(data[1]['first name']);
        setorderplace(data[1]['address']);
        setorderid(data[1]['txid']);
        setprc(data[1]['price']);
        setallorderata(data[1]['order_no']);
        setorderpro(data[1]['created_at'].slice(0,10));

      })
     
      .catch((err) => console.error(err))
      
      
    
  };
  

 const getordd= async () => {
  let idd = orderText;
  console.log(orderInfo);
  
  var bodyFormData = new FormData();
  bodyFormData.append("txnid", idd);

  axios({
    method: "post",
    url: "https://api.seventhsq.com/orders/payment/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data",Authorization: "token " + localStorage.getItem("token"),},
  })
    .then(function (response) {
      //handle success
      
      console.log(response.data.items);
      setorderata1(response.data.items);

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
// const getdetail= async () => {
//   let idd = localStorage.getItem("orderID");

//   axios({
//     method: "get",
//     url: `https://api.seventhsq.com/payu/payment_status/${idd}`,
//     data: {order_id:(idd)},
//     headers: { "Content-Type": "multipart/form-data",Authorization: "token " + localStorage.getItem("token"),},
//   })
//     .then(function (response) {

  
//       console.log("payment");
//       console.log(response.data)
//       setallorderata(response.data[0])
//       setorderatac2(response.data[0]['payment_method'])
//       setorderatac(response.data[0]['payment_method']['card'])



//     })
//     .catch(function (response) {

//     });


// };

// const postid = async () => {
//   let idd = localStorage.getItem("orderID");

//   console.log(orderInfo);
  
//   var bodyFormData = new FormData();
//   bodyFormData.append("orderId", idd);

//   axios({
//     method: "post",
//     url: "http://127.0.0.1:8001/payu/payment_details/", 
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
 
      
//       console.log("response.data.details");
//       console.log(response.data.details);
//       setorderata(response.data.details);
//     })
//     .catch(function (response) {
    

//       console.log(response);
//     });

// };


  // const getorder = async () => {
  //   let id = orderText;
  //   console.log(id);
  
    // var bodyFormData = new FormData();
    // bodyFormData.append("txnid", id);
  
    //  await axios({
    //   method: "post",
    //   url: "https://api.seventhsq.com/orders/payment/",
    //   data: {txnid:id},
    //   headers: { "Content-Type": "application/json",Authorization: "token " + localStorage.getItem("token"),
    //   },
  
    // })
    //   .then(function (response) {
        //handle success
        
        // console.log("order details id");
  
        // console.log(Object.keys(response.data.items),"object printed");
        // let array1=response.data.items;
        // console.log( response.data.items[0]);
        // console.log( response.data);
        // console.log( typeof( response.data.items));
      
        // setItem(Object.keys(response.data.items));
        // setorderata1(array1);
        // console.log(orderdata1);
  
        // setorderata2(response.data.details);
      // })
      // .catch(function (response) {
        //handle error
  
  //       console.log(response);
  //     });
  
  // };

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
    console.log(data);
  };

  useEffect(() => {

    getuser();
    getUserss();
    getadd();


  }, []);
  useEffect(() => {
    getordd();
    // postid();
    // getdetail();


  }, [orderText]);

  return (
    <div class="d-flex justify-content-center align-items-center my-5">


        <div class="success-box"  style={{padding: "20px"}}>
          <div className="review_card_s">
            <div className=" tick_image_os" >
            {/* <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/> */}
            <h3 style={{fontFamily:"crimson text", }}>ORDER SUMMARY</h3>
       </div>
            <span style={{ flex: 1 }}>
              <span className="review_card_1st_child_s mt-2">
               
              <div className="container" style={{
                    alignContent:"left",
                    justifyContent:"left",
                    display:"flex"}}>
                <span 
                  style={{
                    alignContent:"left",
                    justifyContent:"left",
                    display:"flex",
                   fontFamily:"open sans",
                   fontSize:"11px",
                    // marginLeft: "auto",
                    width:"300px"
                  }}
                >
                 Hi {orderInfo} <br />Your order has been confimed & will be shipped soon 
                </span>
                </div>

                {/* <p className="review_body_p" style={{}}>Payment Type: </p> */}
                <div style={{    width: "100%",paddingLeft: "10px",paddingRight: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"left",paddingTop:"10px",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Order Date:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{orderpro} </p>
              </span>
              </div>

                <div style={{    width: "100%",paddingLeft: "10px",paddingRight: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"left",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Order_No: </p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{allorderdata} </p>
              </span>
              </div>

                {/* <p className="review_body_p" style={{}}>Email: </p> */}
                <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Email:</p>
                <p className="review_body_p" style={{marginRight:"10px"}}>{userdata.email}</p>
              </span>
              </div>
              <div style={{    width: "100%",paddingLeft: "10px",paddingRight: "20px",}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center"}} className="content_inside">
                <p className="review_body_p" style={{}}>Mobile:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{orderdata.customerPhone} </p>
              </span>
              </div>
                {/* <p className="review_body" style={{}}>Review: </p> */}

                {/* <h3 style={{fontFamily:"crimson text", }}>Amount Paid: INR {orderdata.orderAmount}</h3> */}
                <div style={{    width: "100%",paddingLeft: "10px",paddingRight: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Shipping_Address:</p>
                <p className="review_body_p" style={{marginLeft:"15px"}}>{orderaddress},{orderplace}</p>
              </span>
              </div>
                <h2 style={{ fontWeight:"bold" }} >Order Status  <span style={{ color:"green" }}>  {orderdata.orderStatus==="ACTIVE"?"Unpaid":"Paid"} </span> </h2>
              </span>
            </span>
          </div>
              <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"10px"}}>
              <button style={{width:"100%",height:"40px",backgroundColor:"black !important"}}className="btn btn-dark">
           
              <span style={{color:'white',fontSize:"15px",fontFamily:"open sans"}}>   Download Invoice </span>
             
              </button>
              {/* <button style={{marginLeft:"30px"}}className="btn btn-dark">
               continue shopping 
              </button> */}
              </div>

        </div>

        {/* ///////////////////////////////////////////////////////////////// */}

        <div class="success-box"  style={{padding: "20px"}}>
          <div className="review_card_s" style={{height:"300px"}}>
            <div className=" tick_image_os" >
            {/* <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/>
             */}
             <h3 style={{fontFamily:"crimson text", }}>ORDER ITEMS</h3>
       </div>
            <span style={{ flex: 1 }}>
              <span className="review_card_1st_child_s mt-2">
               


                
              </span>
              {orderdata1
                ? orderdata1.map((curr, index) => {
                    return ( <>

<div class="row" >
        <div class="col-lg-4 offset-lg-0"><img /><h5>Product Name: {curr.proName}  </h5></div>
        <div class="col-lg-2 offset-lg-0"><h5>Quantity: </h5><h5>{curr.quantity} </h5></div>
        <div class="col-lg-2 offset-lg-0"><h5>Gst Paid: {curr.gst} % </h5></div>
        <div class="col"><h5>Price {curr.price} INR </h5></div>
    </div>
                   
                    <hr/>   
                               
                    
           </>
                    );
                  })
                :  null}
               
         </span>
         </div>
         </div>

        {/* ///////////////////////////////////////////////////////////////// */}
        <div class="success-box" style={{padding: "20px"  }}>
          <div className="review_card_s"  style={{height:"250px"}}>
            <div className=" tick_image_os" >
            {/* <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/> */}
<h3 style={{fontFamily:"crimson text"}}>PAYMENT SUMMARY</h3>
       </div>
            <span style={{ flex: 1 }}>
              <span className="review_card_1st_child_s mt-2">
                {/* <h2 style={{ color:"green" }}>Order Successful</h2>

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
                </span> */}

                {/* <p className="review_body_p" style={{}}>Payment Type: </p> */}
                <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingTop:"10px",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Payment.Type:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>  {orderdatac2.card? (<p>{orderdatac.card_network},{orderdatac.card_type}</p>):(<p>UPI </p>)} </p>
              </span>
              </div>
                {/* <span style={{display:"flex",justifyContent:"space-between",alignContent:"center"}} className="content_inside">
                 
                <p className="review_body_p_ans" style={{}}>Mobile: </p>
           
                <p className="review_body_p" style={{marginLeft:"60px"}}>{orderdata.customerPhone} </p>
                </span> */}
               

                {/* <p className="review_body_p" style={{}}>Email: </p> */}
                <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Payment.Status:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>confirmed</p>
              </span>
              </div>
                {/* <p className="review_body_p" style={{}}>Order no: {orderdata.orderId}</p> */}
                <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Transaction.Id:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{orderText}</p>
              </span>
              </div>
                {/* <p className="review_body" style={{}}>Review: </p> */}

                {/* <h3>Amount Paid: INR {orderdata.orderAmount}</h3> */}
                <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Payment.Amount:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{prc}</p>
              </span>
              </div>
              <div style={{    width: "100%",paddingLeft: "10px"}}>
                <span style={{display:"flex",justifyContent:"space-between",alignContent:"center",paddingRight: "10px"}} className="content_inside">
                <p className="review_body_p" style={{}}>Payment.Recieved:</p>
                <p className="review_body_p" style={{marginLeft:"60px"}}>{prc}</p>
              </span>
              </div>
              </span>
            </span>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"10px"}}>
              <button style={{width:"100%",height:"40px",backgroundColor:"black !important"}}className="btn btn-dark">
              <span style={{color:'white',fontSize:"15px",fontFamily:"open sans"}}>Print Reciept </span>
              </button>
              {/* <button style={{marginLeft:"30px"}}className="btn btn-dark">
               continue shopping 
              </button> */}
              </div>
        </div>
        </div>
      )
      
              }
  


export default Order_sum_i;
