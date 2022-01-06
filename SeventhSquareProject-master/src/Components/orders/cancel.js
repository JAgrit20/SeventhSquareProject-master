import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import "../Request/Request.css"
import axios from "axios";
import { useState, useEffect } from 'react';
function Popup2(props) {
  const [subject,setsubject]=useState('')
	const [description,setdescription]=useState('')
	const [ans,setans]=useState('')
  const [selectedImage, setSelectedImage] = useState(null);


  const reqchange=(e)=>{
		let name=e.target.name
		let value=e.target.value
		if(name=='subject'){
			setsubject(value)
	
		}
		if(name=='description'){
		   setdescription(value)
	   }
	  
	 }

   const cancelorder=async(e)=>{
    e.preventDefault()
    const res=await fetch(`https://api.seventhsq.com/delivery/OrderCancel_seller/${props.match.params.slug.toString()}`);
    const data= await res.json();
    console.log(data);
    // setresult(data);

}

   const handleresent=(e)=>{
          e.preventDefault()
          const config = {
            headers: {
            Authorization: "token " + localStorage.getItem("token"),
            },
          };
      const data={
        subject: subject,
        desc: description
      }
      console.log(data)
      axios.post('https://api.seventhsq.com/customer_service/request',data,config).then(
        res=>{
        
        window.alert("Request Sent");
        }

      ).catch(
        err=>{
        console.log(err)
        window.alert("Something went wrong");
        }
      )
     setans( ({ data }))
      }
    return (
        <>
       <div  style={{color:"#F4F4F4"}}>

   
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        className="my-modal"

     
      >
   
        <Modal.Header closeButton  style={{background:"#F4F4F4"}}>
          <Modal.Title id="contained-modal-title-vcenter"  style={{background:"#F4F4F4"}}>
          Cancel Order
          </Modal.Title>
        </Modal.Header>
  
        <Form.Group className='mx-3 my-2'   style={{color:"#F4F4F4"}}>
             <Form method='POST' onSubmit={cancelorder}>
              {/* <Form.Label className='mt-4'>ok </Form.Label> outline: none; */}
              {/* <Form.Control type="text"   placeholder="Subject"  name='subject' value={props.sub}/>  */}
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontWeight:"700",fontSize:"15px"}}>Reason: </Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Cancelation Reson"  name='description' value={props.des} style={{ background: "#F4F4F4",fontSize:"13px"}}/>
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontSize:"15px"}}>Please note cancellation charges may apply to you as per the terms of the Marketplace</Form.Label>

              </Form>       
              <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Confirm</Button>  
          </Form.Group>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
      </div>
      </>
    );
  }
export default Popup2