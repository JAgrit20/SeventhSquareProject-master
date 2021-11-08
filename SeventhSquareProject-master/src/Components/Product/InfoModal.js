import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function InfoModal(props) {
  const [description,setdescription]=useState('')
  const [userdata,setuserdata]=useState([])

  const handlechange=(e)=>{
		let name=e.target.name
		let value=e.target.value

    
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
        
      },
     
      body:JSON.stringify({
        "product_id": props.id,
        "phone":userdata.phone,
        "desc": description,
        "is_replyed":false,
        "email":"ok@gmail.com",
        "seller": '1'
        
      })
    };
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/enquiry/request/information',config);
   
    const data= await res.json();
    console.log(data);
    window.alert('Request Sent')
    
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
            Information Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details</h4>
        </Modal.Body>
        <Form.Group className='mx-3 my-2' >
			<Form onSubmit={handlerfq}>
           
              <Form.Label className='mt-4'>Details</Form.Label>
              <Form.Control as="textarea" rows={6}  placeholder="Details" name='description' onChange={handlechange} /> 
              
               
             
			  <Button className='mx-4 mt-4' type='submit' >SUBMIT</Button>  
            </Form>  
          </Form.Group>
          
		  
		  
		  <Modal.Footer>   
			
            
          </Modal.Footer>  
        </Modal> 
            
            
        </div>
    )
}

export default InfoModal
