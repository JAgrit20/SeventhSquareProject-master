import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
import Swal from 'sweetalert2'

// import "product.css" 



function Edit_enquiry(props) {


  const [location, setlocation] = useState('')
  const [qty, setqty] = useState(props.alldata.Quantity_Required)
  const [description, setdescription] = useState('')
  const [plotno, setplotno] = useState('')
  const [pincode, setpincode] = useState('') 
  const [statee, setstatee] = useState('')
  const [quantunit, setquantunit] = useState('')

  const [city, setcity] = useState('')
  const [userdata, setuserdata] = useState([])
  const [propsdata, setpropsdata] = useState([])
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
    if (name == 'q_unit') {
      setquantunit(value)
    }

  }


  const handlerfq = async (e) => {
    e.preventDefault();
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

      body: JSON.stringify({
        "state": statee?statee: props.alldata.state,
        "city":city ?city: props.alldata.city,
        "plotno": plotno ?plotno: props.alldata.plotno,
        "pincode": pincode ?pincode: props.alldata.pincode,
        "Buyer_ID": userdata.id,
        "Buyer_Type_corperate": userdata.is_corporate,
        "Buyer_Name": userdata.first_name+" "+userdata.last_name, 
        "product_id": props.alldata.product_id,
        "category": props.alldata.category,
        "phone": userdata.phone, 
        "brand_preference": props.alldata.brand_preference,
        "desc":  description ?description: props.alldata.desc,
        "Quantity_Required": qty?qty: props.alldata.Quantity_Required  ,
        "delivery_location": location ?location: props.alldata.delivery_location,
        "delivery_from":  Fromdate ?Fromdate: props.alldata.delivery_from,
        "delivery_to":  Todate ?Todate: props.alldata.delivery_to,
        "is_replyed": false,
        "email": userdata.email,
        "seller": props.alldata.seller,
        "rfq_id":props.alldata.id,
        "Quantity_Unit":quantunit ?quantunit: props.alldata.Quantity_Unit


      })
    }; 
    console.log(userdata);
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/enquiry/request/', config);
    // window.alert('Request Sent')
    const data = await res.json();
    console.log(data);
    if(data.message == "enquiry updated  sucessfully"){

      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Enquiry Edited Successfully', 
      }).then(() => {
        window.location.reload();
    });
  }else{
      Swal.fire({
        icon: 'Error',
        title: 'Error',
        text: 'Something went wrong', 
      }).then(() => {
        // window.location.reload();
    });

    }
    setqty(null)
    setpincode(null)
    setdescription(null)       
    setplotno(null)
    setstatee(null)
    setcity(null)
    setFromDate(null)
    setToDate(null)



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
    console.log(props);


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
          <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:"crimson text"}}> 
           EDIT ENQUIRY
          </Modal.Title>
        </Modal.Header>

        <Form.Group className='mx-3 my-2' >
          <Form onSubmit={handlerfq} >
          

            {/* <div class="col mt-4">
            <h6  style={{fontSize:"14px",fontFamily:"open sans",fontWeight:"700"}}>Quantity Required</h6>

              <Form.Control defaultValue ={props.alldata.Quantity_Required} type="text" placeholder="Quantity Required" name='q_req' defaultValue ={props.alldata.Quantity_Required} onChange={handlechange} />

            </div> */}
            <div class="d-flex justify-content-between mt-4 ">
            <h6 style={{marginLeft:"15px",fontSize:"14px",fontFamily:"open sans",fontWeight:"700"}}>Quantity Required</h6>

<h6 style={{marginRight:"15px",fontSize:"14px",fontFamily:"open sans",fontWeight:"700" }}>Quantity Unit</h6>
            </div>
            <div class="d-flex justify-content-evenly col mt-1">

              <Form.Control type="number" placeholder="Quantity Required" name='q_req' defaultValue ={props.alldata.Quantity_Required} onChange={handlechange} style={{marginRight:"10px",fontSize:"12px"}} required />


              <Form.Control as="select" placeholder="Quantity Required" name='q_unit' onChange={handlechange} style={{fontSize:"12px"}}  >
                                
                                            <option  hidden value={props.alldata.Quantity_Unit} >{props.alldata.Quantity_Unit}</option>
                                            <option style={{fontSize:"12px"}} value="Bag">Bag</option>
                                            <option style={{fontSize:"12px"}} value="Piece">Piece</option>
                                            <option style={{fontSize:"12px"}} value="Metric Tonne">Metric Tonne</option>
                                            <option style={{fontSize:"12px"}} value="Kilogram">Kilogram</option>
                                            <option style={{fontSize:"12px"}} value="Cubic Foot">Cubic Foot</option>
                                            <option style={{fontSize:"12px"}} value="Square Foot">Square Foot</option>
                                            <option style={{fontSize:"12px"}} value="Cubic Meter">Cubic Meter</option>
                                            <option style={{fontSize:"12px"}} value="Meter">Meter</option>
                                            <option style={{fontSize:"12px"}} value="Set">Set</option>
                                            <option style={{fontSize:"12px"}} value="Litre">Litre</option>
                                            <option style={{fontSize:"12px"}} value="Foot">Foot</option>
                                            <option style={{fontSize:"12px"}} value="Bundle">Bundle</option>
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
            <div className="col mt-2">

            <div class="d-flex justify-content-between ">
            <h6 style={{marginLeft:"0px",fontSize:"12px" ,fontFamily:"open sans"}}>Previous Earliest By</h6>

<h6 style={{marginRight:"0px",fontSize:"12px",fontFamily:"open sans" }}> Previous Latest By</h6>
            </div>
            </div>

            <div class="d-flex justify-content-evenly col mt-1 mb-2">

<Form.Control value ={props.alldata.delivery_from.slice(0,10)} type="text"  onChange={handlechange}  style={{marginRight:"10px",background:"#bebebe",fontSize:"12px",}} />
<Form.Control value ={props.alldata.delivery_to.slice(0,10)} type="text" onChange={handlechange} style={{background:"#bebebe",fontSize:"12px",}}/>
{/* <Form.Control defaultValue ={props.alldata.Quantity_Required} type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

</div>

            <div class="d-flex justify-content-between ">
            <h6 style={{marginLeft:"15px",fontSize:"12px" ,fontFamily:"open sans"}}>Earliest By</h6>

<h6 style={{marginRight:"15px",fontSize:"12px",fontFamily:"open sans" }}>Latest By</h6>
            </div>

            <div class="d-flex justify-content-evenly col mt-1 ">
            {/* <Form.Group controlId="duedate"> */}
            <Form.Control value ={props.alldata.delivery_from}
                type="date"
                name="Todate"
                placeholder="Due date"
                value={Fromdate}
                onChange={(e) => setFromDate(e.target.value)}
                style={{marginRight:"10px",fontSize:"12px"}}
                
              />

              <Form.Control defaultValue ={props.alldata.delivery_to}
                type="date"
                name="Fromdate"
                placeholder="Due date"
                value={Todate}
                onChange={(e) => setToDate(e.target.value)}
                style={{fontSize:"12px"}}

              />
             
            {/* </Form.Group> */}
            </div>
            <div class="col mt-2">

<h5 style={{ fontSize:"14px",fontFamily:"open sans",fontWeight:"700",marginTop:"20px"}}>Delivery Address</h5>
</div>
<div class="d-flex justify-content-evenly   col mt-2">




            <Form.Control defaultValue ={props.alldata.plotno} type="text" placeholder="Plot No." name='plotno' onChange={handlechange}  style={{marginRight:"10px",fontSize:"12px"}}/>

              <Form.Control defaultValue ={props.alldata.pincode} type="text" placeholder="Pincode" name='pincode' onChange={handlechange} setvalue={props.alldata.pincode} style={{fontSize:"12px"}} />
              {/* <Form.Control defaultValue ={props.alldata.Quantity_Required} type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>

            <div className="col mt-2">

           
     

              <Form.Control defaultValue ={props.alldata.delivery_location} type="text" placeholder="Street Name / Locality" name='del_loc' onChange={handlechange} style={{fontSize:"12px"}} />
              {/* <Form.Control defaultValue ={props.alldata.Quantity_Required} type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}
              </div>
            <div class="d-flex justify-content-evenly   col mt-2">


<Form.Control defaultValue ={props.alldata.state} type="text" placeholder="State." name='statee' onChange={handlechange}style={{marginRight:"10px",fontSize:"12px"}}  />
<Form.Control defaultValue ={props.alldata.city} type="text" placeholder="City" name='city' onChange={handlechange} style={{fontSize:"12px"}}  />
{/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

</div>

            {/* <div class="d-flex justify-content-evenly mt-4">
              <Form.Control type="text" placeholder="Delivery Location" name='location' onChange={handlechange} />
              <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} />

            </div> */}

<div class="col mt-2">

<Form.Label className='mt-1' style={{fontSize:"14px",fontWeight:"700",fontFamily:"open sans", color:"black",marginTop:"20px"}}>Comments</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Comments" name='description' onChange={handlechange} defaultValue ={props.alldata.desc} style={{fontSize:"12px"}} />
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

export default Edit_enquiry
