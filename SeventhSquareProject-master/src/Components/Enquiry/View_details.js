import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
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
  const [Fromdate, setFromDate] = useState(new Date());
  const [Todate, setToDate] = useState(new Date());
  console.log(props?.users)
  const handlechange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name == 'del_loc') {
      setlocation(value)

    }
    if (name == 'q_req') {
      setqty(value)
      

    }

    if (name == 'description') {
      setdescription(value)
    }
    if (name == 'statee') {
      setstatee(value)
    }
    if (name == 'plotno') {
      setplotno(value)
    }
    if (name == 'city') {
      setcity(value)
    }
    if (name == 'pincode') {
      setpincode(value)
    }

  }


  const handlerfq = async (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

      body: JSON.stringify({
        "state":statee,
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
        "seller": props?.users?.account

      })
    };
    console.log(userdata);
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/enquiry/request/', config);
    window.alert('Request Sent')
    const data = await res.json();
    console.log(data);


  }


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
          <Modal.Title id="contained-modal-title-vcenter">
          Requested Quotation Id: {props.id}
          </Modal.Title>
        </Modal.Header>

        <Form.Group className='mx-3 my-2' >
          <Form onSubmit={handlerfq} >

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
            <h4 >Requested Quantity {props.alldata.Quantity_Required}</h4>
            <h4 > Comments: {props.alldata.desc}</h4>
            <h4 > Expected Delivery Date: Between {props.alldata.delivery_from.slice(0,10)} & {props.alldata.delivery_to.slice(0,10)} </h4>
            <h4 > Delivery Location: {props.alldata.delivery_location}</h4>


              {/* <Form.Control type="text" placeholder="Quantity Required" name='q_req' onChange={handlechange} /> */}
              {/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>

            
          </Form>
        </Form.Group>



        <Modal.Footer>


        </Modal.Footer>
      </Modal>

    </div>
    </div>
  )
}

export default View_details
