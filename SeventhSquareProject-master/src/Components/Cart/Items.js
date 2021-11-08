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
subCategory

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
  let j=parseFloat(price)+parseFloat( (price*gst)/100)
  setprice(j)
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

            <div class="col-md-8 col-11  px-2 ">
              <div class="row">
                <div class="col-6 card-title">
                <Link  to={"/product/"   + item.toString()} >
                  <h5 class="h5 mb-3 product_name">{title}</h5>
                  </Link>
                  <p class="mb-1">
                    Price :{" "}
                    <span class="text-underline text-danger">₹{oldprice}</span>{" "}
                    <span class="text-success">₹{price}</span>
                  </p>
                  <p class="mb-1">Category : {Category} pcs.</p>
                  <p class="mb-1">
                    Sub-Category :{" "}
                    <span class="text-success">{subCategory} </span>{" "}
                  </p>
                  <p class="mb-1">
                    Seller :{" "}
                    <span class="text-success">{seller} </span>{" "}
                  </p>

                  <button>
                    <p>
                      Move to Wishlist
                    </p>
                  </button>
                  
                </div>

                <div class="col-6 cartselector">
                  <ul class="pagination justify-content-center set_quantity">
                    <div className="add-minus-quantity">
                      <i
                        className="fas fa-minus minus"
                        onClick={() =>usertoken? decrementcart(title,oldprice,pcksize,price,item):invalid()}
                      ></i>
                      <input type="text" placeholder={quantity} disabled />
                      <i
                        className="fas fa-plus add"
                        onClick={() => usertoken?incrementcart(title,oldprice,pcksize,price,item) :invalid()}
                      ></i>
                    </div>
                  </ul>
                </div>
                <div class="col-12 row deletePanel">
                  <div class="col-8 d-flex justify-content-between remove_wish">
                    <p>
                      <i
                        class="fas fa-trash-alt"
                        onClick={() =>usertoken? removecart(title,oldprice,pcksize,price,item) :invalid()}
                      ></i>{" "}
                      Remove
                    </p>
                  </div>
                  <div class="col-4 d-flex justify-content-end price_money">
                    <h3>
                    ₹<span id="itemval">{priceq} </span>
                    </h3>
                    <h6 className='ml-2 mr-1'>
                    I.N.C of taxes
                      </h6>
                    
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
