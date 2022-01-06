import React, { useState,useEffect } from 'react'
import ReviewModal from './review_modal';
import Popup from "./raiset";
import { Link } from "react-router-dom";
import Popup2 from "./cancel";
import Popup3 from "./return";
import './orders.css' 
function Productcard(props) {
  
    const [currentValue, setCurrentValue] = useState(2);
    const [productdata,setproductdata]=useState([])
    const [sub,setSub]=useState("")
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const getdata=async()=>{
        const res=await fetch(`https://seller.seventhsq.com/inventory/api/inventory_detail/${props.id}`);
        const data= await res.json();
        console.log(data);
        setproductdata(data);
        
      //   productdata.sort(function (a, b) {
      //   var textA = a.name.toUpperCase();
      //   var textB = b.name.toUpperCase();
      //   return textA < textB ? -1 : textA > textB ? 1 : 0;
      // });
        
    
    }
      const modalOpen = (sub) => {
    setSub(sub)

    setModalShow(true)
  }
    const ab= (e)=>{
      console.log(e)
      // window.location.href = "https://seventhsq.com/Order_sum_i/149";
  
      if(e==="cancel"){
        setModalShow2(true)
      }
      if(e==="feed"){
        setModalShow5(true)
      }
      if(e==="return"){
        setModalShow3(true)
      }
      

        // setModalShow(true) 
        // const ans =(document.getElementById("carss")
        // console.log(ans);
        //  if(ans==="cancel"){
        //     setModalShow(true)
        // }
        }
    
    useEffect(()=>{
        getdata();
    },[])

    return (
   
        <tr  key={productdata.orderid} style={{ height:"70px",backgroundColor:"#F5F5F5"}}>
          
      <td scope="row" key={productdata.orderid} >
      <Link  to={"/Order_sum_i/"+props.orderid} >
     <div style={{fontColor:"red",color:"black",fontWeight:"600",fontSize:"20px"}}> {props.orderid}</div>  </Link>
      </td>

 
 
      <td key={productdata.id}style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}><Link to={"/product/"+productdata.id}><div style={{fontColor:"red",color:"black",fontWeight:"600",fontSize:"15px"}}>{productdata.name}</div></Link></td>
      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>₹ {productdata.sellingPrice}/{productdata.qtyUnit}</td>
      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>{props.pq}</td>
      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>{props.datee}</td>
      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>{props.status ?"Paid":"unPaid"} </td>
      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}}>₹ {props.paid}</td>


      <td key={productdata.id} style={{fontColor:"red",color:"black",fontWeight:"400",fontFamily:"open sans",fontSize:"15px",textAlign:"center"}} >

          <button class="btn btn-secondary mb-2" onClick={() => modalOpen(props.orderid)}>
          Raise Ticket
          </button>

          <Link  to={"/Order_sum_i/"+props.orderid} >
          <button class="btn btn-secondary mb-2">
          View Summary
          </button>
          </Link>

          
          <select onChange={e=>ab(e.target.value)}>

          <option value="cancel" >Choose Action </option>   
          <option value="cancel" > Cancel Order </option>   
          <option value="raise">Raise Ticket</option>
          <option value="down">Download Invoice </option>

          <option value="feed">Give Feedback </option>
          <option value="return"> Request Return </option>
        </select>
        </td>

        <ReviewModal
 show={modalShow5}
 productid={productdata.id}
 onHide={() => setModalShow5(false)}
 orderid={props.orderid}
 /> 
        <Popup show={modalShow} onHide={() => setModalShow(false)}sub={sub}  />
        <Popup2 show={modalShow2} onHide={() => setModalShow2(false)} />
        <Popup3 show={modalShow3} onHide={() => setModalShow3(false)}/>


    </tr>

    )
}

export default Productcard
