import React from 'react'
import '../Enquiry/Enquiry.css'
function Enquiry() {
    return (
        <div className='enquiry'>
            <h1 className='mx-5 my-5 text-center'>
                Enquiries
            </h1>
            <div className='table-responsive-md px-5 mx-5'>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">Enquiry Type</th>
      <th scope="col">Date Raised</th>
      <th scope="col">Responses</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
     <tr>
      <th scope="row">6</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>


            </div>
            <div className='mt-5 mx-5 mb-5 px-5'>
            <button type="submit" class="btn btn-dark"><a href="/requestQuotation">Raise Enquiry</a></button>
           
            </div>
            
        </div>
    )
}

export default Enquiry
