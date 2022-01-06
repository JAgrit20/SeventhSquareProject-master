import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import "./Request.css"
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
           Ticket No. {props.ticket}
          </Modal.Title>
        </Modal.Header>
  
        <Form.Group className='mx-3 my-2'   style={{color:"#F4F4F4"}}>
             <Form method='POST' onSubmit={handleresent}>
              {/* <Form.Label className='mt-4'>ok </Form.Label> outline: none; */}
              {/* <Form.Control type="text"   placeholder="Subject"  name='subject' value={props.sub}/>  */}
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontWeight:"700",fontSize:"15px"}}>Subject: </Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Description"  name='description' value={props.des} style={{ background: "#F4F4F4",fontSize:"13px"}}/>
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontWeight:"700",fontSize:"15px"}}>Description: </Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Description"  name='description' value={props.sub} style={{ background: "#F4F4F4",fontSize:"13px"}}/>
              {/* <Form.Label className='mt-1'>New Description: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Description" onChange={reqchange} name='description' />
              <Form.Label className='mt-1'>New Subject: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="subject" onChange={reqchange} name='subject' /> */}
              {/* <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Save Changes</Button> 
              <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Delete</Button>  */}
              </Form>       
          </Form.Group>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
      </div>
      </>
    );
  }
export default Popup2