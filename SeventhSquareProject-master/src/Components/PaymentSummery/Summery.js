import React from 'react'
import './Summery.css'
function Summery() {
    return (
        <div>
            <div class="container mainSummery">
<div class="row col-md-12">
    <div className="leftPanel col-md-3 shadow">
<p>Here You will get all the payment details</p>
        </div>
    <div class="col-12 col-md-8">
        <div class="card">
            <h2 className="mb-2">Your Payment Summary</h2>
            <div className="upperPanel">
                <tr>
                    <td width="230px">Settlement Amount</td>
                    <td width="230px">Account Balance</td>
                    <td width="230px">Next Transfer</td>
                </tr>
         
            </div>
            <div class="card-header">
            <tr>
                    <td width="630px">Filter Transaction</td>
                    <td width="200px">Download Statement</td>
            </tr>
            </div>
            <div class="card-body">
                <div class="table-responsive" id="proTeamScroll" tabindex="2" >
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>
                                    Payment Details</th>
                                <th>Received</th>
                                <th>Transferred</th>
                                <th>Status</th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <h6 class="mb-0 font-13">Amount Received for Order #110321 </h6>
                                </td>
                                <td>20-02-2018</td>
                                <td class="text-truncate">
                                20-02-2018
                                </td>
                                <td>
                                    <div class="badge-outline col-red">clear</div>
                                </td>
                                <td class="align-middle">
                                    <div class="progress-text">details</div>
                                    
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="table-img">1
                                </td>
                                <td>
                                    <h6 class="mb-0 font-13">Amount Received for Order #110321 </h6>
                                </td>
                                <td>20-02-2018</td>
                                <td class="text-truncate">
                                20-02-2018
                                </td>
                                <td>
                                    <div class="badge-outline col-red">clear</div>
                                </td>
                                <td class="align-middle">
                                    <div class="progress-text">details</div>
                                    
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Your Insights</h2>
            <div className="Insights">
            <div className="upperPanel">
            <tr>
                    <td width="230px">Product Revenue</td>
                    <td width="230px">Taxes Collected</td>
                    <td width="230px">Shipping Charged</td>
                </tr>
            </div>
            <div className="upperPanel">
            <tr>
                    <td width="230px">Returns</td>
                    <td width="230px">Return Expenses</td>
                    <td width="230px">Marketplace Fee Paid</td>
                </tr>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
        </div>
    )
}

export default Summery
