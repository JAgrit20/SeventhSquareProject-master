import React, { useState,useEffect } from 'react'
import ReviewModal from './review_modal';
import './orders.css'
function Productcard(props) {
    const [productdata,setproductdata]=useState([])
    const [modalShow, setModalShow] = useState(false);
    const getdata=async()=>{
        const res=await fetch(`https://seller.seventhsq.com/inventory/api/inventory_detail/${props.id}`);
        const data= await res.json();
        console.log(data);
        setproductdata(data);
        
    
    }
    useEffect(()=>{
        getdata();
    },[])

    return (
        <div>
        <div class="card mb-5 mx-5 px-3" >
<div class="row no-gutters">
 <div class="col-md-4">
   <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img" alt="..."/>
 </div>
 <div class="col-md-4">
   <div class="card-body">
     <h4 class="card-title fw-bold">{productdata.name}</h4>
     <p class="mb-2 fw-bold">
     Price :{" "}
     <span class="text-underline text-danger text-decoration-line-through">{productdata.markedPrice}</span>{" "}
     <span class="text-success"> ₹{productdata.sellingPrice}</span>
     </p>
     <p class="mb-2  fw-bold">{productdata.description} </p>
     <p class="mb-2  fw-bold">Quantity : {productdata.qty}</p>
     <p class="mb-2  fw-bold">
      Delivery :{" "}
     <span >{props.estdelivery}</span>{" "}
     </p>
    
     
     <p class="mb-2  fw-bold">Order Status : {props.status.toString()} </p>
     
     <p class="mb-2  fw-bold">
        Seller :{" "}
        <span >{productdata.aboutBrand}</span>{" "}
        </p>
     
     
     {/* <p class="mb-2 mx-1 fw-bold">
     <button onClick={()=>setModalShow(true)}><a href="#">Review</a>{" "}</button>
     </p> */}
   </div>
 </div>
 <div class="col-md-4">
 <div class="card-body">
    
    
    
     
    
     <h5 class="mb-2 mx-1 fw-bold">
     <a href="/">Order Id : {props.orderid}{" "}</a>{" "}
     </h5>
     
    
     
     
     <p class="mb-2 mx-1 fw-bold">
     <a href="/">Product details</a>{" "}
     </p>
     <p class="mb-2  fw-bold">
     <a href="/">Invoice No. : 1 </a>{" "}
      </p>
      <p class="mb-2  fw-bold">
     <a href="/">Request return </a>{" "}
      </p>
     <p class="mb-2 mx-1 fw-bold">
     <button onClick={()=>setModalShow(true)}><a href="#">Review</a>{" "}</button>
     </p>
   </div>
 </div>
</div>
</div>
 <ReviewModal
 show={modalShow}
 productid={productdata.id}
 onHide={() => setModalShow(false)}
 orderid={props.orderid}
 /> 
     </div>
    )
}

export default Productcard
