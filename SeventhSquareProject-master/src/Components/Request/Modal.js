import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import "./Request.css"
import axios from "axios";
import { useState, useEffect } from 'react';
function Popup(props) {
  const [subject,setsubject]=useState('')
	const [description,setdescription]=useState('')
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
        window.location.reload()
        }

      ).catch(
        err=>{
        console.log(err)
        window.alert("Something went wrong");
        }
      )
      }
    return (
        <>
       
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details</h4>
          <p>
           We try to fulfill all the requests of users
          </p>
        </Modal.Body>
        <Form.Group className='mx-3 my-2' >
             <Form method='POST' onSubmit={handleresent}>
              <Form.Label className='mt-4'>Subject: </Form.Label>
              <Form.Control type="text"   placeholder="Subject"  name='subject' onChange={reqchange}/> 
              <Form.Label className='mt-4'>Description: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Description" name='description' onChange={reqchange}/>
              <Form.Label>Select File(Optional)</Form.Label>
                <Form.Control type="file" />    

               <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Send</Button> 
              </Form>       
          </Form.Group>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
      </>
    );
  }
export default Popup