import React from 'react'
import Popup from './Modal';
import "./Request.css"

function Request() {
  const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="container m-4 requestForQuote">
            
            
<div className='requests py-3'>
            <h1 className='mx-5 my-5 text-center'>
                Customer Service Requests
            </h1>
            <div className='table-responsive-md px-2 ml-5'>
            <table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ticket no.</th>
      <th scope="col">Subject</th>
      <th scope="col">Date Raised</th>
      
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
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      
    </tr>
  
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      
     <tr>
      <th scope="row">6</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      
    </tr>
  </tbody>
</table>
<button class="btn btn-secondary"  onClick={() => setModalShow(true)}>
  Raise Request
</button>
    <Popup
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
        </div>
        </div>
        </div>
    )
}

export default Request;
