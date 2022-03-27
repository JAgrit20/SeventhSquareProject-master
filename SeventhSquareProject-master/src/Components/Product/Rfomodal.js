import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
import "./product.css"
import Swal from 'sweetalert2'






function Rfqmodal(props) {

  const [location, setlocation] = useState('')
  const [qty, setqty] = useState('')
  const [description, setdescription] = useState('')
  const [plotno, setplotno] = useState('')
  const [pincode, setpincode] = useState('')
  const [quantunit, setquantunit] = useState('')
  const [statee, setstatee] = useState('')
  const [city, setcity] = useState('')
  const [userdata, setuserdata] = useState([])
  const [Fromdate, setFromDate] = useState(new Date());
  const [Todate, setToDate] = useState(new Date());
  console.log(props?.users)
  console.log("props")
  console.log(props)
  var qunty=1
  const handlechange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name == 'del_loc') {
      setlocation(value)

    }

    if (name == 'q_req') {
      const re = /^[0-9\b]+$/;

      // if value is not blank, then test the regex
  
      if (value === '' || re.test(value)) {
        console.log("qunty",qunty)

        qunty=value
        console.log("qunty",qunty)

      setqty(value)

      // if(qty==1){

      //   console.log("qty",qty)
      //   console.log("unit",quantunit)
      //   setquantunit(value)
      // }else if(quantunit=="Cubic Foot"){
      //   console.log("qty",qty)

      //   value = "Cubic Feet"
      //   console.log("unit",value)
      //   setquantunit(value)
      // }
      // else if(quantunit=="Square Foot"){
      //   console.log("qty",qty)

      //   value = "Square Feet"
      //   console.log("unit",value)
      //   setquantunit(value)
      // }
      // else if(quantunit=="Foot"){
      //   console.log("qty",qty)

      //   value = "Feet"
      //   console.log("unit",value)
      //   setquantunit(value)
      // }else{
      //   console.log("qunty",qty)

      //   value = quantunit+'s'

      //   console.log("unit",value)
      //   setquantunit(value)

      // }

      }
      

    }
    if (name == 'q_unit') {
      console.log("qunty top",qty)
      if(qty==1){

        console.log("qty",qty)
        console.log("unit",value)
        setquantunit(value)
      }else if(value=="Cubic Foot"){
        console.log("qty",qty)

        value = "Cubic Feet"
        console.log("unit",value)
        setquantunit(value)
      }
      else if(value=="Square Foot"){
        console.log("qty",qty)

        value = "Square Feet"
        console.log("unit",value)
        setquantunit(value)
      }
      else if(value=="Foot"){
        console.log("qty",qty)

        value = "Feet"
        console.log("unit",value)
        setquantunit(value)
      }else{
        console.log("qunty",qty)

        value = value+'s'

        console.log("unit",value)
        setquantunit(value)

      }
      

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
    if (name == 'qunatunit') {
      setquantunit(value)
    }

  }
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  const handlerfq = async (e) => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
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
        "product_Name": props.name,
        "phone": userdata.phone,
        "brand_preference": props?.users?.brand_name,
        "desc": description,
        "Quantity_Required": qty,
        "delivery_location": location,
        "delivery_from": Fromdate,
        "delivery_to": Todate,
        "is_replyed": false,
        "email": userdata.email,
        "seller": props?.users?.account,
        "Status_data":"Raised",
        "Status_data_seller":"Received",
        "Quantity_Unit":quantunit,
      })
    };
    console.log(userdata);
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/enquiry/request/', config);

    scrollToTop()

    // window.alert('Request Sent')
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Request Sent', 
    })
    window.location.reload()
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // }

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
        dialogClassName="modal-width "
    
      >
        {/* <style>
        .modal-dialog{
          width:"400px" !important;
        } 
        </style> */}

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:"crimson text",fontWeight:"700"}}>
           REQUEST FOR QUOTE
          </Modal.Title>
        </Modal.Header>

        <Form.Group className='mx-3 my-2' >
          <Form onSubmit={handlerfq} >
            {/* <div class="d-flex justify-content-evenly">
            
              
             
              <Form.Control type="text"   placeholder="Category"  /> 
                </div>  */}
            {/* <div class="d-flex justify-content-evenly mt-4">
                <Form.Control type="text"   placeholder="Brand Preference" /> 
                <Form.Control type="text"   placeholder="Quantity Required" />
                </div> */}
                <div class="d-flex justify-content-between mt-4 ">
            <h6 style={{marginLeft:"15px",fontSize:"14px",fontFamily:"open sans",fontWeight:"700"}}>Quantity Required</h6>

<h6 style={{marginRight:"15px",fontSize:"14px",fontFamily:"open sans",fontWeight:"700" }}>Quantity Unit</h6>
            </div>
            <div class="d-flex justify-content-evenly col mt-1">

              <Form.Control type="number" placeholder="Quantity Required" name='q_req' onChange={handlechange} style={{marginRight:"10px",fontSize:"12px",fontFamily:"open sans"}} required />


              <Form.Control as="select" placeholder="Quantity Required" name='q_unit' onChange={handlechange} style={{fontSize:"12px",fontFamily:"open sans"}}  >
                                
                                            <option style={{fontSize:"14px"}}  value="">Choose Unit</option>
                                            <option style={{fontSize:"14px"}} value="Bag">Bag</option>
                                            <option style={{fontSize:"14px"}}  value="Piece">Piece</option>
                                            <option style={{fontSize:"14px"}}  value="Metric Tonne">Metric Tonne</option>
                                            <option style={{fontSize:"14px"}}  value="Kilogram">Kilogram</option>
                                            <option style={{fontSize:"14px"}}  value="Cubic Foot">Cubic Foot</option>
                                            <option style={{fontSize:"14px"}}  value="Square Foot">Square Foot</option>
                                            <option style={{fontSize:"14px"}}  value="Cubic Meter">Cubic Meter</option>
                                            <option style={{fontSize:"14px"}}  value="Meter">Meter</option>
                                            <option style={{fontSize:"14px"}}  value="Set">Set</option>
                                            <option style={{fontSize:"14px"}}  value="Litre">Litre</option>
                                            <option style={{fontSize:"14px"}}  value="Foot">Foot</option>
                                            <option style={{fontSize:"14px"}}  value="Bundle">Bundle</option>
        </Form.Control>
             
              {/* <Form.Group controlId="formBasicSelect">
        <Form.Label>Select Norm Type</Form.Label>
        <Form.Control
          as="select"
          // value={type}
          // onChange={e => {
          //   console.log("e.target.value", e.target.value);
          //   setType(e.target.value);
          // }}
        >
          <option value="DICTUM">Dictamen</option>
          <option value="CONSTANCY">Constancia</option>
          <option value="COMPLEMENT">Complemento</option>
        </Form.Control>
      </Form.Group> */}

             
            {/* </Form.Group> */}
            </div>
            
            <div className="col mt-2">

            <h5 style={{fontSize:"14px",fontFamily:"open sans",fontWeight:"700",marginTop:"20px"}} >Delivery Timeline</h5>
            </div>

            <div class="d-flex justify-content-between ">
            <h6 style={{marginLeft:"15px",fontSize:"12px" ,fontFamily:"open sans"}}>Earliest By</h6>

<h6 style={{marginRight:"15px",fontSize:"12px",fontFamily:"open sans" }}>Latest By</h6>
            </div>
            <div class="d-flex justify-content-evenly col mt-1">
            {/* <Form.Group controlId="duedate"> */}
            <Form.Control
                type="date"
                name="Todate"
                placeholder="Due date"
                value={Fromdate}
                onChange={(e) => setFromDate(e.target.value)}
                style={{marginRight:"10px",fontSize:"12px",fontFamily:"open sans"}}
                
              />

              <Form.Control
                type="date"
                name="Fromdate"
                placeholder="Due date"
                value={Todate}
                onChange={(e) => setToDate(e.target.value)}
                style={{fontSize:"12px",fontFamily:"open sans"}}
              />
             
            {/* </Form.Group> */}
            </div>
            <div class="col mt-2">

            <h5 style={{ fontSize:"14px",fontFamily:"open sans",fontWeight:"700",marginTop:"20px"}}>Delivery Address</h5>
            </div>

              <div class="d-flex justify-content-evenly   col mt-2">

                <Form.Control type="text" placeholder="Plot No." name='plotno' onChange={handlechange}  style={{marginRight:"10px",fontSize:"12px",fontFamily:"open sans"}} />
              <Form.Control type="text" placeholder="Pincode" name='pincode' onChange={handlechange} style={{fontSize:"12px",fontFamily:"open sans"}} />
              {/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>
           
            <div class="col mt-2" >

              <Form.Control type="text" placeholder="Street Name / Locality" name='del_loc' onChange={handlechange}style={{fontSize:"12px",fontFamily:"open sans"}}  />
              {/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>
            <div class="d-flex justify-content-evenly   col mt-2">

<Form.Control type="text" placeholder="State." name='statee' onChange={handlechange}style={{marginRight:"10px",fontSize:"12px",fontFamily:"open sans"}}  />
<Form.Control type="text" placeholder="City" name='city' onChange={handlechange} style={{fontSize:"12px",fontFamily:"open sans"}} />
{/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

</div>
            {/* <div class="d-flex justify-content-evenly mt-4">
              <Form.Control type="text" placeholder="Delivery Location" name='location' onChange={handlechange} />
              <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} />

            </div> */}


            <div class="col mt-2">

            <Form.Label className='mt-1' style={{fontSize:"14px",fontWeight:"700",fontFamily:"open sans", color:"black",marginTop:"20px"}}>Comments</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Comments" name='description' onChange={handlechange} style={{fontSize:"12px",fontFamily:"open sans"}} />
            </div>


            {userdata ? (
              <Button className='mx-4 mt-4 btn-dark' type='submit' >SUBMIT</Button>
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

export default Rfqmodal
