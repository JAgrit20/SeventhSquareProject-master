import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./categoriesProduct.css";
import Rfqmodal from "../../../Product/Rfomodal";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import GlassFilter from "./SubCategories/GlassFilter";



function CatItem(props) {
  console.log("props",props)
  console.log("props",props.sellerId)
  // console.log("props",props?.users?.account)
  const [RfqmodalShow, setRfqModalShow] = useState(false);


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
// 
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

        <GlassFilter/>
    
      <Divider />
    
    </Box>
  );

  const [imagedata, setimage] = useState([]);
  const [usertoken, setusertoken] = useState();
  const [prodata, setprodata] = useState([]);
  var localcart = []
  let history = useHistory();
  const getimages = async () => {
    const res = await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.id}`);
    const data = await res.json();

    setimage(data[0]?.picture);

  }



  const addtocart=async()=>{
    console.log("props")
    console.log(props)


    const config = {
      method: 'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": props.name,
        "oldprice": props.oldp,
        "pcksize": '3',
        "estdelivery": '11',
        "price": props.price,
        "quantity": 1,
        "item": props.id,

        "brand":props.brand,

        "gst":props.gst,
        "sellerId":props.sellerId,
        "incl_gst":props.incl_gst,
        "category":props.category,
        "subcategory":props.subcategory
,

      })
    };

    console.log(config);
    const res = await fetch('https://api.seventhsq.com/orders/add-to-cart/', config);
    window.alert("Successfully Added to Cart");
    const data = await res.json();
    updatesells()
    
    console.log(data);


  }

  const buynow = async () => {

    const config = {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": props.name,
        "oldprice": props.oldp,
        "pcksize": '3',
        "estdelivery": '1',
        "price": props.props,
        "quantity": 1,
        "item": props.id,
        "gst": props.gst

      })
    };
    console.log(config);
    const res = await fetch('https://api.seventhsq.com/orders/add-to-cart/', config);
    const data = await res.json();
    console.log(data);
    setprodata(data)
    updatesells()
    history.push("/checkout");


  }

  const addtolocal = async () => {
    const body = {
      "title": props.name,
      "oldprice": props.oldp,
      "pcksize": '3',
      "estdelivery": '1',
      "price": props.props,
      "quantity": 1,
      "item": props.id,
      "gst": props.gst

    }
    localcart.push(body)
    localStorage.setItem('localcart', JSON.stringify(localcart))
    updatesells()
    window.alert("Added to Cart");
    console.log('saved locally')

  }

  const Verify = () => {
    const token = localStorage.getItem('token')
    setusertoken(token)
    // console.log(token)

  }
  const invalid = () => {
    window.alert('Login First!')
  }
  const updatesells = async () => {
    // console.log(users);
    const config = {
      method: "PUT",
      headers: {

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        sells: 1
      }),
    };
    console.log(config);
    // console.log(users);
    const res = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail/" + props.id.toString(),
      config
    );
    // window.alert("updated sells");
  };

  useEffect(() => {
    Verify()
    getimages();
  }, [props.handleapply])

  // console.log(props.curr, "curr")
  return (

    <div class="content">
     
      <Link to={"/product/" + props.id.toString()} >
        <img
          src={"https://seller.seventhsq.com" + imagedata}
          alt={props.name}
        />
      </Link>
      <h3>{props.name}</h3>

      {/* <p>{curr.description}</p> */}
      <div className="row d-flex my-2">
      {props.price != "0"?
          
        <h6 style={{marginleft:"5px"}}>INR {props.price}</h6>:
        <h6 style={{marginleft:"5px"}}>Price on Request</h6>
       }
      </div>
      <div >
        <div class="d-flex justify-content-start">
          {!props.Price_on_request && props.defaultMP?
          <>
          <button class="buy-3" onClick={usertoken ? buynow : invalid}> <span style={{paddingBottom:"10px ",fontFamily:"open sans"}}> BUY NOW </span></button>
          <button class="buy-3" onClick={usertoken ? addtocart : addtolocal}style={{fontFamily:"open sans"}} >ADD TO CART</button>
          </>:
          <button class="buy-3" onClick={() => setRfqModalShow(true)} style={{fontFamily:"open sans"}} >Request for Quotation</button>
          // <div>hi</div>
          }
        </div>
        
      </div>
      <Rfqmodal
        show={RfqmodalShow}
        id={props.id}
        category={props.category}
        name={props.name}
        sel_id={props.sellerId}
        onHide={() => setRfqModalShow(false)}
      />

    </div>

  )
}

export default CatItem
