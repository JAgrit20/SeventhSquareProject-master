import React from 'react'
import './payustyles.css'
function Failure() {
    return (
        <div>
              <div class="d-flex justify-content-center align-items-center my-5">
             <div class="card border-S mb-3  failure-box" >
                <div class="card-header">Transition Status</div>
                <div class="card-body text-danger">
                    <h4 class="card-title">Payment was Failed</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                           <p>Amount</p>
                           <p>ProductID</p>
                           <p>Mobile</p>
                           <p>Transaction ID</p>
                           <p>Bank</p>
                        </div>
                        <div className='col-md-6'>
                            <p>1000</p>
                            <p>0</p>
                            <p>0435345345</p>
                            <p>900</p>
                            <p>HDFC</p>
                        </div>

                    </div>
                </div>
                </div>

        </div>
            
        </div>
    )
}

export default Failure
