import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
// import "product.css" 



function Send_message(props) {

  const [location, setlocation] = useState('')
  const [qty, setqty] = useState('')
  const [description, setdescription] = useState('')
  const [plotno, setplotno] = useState('')
  const [pincode, setpincode] = useState('')
  const [statee, setstatee] = useState('')
  const [city, setcity] = useState('')
  const [userdata, setuserdata] = useState([])
  const [users, setusers] = useState([])
  const [Fromdate, setFromDate] = useState(new Date());
  const [Todate, setToDate] = useState(new Date());
  console.log("props?.user")
  console.log(props?.users)



  const handlechange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name == 'mess') {
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
      method: 'GET',
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
    console.log((`https://api.seventhsq.com/enquiry/seller/get/response/${userdata?.id}/buyer/${description}/${props.id}`));
    
    const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/${userdata?.id}/buyer/${description}/${props.id}`)
    window.alert('Message Sent')
    const data = await res.json();
    console.log(data); 
    setusers(data)


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
        dialogClassName="modal-width "
    
      >
        {/* <style>
        .modal-dialog{
          width:"400px" !important;
        } 
        </style> */}

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Send Message to Seller
          </Modal.Title>
        </Modal.Header>

        <Form.Group className='mx-3 my-2' >
          <Form onSubmit={handlerfq} >



            <Form.Label className='mt-4'>Send_message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Write your message here" name='description' onChange={handlechange} />


            {userdata ? (
              <Button className='mx-4 mt-4 btn-dark' type='submit' >SEND</Button>
              ) : (
                <Link to="/login">
                <Button className='mx-4 mt-4' >Need to login First</Button>
                </Link>
              )}
            
          </Form>
        </Form.Group>



        <Modal.Footer>


        </Modal.Footer>
      </Modal>

    </div>
    </div>
  )
}

export default Send_message
