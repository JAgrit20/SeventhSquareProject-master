import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import "../Request/Request.css"
import axios from "axios";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useState, useEffect } from 'react';


function Popup3(props) {
  const [subject,setsubject]=useState('')
	const [description,setdescription]=useState('')
	const [ans,setans]=useState('')
  const [selectedImage, setSelectedImage] = useState(null);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


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
          Return Order
          </Modal.Title>
        </Modal.Header>
  
        <Form.Group className='mx-3 my-2'   style={{color:"#F4F4F4"}}>
             <Form method='POST' onSubmit={handleresent}>
              {/* <Form.Label className='mt-4'>ok </Form.Label> outline: none; */}
              {/* <Form.Control type="text"   placeholder="Subject"  name='subject' value={props.sub}/>  */}
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontWeight:"700",fontSize:"15px"}}>Reason for return: </Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Why do you want to return"  name='return' value={props.des} style={{ background: "#F4F4F4",fontSize:"13px"}}/>
              <Form.Label className='mt-1'  style={{background:"#F4F4F4",fontSize:"15px"}}>Please note cancellation charges may apply to you as per the terms of the Marketplace</Form.Label>
               
              {/* <Form.Control as="textarea" rows={2} placeholder="Description"  name='description' value={props.sub} style={{ background: "#F4F4F4",fontSize:"13px"}}/> */}
              {/* <Form.Label className='mt-1'>New Description: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Description" onChange={reqchange} name='description' />
              <Form.Label className='mt-1'>New Subject: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="subject" onChange={reqchange} name='subject' /> */}
              {/* <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Save Changes</Button>  */}
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Reason</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Reason"
          onChange={handleChange}
        >
          <MenuItem value={10}>Defective / Damaged Product</MenuItem>
          <MenuItem value={20}>Incomplete Item</MenuItem>
          <MenuItem value={30}>Not what was displayed / Does not match description</MenuItem>
          <MenuItem value={40}>Wrong Product Delivered</MenuItem>
          <MenuItem value={50}>Delivery Delayed / Late Arrival</MenuItem>
          <MenuItem value={60}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
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
export default Popup3