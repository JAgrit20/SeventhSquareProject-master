import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, router } from "react-router-dom";
import axios from "axios";
import "./cart.css";


// import "product.css" 



function View_details(props) {
  const style = {
display:"contents"
  }

  const [location, setlocation] = useState('')
  const [qty, setqty] = useState('')
  const[imagedata,setimage]=useState([]);

  const [description, setdescription] = useState('')
  const [plotno, setplotno] = useState('')
  const [pincode, setpincode] = useState('')
  const [statee, setstatee] = useState('')
  const [city, setcity] = useState('')
  const [users, setUsers] = useState([]);

  const [userdata, setuserdata] = useState([])
  const [chatdata, setchatdata] = useState([])
  const [Fromdate, setFromDate] = useState(new Date());
  const [Todate, setToDate] = useState(new Date());
  // console.log(props?.users) 

  const get_chats = async  () => {


        console.log('get_chats running');
        console.log(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.alldata.id}`);
        // console.log(props.alldata.seller);

      // const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.alldata.id}/${props.alldata.id}`);
      const res = await fetch(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.alldata.id}`);
      const data = await res.json();
      console.log("char")
      // console.log(props)
      console.log(data)

      setchatdata(data)
      
      
    
  };

  const getimages=async()=>{
    const res=await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.alldata.product_id}`);
    const data= await res.json(); 
    setimage(data[0].picture); 
}

const getUsers = async () => {
  // console.log(`id${NewID}`);
  const response = await fetch(
    `https://seller.seventhsq.com/inventory/api/inventory_detail/${props.alldata.product_id}`
  );
  setUsers(await response.json());
  console.log( "response.data");
}

  const getuser = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/user_profile/get_profile/', config);
    const data = await res.json();

    setuserdata(data.user);
    console.log("userdata");
    console.log(userdata);

  }

  useEffect(() => {
    getuser();
    getUsers();
    get_chats();
  getimages();

  //   axios.get(`https://api.seventhsq.com/enquiry/seller/get/response/chats/${props.selid}/${props.rfid}`).then(res=>{
  //     console.log("res.data")
  //     console.log(res.data)
  //     setchatdata(res.data)

  // })
    // get_chats(); 
   
  }, [])

  return (
    <div style={style} >
      <div >


      <Modal
      // style={{display:"content"}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        dialogClassName="modal-width"
        
    
      >
        {/* <style>
        .modal-dialog{
          width:"400px" !important;
        } 
        </style> */}

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:"crimson text", fontWeight:"800"}}>
          ENQUIRY DETAILS
          </Modal.Title>
        </Modal.Header>


       
            <div class="col mt-4">
            <h6 ></h6>
            <h4 >  <span style={{fontWeight:"700",textDecoration: "underline",fontFamily:"open sans"}} >Enquiry Details:  </span></h4>

          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"baseline"}}> 
          <div className="col-sm-6">
          <h5 > <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px"}}> Quantity Required: </span> </h5>

          </div>
          <div className="col-sm-6">
          <h6 ><span style={{fontWeight:"200",fontFamily:"open sans",fontSize:"14px"}}>{props.alldata.Quantity_Required} &nbsp; {props.alldata.Quantity_Unit}</span></h6>

          </div>
          </div>
          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"baseline"}}> 
          <div className="col-sm-6">
          <h5 >
          <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px"}}>Delivery Timeline:</span>  </h5>

          </div>
          <div className="col-sm-6">
          <h6 ><span style={{fontWeight:"200",fontFamily:"open sans",fontSize:"14px"}}>Earliest By: {props.alldata.delivery_from.slice(0,10)}  Latest By: {props.alldata.delivery_to.slice(0,10)} </span></h6>


          </div>
          </div>
          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"baseline"}}> 
          <div className="col-sm-6">
          <h5 >
             <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px"}}>Delivery Address: </span>
            </h5>

          </div>
          <div className="col-sm-6">
          <h6 ><span style={{fontWeight:"200",fontFamily:"open sans",fontSize:"14px",wordWrap: "break-word"}}>{props.alldata.plotno}, {props.alldata.delivery_location}, {props.alldata.city}, {props.alldata.state}, {props.alldata.pincode} </span></h6>
          </div>
          </div>
          <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"baseline"}}> 
          <div className="col-sm-6">

          <h5 >  

          <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px"}}>Comments: </span>
          </h5>

          </div>
          <div className="col-sm-6">
          <h6 ><span style={{fontWeight:"200",fontFamily:"open sans",fontSize:"14px"}}>{props.alldata.desc} </span></h6>
          </div>
          </div>
            {/* <h4 > <span style={{fontWeight:"700",fontFamily:"open sans"}}> Quantity Required: </span> {props.alldata.Quantity_Required}</h4> */}
            {/* <h4 > <span style={{fontWeight:"700",fontFamily:"open sans"}}>Delivery TImeline: </span> {props.alldata.delivery_location}</h4> */}
            {/* <h4 > <span style={{fontWeight:"700",fontFamily:"open sans"}}></span> </h4> */}
            {/* <h4 >  <span style={{fontWeight:"700",fontFamily:"open sans"}}>Comments:  </span>{props.alldata.desc}</h4> */}
            <h4 style={{fontWeight:"700",fontFamily:"open sans",textDecoration: "underline", marginTop:"10px", marginBottom:"10px"}}  >  <span style={{fontWeight:"700",fontFamily:"open sans",textDecoration: "underline", marginTop:"20px"}} >Product Details:  </span></h4>

            <div
              class="
                col-md-4 col-11
                mx-auto
                d-flex
                justify-content-center
                product_img"
            >
              <img  src={'https://seller.seventhsq.com/'+imagedata} class="img-fluid shadow-sm" alt="cart img" />
             
            </div>
              
            <div class="row">
                <div class="col-12 card-title">

                                <p class="mb-1"style={{fontWeight:"200",fontFamily:"open sans"}}>
            <h4 >  <span style={{fontWeight:"700",fontFamily:"open sans"}}>{users.name}</span></h4>
            <h4 >  <span style={{fontWeight:"700",fontFamily:"open sans"}}>{users.brand_name}</span></h4>

                   
                  </p>
                
       

                  
                </div>
                </div>
          <h4>
              <p style={{fontWeight:"700",textDecoration: "underline",fontFamily:"open sans"}} > &nbsp; </p>
            </h4>
            {
              props.alldata.Seller_MRP?
            <div class="row">
            <p style={{fontWeight:"700",textDecoration: "underline" ,fontSize:"14px", color:"black",fontFamily:"open sans"}} >Quote & Comments  </p>
                <div class="col-12 card-title">

                                <p class="mb-1"style={{fontWeight:"200",fontFamily:"open sans"}}>
              <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px", color:"black"}}>MRP:</span>
              <span style={{fontWeight:"100",fontFamily:"open sans",marginLeft:"10px",fontSize:"14px"}}>INR {props.alldata.Seller_MRP}</span>
          <span style={{fontWeight:"700",fontFamily:"open sans",fontSize:"14px",marginLeft:"100px", color:"black"}}>Sale Price: </span>
          <span style={{fontWeight:"100",fontFamily:"open sans",marginLeft:"10px",fontSize:"14px"}}>INR {props.alldata.Seller_Sale_Price}</span>
          <p>
          <span style={{fontWeight:"700",fontSize:"14px", color:"black",fontFamily:"open sans"}}>Tax Code:  </span>

          <span style={{fontWeight:"100",fontSize:"14px",fontFamily:"open sans"}}>{props.alldata.Seller_tax_code} % </span>
          </p>
          <span style={{fontWeight:"100",fontSize:"14px",fontFamily:"open sans"}}>(Sale rice is{props.alldata.Seller_tax_inclusive? <span  style={{fontWeight:"700",fontSize:"14px", color:"black"}}> Inclusive</span>  :<span  style={{fontWeight:"700",fontSize:"14px", color:"black"}}>  Exclusive </span> }  of  Taxes and{props.alldata.Seller_ship_inclusive? <span  style={{fontWeight:"700",fontSize:"14px", color:"black"}}>  Inclusive  </span> : <span  style={{fontWeight:"700",fontSize:"14px", color:"black"}}>  Exclusive </span> }   of shipping) </span>

                   
                  </p>
       
                </div>
                </div>:<div></div> 

            }
{chatdata.length? <h4 >  <span style={{fontWeight:"700",fontFamily:"open sans"}}>Responses:  </span></h4>:null
}

            {/* <img  src={'https://seller.seventhsq.com/'+imagedata} class="img-fluid shadow-sm" alt="cart img" /> */}

            {/* <button onClick={() => get_chats()} className="btn btn-dark">SHow chats</button> */}
           <div style={{justifyContent:"center",alignItems:"center",fontFamily:"open sans"}}> 
           {chatdata
              ? chatdata.map((curr, index) => {
         
                  return (
                    <>
{
curr.replyed_by_buyer?
<div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<div class="col-12 card-title">


 <span style={{fontWeight:"700",fontSize:"14px"}}>You:</span> <span style={{fontWeight:"200",fontSize:"14px"}}>&nbsp;{curr.message} </span>
</div>
</div>:<div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<div class="col-12 card-title">

<span style={{fontWeight:"700",fontSize:"14px"}}>Seller:</span> <span style={{fontWeight:"200",fontSize:"14px"}}> &nbsp;{curr.message}</span>
</div>

{/* <h4>{curr.message}</h4>
<h4>{curr.sent_at.slice(0,10)},{curr.sent_at.slice(11,19)}</h4> */}
</div>
}
         </>
                                
                );
                
                })
              : <div class="">
              
                  </div>}

           </div>
          

              {/* <Form.Control type="text" placeholder="Quantity Required" name='q_req' onChange={handlechange} /> */}
              {/* <Form.Control type="text" placeholder="Delivery Timeline" name='time' onChange={handlechange} /> */}

            </div>




        <Modal.Footer>
{/* <button>CLose</button> */}

        </Modal.Footer>
      </Modal>

    </div>
    </div>
  )
}

export default View_details