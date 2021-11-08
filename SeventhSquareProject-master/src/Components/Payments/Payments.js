import React from 'react'
import '../Product/product.css'
import { FaArrowDown } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import '../Payments/Payment.css'
function Payments() {
    return (
        <div className='payments my-5'>
            <h1 className='mx-5'>Your Payments Options</h1>
            <h5 className='mx-5'>An overview of your payments methods with us</h5>
            <h3 className='mx-5 my-5'>Your saved debit and credit Cards</h3>
            <div className='container my-5'>
            <div className='container'>
            <div className='col-md-6 col-sm-12'>
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title1"
              />
               <label className="productAccordianLabel" for="title1">
               <h5>State Bank of India Debit Card ening in 0431</h5>
              
                 <span>
                   <FaArrowDown />
                 </span>{" "}
                 {/* <span className='mx-5 pb-5'>
                    <FaCcVisa size={20}/> 
                 </span> */}
               </label>
               <div class="accordianContent">
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Name on Card</h4>
                       <h5>Jay Sharma</h5>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Billing Address</h4>
                       <h5>B-112,Narayan vihar , Jaipur</h5>
                       <h4 className='mt-5'>Expiry Date</h4>
                       <h5>3/11/2000</h5>
                    </div>

                </div>
                
              </div>

             

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title2"
              />
              
                <label className="productAccordianLabel" for="title2">
                <h5>State Bank of India Debit Card ening in 0421</h5>
                <span>
                   <FaArrowDown />
                 </span>{" "}
                 {/* <span className='mx-5 pb-5'>
                    <FaCcVisa size={20}/> 
                 </span> */}
                </label>
  
                <div class="accordianContent">
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Name on Card</h4>
                       <h5>Jay Sharma</h5>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Billing Address</h4>
                       <h5>B-112,Narayan vihar , Jaipur</h5>
                       <h4 className='mt-5'>Expiry Date</h4>
                       <h5>3/11/2000</h5>

                    </div>

                </div>
                </div>
                  
             
              
             
              
            </div>
            </div>
            </div>
            <h3 className='mx-5 my-5'>Your Bank Accounts</h3>
            <div className='container my-5'>
            <div className='container'>
            <div className='col-md-6 col-sm-12'>
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title3"
              />
               <label className="productAccordianLabel" for="title3">
               <h5>Saved Bank Account</h5>
              
                 <span>
                   <FaArrowDown />
                 </span>{" "}
                 {/* <span className='mx-5 pb-5'>
                    <FaCcVisa size={20}/> 
                 </span> */}
               </label>
               <div class="accordianContent">
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Account Owner</h4>
                       <h5>Jay Sharma</h5>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                       <h4>Account Number</h4>
                       <h5>3274382469382</h5>
                       <h4>Branch</h4>
                       <h5>FSjjh235235</h5>
                       <h4>IFSC</h4>
                       <h5>FSjjh235235</h5>
                    </div>

                </div>
                
              </div>
                           
            </div>
            </div>
            </div>
            <h1 className='mx-5'>Add a new Payment Method</h1>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-md-4'>
                       <button class="btn btn-secondary">Add Debit or Credit Card</button>
                    </div>
                    <div className='col-md-1'>
                    <div className="d-flex justify-content-end">
                    <FaCcVisa size={20}/> 
                      <FaCcMastercard size={20}/> 

                    </div>
                    </div>
                </div>
                {/* <div className='row'>
                  <div className='col-md-6'>
                  <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Card Number</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
 
  <button type="submit" class="btn btn-dark">Submit</button>
</form>
                  </div>
     
                </div> */}

            </div>
           
            
        </div>
    )
}

export default Payments
