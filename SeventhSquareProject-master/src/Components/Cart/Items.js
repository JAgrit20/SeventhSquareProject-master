import React  from "react";
import { CartContext } from "../../App";
import "./cart.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Items = ({
  id,
  title,
  image,
  oldprice,
  newprice,
  pcksize,
  estdelivery,
  price,
  quantity,
item,
incrementcart,
decrementcart,
removecart,
gst,
seller,
Category,
subCategory,
incl_gst,
brand,
category,
subcategory,
var_id


}) => {
  
  const[imagedata,setimage]=useState([]);
  const[usertoken,setusertoken]=useState();
  const[priceq,setprice]=useState(0);
  
  
  const getimages=async()=>{
      const res=await fetch(`https://seller.seventhsq.com/inventory/api/picture/${item}`);
      const data= await res.json(); 
      setimage(data[0].picture); 
  }
  const invalid=()=>{
    window.alert('Login First!')
  }


useEffect(()=>{
 
  getimages();
  const token= localStorage.getItem('token')
  setusertoken(token)
  if(incl_gst){
    console.log(incl_gst)
    // console.log("gst true run")
    let j=parseFloat(price)
    setprice(j)
  }else{

    let j=parseFloat(price)+parseFloat( (price*gst)/100)
    setprice(j)
  }
},[])

  return (
    <>
      <div>
        <div id="each_cart_block" class="cartcard p-2 shadow" >
          <div class="row ">
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

            <div class="col-md-8 col-8  px-2 mb-2 ">
              <div class="row">
                <div class="col-6 card-title">
                <Link  to={"/product/"   + item.toString()} >
                  <h5 class="h5 mb-3 product_name" style={{fontWeight:"200",fontFamily:"open sans"}}>{title}</h5>
                  </Link>    
                                <p class="mb-1"style={{fontWeight:"200",fontFamily:"open sans"}}>
                   
                    <span class="text-success"style={{fontWeight:"200",fontFamily:"open sans"}}>{brand} </span>{" "}
                  </p>
                
                  <p class="mb-1"style={{fontWeight:"200",fontFamily:"open sans"}}>Product Type : {category} {'>'} {subcategory} </p>
                
                  <p class="mb-1">
                    Price :{" "}
                    
                    <span class="text-underline text-danger"style={{fontWeight:"200",fontFamily:"open sans"}}>₹{oldprice}</span>{" "}
                    <span class="text-success"style={{fontWeight:"200",fontFamily:"open sans"}}>₹{price}</span>
                    {incl_gst ? (
                      <p>
                        
                      </p>
                    ) :  <span style={{color:"#555555"}}>{" "}(GST {gst} % Extra) </span>}
                  </p>

                
                  
                </div>

                <div class="col-6 cartselector">
                  <ul class="pagination justify-content-center set_quantity">
                    <div className="add-minus-quantity">
                      <i
                        className="fas fa-minus minus"
                        onClick={() =>usertoken? decrementcart(title,oldprice,pcksize,price,item,var_id):invalid()}
                      ></i>
                      <input type="text" placeholder={quantity} disabled />
                      <i
                        className="fas fa-plus add"
                        onClick={() => usertoken?incrementcart(title,oldprice,pcksize,price,item,var_id) :invalid()}
                      ></i>
                    </div>
                  </ul>
                </div>
                <div class="col-12 row deletePanel">
                  <div class="col-8 d-flex justify-content-between remove_wish mt-3">
                    <p style={{"fontSize":"12px"}} >
                      <i
                        class="fas fa-trash-alt"
                        onClick={() =>usertoken? removecart(title,oldprice,pcksize,price,item,var_id) :invalid()}
                      ></i>{" "}
                      Remove
                    </p>
                  </div>
                  <div class="col-5 d-flex justify-content-end price_money mt-3">
                  <button>
                    <p style={{"fontSize":"12px"}} >
                  <i
                        class="fa fa-heart"
                        // onClick={() =>usertoken? removecart(title,oldprice,pcksize,price,item) :invalid()}
                      ></i>{" "}
                      Move to Wishlist 
                    </p>
                  </button>
                    
                  </div>
                  <div>
<hr/>
                    <p id="total_cart_amt" style={{"fontSize":"14px",justifyContent: "end",display:"flex",paddingRight: "40px"}} > 
                  
  
                    Item Total :    ₹<span id="itemval">{Number(priceq) * Number(quantity)}</span>
                    </p>
                  </div>
                 
            
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
