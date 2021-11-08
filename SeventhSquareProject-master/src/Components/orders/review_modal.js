import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

import ReviewForm from "./review_form";
function ReviewModal(props) {
    
   
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
             Review Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details</h4>
          <p>
           We appreciate the reviews

          </p>
          <p>
           Product ID:{props.productid}
          </p>
          <ReviewForm  productid={props.productid}  orderid={props.orderid} hide={props.onHide}/>
        </Modal.Body>
        
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
      </>
    );
  }
export default ReviewModal