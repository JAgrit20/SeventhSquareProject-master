import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
// import "product.css" 



function Responses_seller(props) {

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


        console.log(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.rfid}`);
        // console.log(props.alldata.seller);

      // const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.alldata.id}/${props.alldata.id}`);
      const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.rfid}`);
      const data = await res.json();
      console.log("char")
      console.log(props)
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
    get_chats(); 
   
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
        dialogClassName="modal_width"
    
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
            <button onChange={() => get_chats}>SHow chats</button>
            {chatdata
              ? chatdata.map((curr, index) => {
         
                  return (
                    <>
<div className="row" style={{background:"grey" ,width:"50%", borderRadius:"10px",color:"white", padding:"10px", margin:"10px",justifyContent:"space-between"}}>
{/* <h4>{curr.id}</h4> */} 
  
{ curr.replyed_by_buyer?
<>
<h3>Sent By You</h3>
<h4>{curr.message}</h4>
<h4>{curr.sent_at.slice(0,10)}</h4>
</>:
<>
<h3>Sent By Buyer</h3>
<h4>{curr.message}</h4>
<h4>{curr.sent_at.slice(0,10)}</h4>
</>
}
</div>
         </>
                                
                );
                
                })
              : <div>No messages</div>}

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

export default Responses_seller
