import React from 'react';
import '../Enquiry/Enquiry.css'
import { useState, useEffect } from 'react';
import View_details from "./View_details";
import Send_message from "./Send_message";
import Edit_enquiry from "./Edit_Enquiry";
import Swal from 'sweetalert2'
import { BrowserRouter as Router, Link } from "react-router-dom"; 




import Table from 'react-bootstrap/Table'



function Enquiry() {
  const[orderdata,setdata]=useState([]);
  const[PO,setPO]=useState([]);
  const [RfqmodalShow, setRfqModalShow] = useState(false);
  const [MessageShow, setMessageShow] = useState(false);
  const [EditMessageShow, setEditMessageShow] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [Message, setMessage] = useState("");
  const [now, setnow] = useState("");
  const [rfid, setrfid] = useState("");
  const [sellerid, setsellerid] = useState("");
  const [detailss, setdetailss] = useState("");
  const [userdata, setuserdata] = useState("");

  
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
  const Accept_quote = async (id,product_id) => {
    console.log("yes accpet here")
    const response = await fetch(
      `https://seller.seventhsq.com/inventory/api/inventory_detail/${product_id}`
    );
    const res = await fetch(`https://api.seventhsq.com/enquiry/buyer/accept/${id}`);
    console.log(res.status)

    // const data = await res.json();
    
    // console.log("accept data")
    // console.log(data)
    if(res.status=="200"){

      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Quotation Accepted', 
      }).then(() => {
        window.location.reload();
    });
    }

  }
  const Accept_quote_PO = async (id,product_id) => {
    console.log("yes accpet here")
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);

    // const res = await fetch(`https://api.seventhsq.com/enquiry/buyer/accept/${id}`);
    const res = await fetch(`https://api.seventhsq.com/enquiry/buyer/approve/${id}`,config);
    console.log(res)

    // const data = await res.json();
    
    // console.log("accept data")
    // console.log(data)
    if(res.status=="200"){

      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Quotation Approved', 
      }).then(() => {
        window.location.reload();
    });
    }

  }
  const Reject_quote = async (id) => {
    console.log("yes accpet here")
    const res = await fetch(`https://api.seventhsq.com/enquiry/buyer/reject/${id}`);
    console.log(res.status)

    // const data = await res.json();
    
    // console.log("accept data")
    // console.log(data)
    if(res.status=="200"){

      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Quotation Reject', 
      }).then(() => {
        window.location.reload();
    });
    }

  }
  const Delete_quote = async (id) => {
    console.log("yes accpet here")
    const res = await fetch(`https://api.seventhsq.com/enquiry/buyer/delete/${id}`);
    console.log(res.status)

    // const data = await res.json();
    
    // console.log("accept data")
    // console.log(data)
    if(res.status=="200"){

      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Quotation Deleted', 
      }).then(() => {
        window.location.reload();
    });
    }

  }



  const handlechange=(e,ok,id,selerid)=>{
		// let name=e.target.name 
		let value=e.target.value  

    console.log("ok")
    console.log(ok)

    // console.log("value")
    // console.log(value)
    // console.log(e)
		if(value=='sendm'){
      setMessageShow(true)
      setnow(ok)
      console.log("send m")
      console.log(ok)
		}
		if(value=='viewdetail'){
      setRfqModalShow(true)
      setdetailss(ok)
      console.log(ok)
      setsellerid(selerid)
		}
		if(value=='edit'){
      setEditMessageShow(true)
      setdetailss(ok)
      console.log(ok)
      setsellerid(selerid)
      setrfid(id)

		}
		if(value=='chats'){
      // get_chats(sellerid, id)
      setEditMessageShow(true)
      setdetailss(ok)
      console.log(ok)
      setsellerid(selerid)
      setrfid(id)

		}
		if(value=='Accept'){
      setrfid(id)
      console.log("I am inside accept")

      Accept_quote(id) 

		}
		if(value=='Reject'){
      setrfid(id)
      console.log("I am inside accept")

      Reject_quote(id) 

		}
		if(value=='Approved'){
      setrfid(id)
      console.log("app id")
      console.log(ok)
      console.log("I am inside accept")

      Accept_quote_PO(ok) 

		}
		if(value=='Delete'){
      setrfid(id)
      console.log("I am inside accept")

      Delete_quote(id) 

		}
	  
	 }

  // const sel =(id)=>{
  //   setMessageShow(true)
  // }
  const getdata=async()=>{
    
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
   
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/orders/enquiry/all/',config);
    const data= await res.json();
    console.log(typeof(data));
    
    setdata(data);
    
  
}
  const getPO=async()=>{
    
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
   
    console.log(config);
    const res=await fetch(`https://api.seventhsq.com/enquiry/get_po/`,config);
    const data= await res.json();
    console.log("PO data");
    console.log(data);
    setPO(data);
    
  
}
useEffect(()=>{
  getdata();
  getuser();
  getPO();
},[])
    return (
      <>

      <div style={{overflowX:"auto"}}>

      <div className="requests py-3 container">
      <h1 className="mx-5 my-5 text-center" style={{fontFamily:"crimson text",fontSize:"35px"}}>Purchase Orders</h1>

      <div className="">
        <Table class="table table-hover">
          <thead class="thead">
            <tr>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px", height:"20px"}}>P.O. number</th>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px", height:"20px"}}>Date Issued</th>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"left",width:"250px"}}> Items</th>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px"}}>Order Value</th>
              <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"120px"}}>Valid Till </th>
              <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"100px"}}>Action </th>
            </tr>
          </thead>
 
          <tbody style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>
            {PO
              ? PO.map((curr, index) => {
         
                  return (
                    <>
                
                        <tr> 
                          <td> {curr.id}</td>
                          <td>{curr.created_at.slice(8,10)}-{curr.created_at.slice(5,7)}-{curr.created_at.slice(0,4)}</td>
                          {/* <td><Link to='checkout_po' state={{name:'75'}}> Make Payment</Link></td> */}

                          <td style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"left",wordBreak: "normal"}}> {curr.product_name}</td>
                         { curr.Seller_tax_inclusive?
                         <td> ₹{((Number(curr.Quantity_Required) * Number(curr.Seller_Sale_Price))).toFixed(2)}</td>:
                         <td>₹ {(Number(curr.Quantity_Required*Number(curr.Seller_Sale_Price)) *  (Number(1)+(Number(curr.Seller_tax_code)/100))).toFixed(2)}</td>
                        }
                          <td>{curr.po_expiring_at.slice(8,10)}-{curr.po_expiring_at.slice(5,7)}-{curr.po_expiring_at.slice(0,4)} 11:59 PM</td>

                        {!curr.PO_success?

                          <td> <select onChange={(e) => handlechange(e,curr.rfq_id, curr.id,curr.id  )}>
                            <option value = "choose">Choose Action</option>
                            <option value ="Approved">Approve</option>
                            <option value ="rejectpo">Reject </option> 
                            {/* <option value ="make_payment">Make Payment</option> */}
                            </select>
                            </td>:
                             <td ><Link  to={{    pathname: `/checkout_po/`, state: curr.rfq_id  }} style={{color:"red !important",background:"black"}}>  <span style={{color:"red !important",background:"black"}}>Make Payment</span> </Link></td>

                        }
 

 
                        </tr>
                      
                     
         </>
                                
                );
                
                })
              : null}


            {/*  */}
          </tbody>
        </Table> 
        </div>
      </div>
      
   

      {/* <Helmet>
  <title>Customer Support Seventh Square </title>
  <meta name="description" content="Login Seventh Square" />
</Helmet> */}

  <div style={{justifyContent: "center", alignItems:"center",display: "flex"}} className=" requestForQuote">
    <div className="requests py-3">
      <h1 className="mx-5 my-5 text-center" style={{fontFamily:"crimson text",fontSize:"35px"}}>My Enquiries</h1>

      <div className="">
        <Table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px", height:"20px"}}>Enquiry No.</th>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"150px"}}> Enquiry Type</th>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"150px"}}>Enquiry Date</th>
              <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"120px"}}>Status </th>
              <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px"}}>View Details</th>
              <th scope="col" style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"100px"}}>Action </th>
            </tr>
          </thead>
 
          <tbody style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>
            {orderdata
              ? orderdata.map((curr, index) => {
         
                  return (
                    <>
                      
                        <tr> 
                          <td> {curr.id}</td>
                          <td> Request for Quote</td>
                          <td> {curr.created_at.slice(8,10)}-{curr.created_at.slice(5,7)}-{curr.created_at.slice(0,4)}</td>
                          <td> {curr.Status_data}</td>
                          <td> 
                            <button className="btn btn-dark" value = "viewdetail"onClick={(e) => handlechange(e,curr,curr.id,curr.seller)}>View Details</button>
                          
                          </td>

                          <td> <select onChange={(e) => handlechange(e,curr,curr.id)}>
                            <option value = "choose">Choose Action</option>
                            <option value ="edit">Edit Enquiry</option>
                            <option value ="sendm"> Send Message </option>
                            <option value ="Accept">  Accept Quote </option>
                            <option value ="Reject">Reject Quote </option>
                            <option value ="Delete">Delete Enquiry</option>
                            </select></td>
 

 
                        </tr>
                

    { 
      RfqmodalShow &&
      <View_details
      show={RfqmodalShow}
      // users={users}
      alldata={detailss}
      users={userdata}
      selid= {sellerid}
      rfid= {rfid}
      onHide={() => setRfqModalShow(false)}
    />
    }
    {
      EditMessageShow && 
      <Edit_enquiry
      show={EditMessageShow}
      // users={users}
      alldata={detailss}
      users={userdata}
      selid= {sellerid}
      rfid= {rfid}
      onHide={() => setEditMessageShow(false)}
    />
    }

    {
       MessageShow && 

      <Send_message
      alldata={detailss}

      show={MessageShow}
      now = {now}
      users={userdata}
      
      onHide={() => setMessageShow(false)}
    />
    }
         </>
                                
                );
                
                })
              : null}


            {/*  */}
          </tbody>
        </Table> 
        </div>
      </div>
    </div>
    </div>



            <div className='mt-5 mx-5 mb-5 px-5'>
            <button type="submit" class="btn btn-dark"><a href="/requestQuotation">Raise Enquiry</a></button>
           
            </div>


              </>
    )
}

export default Enquiry
