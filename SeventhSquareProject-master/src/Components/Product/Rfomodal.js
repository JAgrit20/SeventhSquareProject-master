import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Rfqmodal(props) {
  
  const [location,setlocation]=useState('')
  const [time,settime]=useState('')
  const [description,setdescription]=useState('')
  const [userdata,setuserdata]=useState([])

  const handlechange=(e)=>{
		let name=e.target.name
		let value=e.target.value
		if(name=='location'){
			setlocation(value)
	
		}
		if(name=='time'){
		   settime(value)
	   }
     if(name=='description'){
       setdescription(value)
     }
	  
	 }


   const handlerfq=async(e)=>{
    e.preventDefault();
    const config = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
     
      body:JSON.stringify({
        "product_id": props.id,
        "category": props.category,
        "phone":userdata.phone,
        "brand_preference":"nike",
        "desc": description,
        "quantity_required":"0",
        "delivery_location": location,
        "delivery_timeline": time,
        "is_replyed":false,
        "email":userdata.email,
        "seller": '1'
        
      })
    };
    console.log(userdata);
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/enquiry/request/',config);
    window.alert('Request Sent')
    const data= await res.json();
    console.log(data);
    
    
}

const getuser=async()=>{
  const config = {
    headers: {
      Authorization: "token " + localStorage.getItem("token"),
    },
    };
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/user_profile/get_profile/',config);
    const data= await res.json();
    
    setuserdata(data.user);
    console.log(userdata);
}
       
useEffect(()=>{
  getuser();
  },[])



    return (
        <div>
            <Modal
             {...props}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             animation={false}
            >  
               
		<Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            RFQ Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details</h4>
        </Modal.Body>
        <Form.Group className='mx-3 my-2' >
			<Form onSubmit={handlerfq} >
            {/* <div class="d-flex justify-content-evenly">
            
              
             
              <Form.Control type="text"   placeholder="Category"  /> 
                </div>  */}
                {/* <div class="d-flex justify-content-evenly mt-4">
                <Form.Control type="text"   placeholder="Brand Preference" /> 
                <Form.Control type="text"   placeholder="Quantity Required" />
                </div> */}

                <div class="d-flex justify-content-evenly mt-4">
                <Form.Control type="text"   placeholder="Delivery Location" name='location' onChange={handlechange} /> 
                <Form.Control type="text"   placeholder="Delivery Timeline" name='time' onChange={handlechange}/> 

                    </div>
             
             
              
              <Form.Label className='mt-4'>Description</Form.Label>
              <Form.Control as="textarea" rows={5}  placeholder="Description" name='description' onChange={handlechange}/> 
              
               
             
			  <Button className='mx-4 mt-4' type='submit' >SUBMIT</Button>  
            </Form>  
          </Form.Group>
          
		  
		  
		  <Modal.Footer>   
			
            
          </Modal.Footer>  
        </Modal> 
            
        </div>
    )
}

export default Rfqmodal
