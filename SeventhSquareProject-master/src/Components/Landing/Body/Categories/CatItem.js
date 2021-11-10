import React, { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./categoriesProduct.css";
function CatItem(props) {
  
    const[imagedata,setimage]=useState([]);
    const [usertoken, setusertoken] = useState();
    var localcart=[]
    let history = useHistory();
  const getimages=async()=>{
      const res=await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.id}`);
      const data= await res.json();
      
      setimage(data[0].picture);
      
  }
  const addtocart=async()=>{
    
    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "title": props.name,
        "oldprice": props.oldp,
        "pcksize": '3',
        "estdelivery": '1' ,
        "price": props.price ,
        "quantity": 1,
        "item": props.id,
        "gst":props.gst,
        "sellerId":props.sellerId
      })
    };
    
    console.log(config);
    const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
    window.alert("Added to Cart");
    const data= await res.json();
    console.log(data);
    
    
}

const buynow=async()=>{
  
  const config = {
    method:'POST',
    headers: {
     
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "title": props.name,
      "oldprice": props.oldp,
      "pcksize": '3',
      "estdelivery": '1' ,
      "price": props.props ,
      "quantity": 1,
      "item": props.id,
      "gst":props.gst
      
    })
  };
  console.log(config);
  const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
  const data= await res.json();
  console.log(data);
  history.push("/checkout");
  
  
}

const addtolocal=async()=>{
  const body={
    "title": props.name,
      "oldprice": props.oldp,
      "pcksize": '3',
      "estdelivery": '1' ,
      "price": props.props ,
      "quantity": 1,
      "item": props.id,
      "gst":props.gst
    
  }
  localcart.push(body)
  localStorage.setItem('localcart',JSON.stringify(localcart))
  window.alert("Added to Cart");
  console.log('saved locally')

}

const Verify=()=>{
  const token=localStorage.getItem('token')
  setusertoken(token)
  // console.log(token)

}
const invalid=()=>{
  window.alert('Login First!')
}

  useEffect(()=>{
    Verify()
    getimages();
  },[props.handleapply])
    return (
      
        <div class="content">
          <Link to={"/product/"   + props.id.toString()} >
        <img
          src={"https://seller.seventhsq.com"+imagedata }
          alt={props.name}
        />
         </Link>
        <h3>{props.name}</h3>

        {/* <p>{curr.description}</p> */}
        <div className="row d-flex my-2">

          <h6>₹{props.price}</h6>
          {/* <h6>{curr.category}</h6> */}
        </div>
          <div >
          <div class="d-flex justify-content-start">
        <button class="buy-3" onClick={usertoken?buynow:invalid}>Buy Now</button>
        <button class="buy-3" onClick={usertoken?addtocart:addtolocal} >Add to Cart</button>
        </div>
          </div>
        
      </div>
     
    )
}

export default CatItem
