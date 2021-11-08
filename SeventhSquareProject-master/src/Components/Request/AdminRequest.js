import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import './AdminRequest.css'
import { useState, useEffect } from 'react';
function AdminRequest() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <div className='row'>
                <div className='col-md-5'>
                <div className="d-flex justify-content-center my-5">
                <h1 className='mx-2 my-2'>Requests from Users</h1>
                </div>
                <div class="card mb-3 ml-5">
                    <div class="row g-0">
                        <div class="col-md-12">
                        <div class="card-body ">
                            <h5 class="card-title my-2">Buyer Name</h5>
                           <p class="card-text">Subject: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <form id="demo-3" className='my-5'>
                                <input type="search" placeholder="Search Seller"/>
                                </form>
                        </div>
                        <button class="btn btn-secondary"  onClick={() => setModalShow(true)}>
                                See Details
                                </button>
                        </div>
                    </div>
                    </div>
                    <div class="card mb-3 ml-5">
                    <div class="row g-0">
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title my-2">Buyer Name</h5>
                           <p class="card-text">Subject: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <form id="demo-3" className='my-5'>
                                <input type="search" placeholder="Search Seller"/>
                                </form>
                        </div>
                        <button class="btn btn-secondary"  onClick={() => setModalShow(true)}>
                            See Details
                            </button>
                        
                        </div>
                    </div>
                    </div>
                   


                </div>

            </div>

            <Modal
        show={modalShow}
        onHide={()=>setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        
      
        
      </Modal>
        </div>
    )
}

export default AdminRequest
