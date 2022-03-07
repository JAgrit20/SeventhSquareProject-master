import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
import axios from "axios";

// import "product.css" 



function View_details(props) {

  const [location, setlocation] = useState('')
  const [qty, setqty] = useState('')
  const [description, setdescription] = useState('')
  const [plotno, setplotno] = useState('')
  const [pincode, setpincode] = useState('')
  const [statee, setstatee] = useState('')
  const [city, setcity] = useState('')
  const [userdata, setuserdata] = useState([])
  const [chatdata, setchatdata] = useState([])
  const [Fromdate, setFromDate] = useState(new Date());
  const [Todate, setToDate] = useState(new Date());
  // console.log(props?.users) 

  const get_chats = async  () => {


        console.log('get_chats running');
        console.log(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.alldata.id}`);
        // console.log(props.alldata.seller);

      // const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.alldata.id}/${props.alldata.id}`);
      const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.alldata.id}`);
      const data = await res.json();
      console.log("char")
      // console.log(props)
      console.log(data)

      setchatdata(data)
      
      
    
  };


  const getuser = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/user_profile/get_profile/', config);
    const data = await res.json();

    setuserdata(data.user);
    console.log("userdata");
    console.log(userdata);

  }

  useEffect(() => {
    getuser();
    setchatdata(null)
  //   axios.get(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.rfid}`).then(res=>{
  //     console.log("res.data")
  //     console.log(res.data)
  //     setchatdata(res.data)

  // })
    // get_chats(); 
   
  }, [])

  return (
    <div   >
      <div>


      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        dialogClassName="modal-width"
    
      >
        {/* <style>
        .modal-dialog{
          width:"400px" !important;
        } 
        </style> */}

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:"crimson text", fontWeight:"800"}}>
          ENQUIRY DETAILS
          </Modal.Title>
        </Modal.Header>


          {/* "state":statee,
        "city":city,
        "plotno":plotno,
        "pincode":pincode,
        "Buyer_ID": userdata.id,
        "Buyer_Type_corperate": userdata.is_corporate,
        "Buyer_Name": userdata.first_name+" "+userdata.last_name,
        "product_id": props.id,
        "category": props.category,
        "phone": userdata.phone,
        "brand_preference": props?.users?.brand_name,
        "desc": description, 
        "Quantity_Required": qty,
        "delivery_location": location,
        "delivery_from": Fromdate,
        "delivery_to": Todate,
        "is_replyed": false,
        "email": userdata.email, 
        "seller": props?.users?.account */}
            <div class="col mt-4">
            <h6 ></h6>
            <h4 > <span style={{fontWeight:"700"}}> Quantity Required: </span> {props.alldata.Quantity_Required}</h4>
            {/* <h4 > <span style={{fontWeight:"700"}}>Delivery Timeline:</span> Earliest By: {props.alldata.delivery_from.slice(0,10)}  Latest By: {props.alldata.delivery_to.slice(0,10)} </h4> */}
            <h4 > <span style={{fontWeight:"700"}}>Delivery Address: </span> {props.alldata.delivery_location}</h4>
            <h4 >  <span style={{fontWeight:"700"}}>Comments:  </span>{props.alldata.desc}</h4>
            <button onClick={() => get_chats()} className="btn btn-dark">SHow chats</button>
           <div style={{justifyContent:"center",alignItems:"center"}}> 
           {chatdata
              ? chatdata.map((curr, index) => {
         
                  return (
                    <>
{
curr.replyed_by_buyer?
<div className="row" style={{background:"grey" , borderRadius:"10px",color:"white", padding:"10px", margin:"10px",justifyContent:"space-between"}}>
<h3>Sent By You</h3>

<h4>{curr.message}</h4>
<h4>{curr.sent_at.slice(0,10)},{curr.sent_at.slice(11,19)}</h4>
</div>:<div className="row" style={{background:"grey" ,   borderRadius:"10px",  textAlign: "right",right:"0",color:"white", padding:"10px", margin:"10px",justifyContent:"space-between"}}>
<h3>Sent By Seller</h3>

<h4>{curr.message}</h4>
<h4>{curr.sent_at.slice(0,10)},{curr.sent_at.slice(11,19)}</h4>
</div>
}
         </>
                                
                );
                
                })
              : <div class="">
              
                  </div>}

           </div>
          

              {/* <Form.Control type="text" placeholder="Quantity Required" name='q_req' onChange={handlechange} /> */}
              {/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>




        <Modal.Footer>


        </Modal.Footer>
      </Modal>

    </div>
    </div>
  )
}

export default View_details
