import React from 'react'
import '../Enquiry/Enquiry.css'
import { useState, useEffect } from 'react';
import View_details from "./View_details";
import Send_message from "./Send_message";

import Table from 'react-bootstrap/Table'



function Enquiry() {
  const[orderdata,setdata]=useState([]);
  const [RfqmodalShow, setRfqModalShow] = useState(false);
  const [MessageShow, setMessageShow] = useState(false);
  const [Message, setMessage] = useState("");
  const [now, setnow] = useState("");
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

  const handlechange=(e,ok)=>{
		// let name=e.target.name 
		let value=e.target.value 

    // console.log("value")
    // console.log(value)
    // console.log(e)
		if(value=='sendm'){
      setMessageShow(true)
      setnow(ok)
      console.log(ok)
		}
		// if(name=='time'){
		//    settime(value)
	  //  }
    //     if(name=='description'){
    //     setdescription(value)
    //     }
    //     if(name=='product'){
    //         setproduct(value)
    //         }
    //     if(name=='quantity'){
    //         setquantity(value)
    //         }
    //     if(name=='category'){
    //         setcategory(value)
    //         }
    //     if(name=='brand'){
    //         setbrand(value)
    //         }
	  
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
    console.log(data);
    setdata(data);
    
  
}
useEffect(()=>{
  getdata();
  getuser();
},[])
    return (
      <>

      <div style={{overflowX:"auto"}}>
      {/* Customer Support Seventh Square */}
      {/* <Helmet>
  <title>Customer Support Seventh Square </title>
  <meta name="description" content="Login Seventh Square" />
</Helmet> */}

  <div style={{justifyContent: "center", alignItems:"center",display: "flex"}} className=" requestForQuote">
    <div className="requests py-3">
      <h1 className="mx-5 my-5 text-center" style={{fontFamily:"crimson text",fontSize:"35px"}}>My Enquiries</h1>
      {/* <span
                style={{
                  fontWeight: 500,
                  fontSize: "14px",
                  marginLeft: "10px",
                  marginRight: "4px",
                  fontFamily: "open sans",
                  clear: "both",
                  display: "inline-block",
                  overflow: "hidden",
                  paddingRight: "45px",
                  whiteSpace: "nowrap",
                }}
              >
                Sort By
              </span>

              <select
                id="htl"
                class="form-select"
                style={{ fontSize: "15px !important" }}
              >
                <option
                  value="date"
                  name="date"
                  style={{ fontSize: "15px !important" }}
                >
                date
                </option>
                <option
                  value="Status"
                  name="Status"
                  style={{ fontSize: "15px !important" }}
                >
         Status
                </option>
                <option
                  value="Amount"
                  name="Amount"
                  style={{ fontSize: "15px !important" }}
                >
              Amount
                </option>
              </select> */}

{/* style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px"}} */}
      <div className="">
        <Table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col"style={{fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center",width:"70px", height:"20px"}}>Order no.</th>
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
                          <td> {curr.created_at.slice(0,10)},{curr.created_at.slice(11,19)}</td>
                          <td> {curr.Status}</td>
                          <td> <button className="btn btn-dark" onClick={() => setRfqModalShow(true)}>View Details</button></td>

                          <td> <select onChange={(e) => handlechange(e,curr.id)}>
                            <option value = "choose">Choose Action</option>
                            <option>Edit Enquiry,</option>
                            <option value ="sendm"> Send Message </option>
                            <option>  Accept Quote </option>
                            <option>Reject Quote </option>
                            <option>Delete Enquiry</option>
                            </select></td>
 

 
                        </tr>
      
      <View_details
      show={RfqmodalShow}
      // users={users}
      id={curr.id}
      create= {curr.created_at.slice(0,10)}
      alldata = {curr} 

      onHide={() => setRfqModalShow(false)}
    />
      <Send_message
      show={MessageShow}
      id = {now}
      users={userdata}
      onHide={() => setMessageShow(false)}
    />
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
