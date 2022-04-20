import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import {
  Container,
  Row,
  Form,
  Col,
  Formlabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { tableSortLabelClasses } from "@mui/material";
function Checkout() {
  const [addressdata, setaddress] = useState([]);
  const [cartdata, setdata] = useState([]);
  console.log(cartdata, "data");
  const [userdata, setuserdata] = useState([]);

  const [total, settotal] = useState(0);
  const [baseurl] = useState("https://test.cashfree.com/api/v1/order/create");

  const [title] = useState("Reactjs checkout");

  const [orderId, settxnid] = useState(
    Math.round(Math.random(10000, 50000) * 1000000)
  );

  const [orderAmount, setAmount] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [customerEmail, setEmail] = useState("");
  const [customerPhone, setPhone] = useState("");
  const [productinfo, setproductinfo] = useState("ok");
  const [showf, setshowf] = useState(false);
  const [plotno, setplotno] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzip] = useState("");
  const [plotno2, setplotno2] = useState("");
  const [street2, setstreet2] = useState("");
  const [city2, setcity2] = useState("");
  const [state2, setstate2] = useState("");
  const [zipcode2, setzip2] = useState("");
  const [net, setnet] = useState("");
  const [same, setsame] = useState(true);
  const [hash] = useState("hdhcdgdew6tg");

  let cartItems = [];

  const postcashfree = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append("orderId", orderId);
    bodyFormData.append("orderAmount", orderAmount);
    bodyFormData.append("customerPhone", customerPhone);
    bodyFormData.append("customerEmail", customerEmail);
    bodyFormData.append("customerName", firstname);

    axios({
      method: "post",
      url: "https://api.seventhsq.com/payu/create_cashfree/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    // const config = {
    //   method:'POST',

    //   headers: {

    //     'Content-Type': 'application/form-data'
    //   },
    //   body:JSON.stringify({

    //     'orderId': orderId,
    //     'orderAmount': orderAmount,
    //     'customerPhone':customerPhone,
    //     'customerEmail':customerEmail,
    //     'customerName':firstname

    // })

    // };

    // const res=await fetch('https://api.seventhsq.com/payu/create_cashfree/',config);

    // console.log(res)
  };
  /////////////////////////////////////////to get hash value
  //   const gethash=async()=>{

  //     console.log(`amount${amount}`)
  //     const config = {
  //       method:'POST',
  //       headers: {
  //         'Content-Type': 'application/json',

  //       },
  //       body:JSON.stringify({
  //         "amount": amount,
  //         "productinfo": 'ok',
  //         "firstname": userdata.first_name,
  //         "email": userdata.email ,

  //       })
  //     };

  //     const res=await fetch('https://api.seventhsq.com/payu/hash/',config);
  //     const data= await res.json();
  //     console.log(data);
  //     sethash(data.hash);
  //     settxnid(data.txnid)
  //     console.log(data.hash)
  //     console.log(data.txnid)

  // }

  ////////////////////////////////////for posting order

  const toggle = () => {
    console.log(showf);
    setshowf((showf) => !showf);
  };

  const postorder = async () => {
    localStorage.setItem("orderID", orderId);
    cartdata.forEach(myfn);

    function myfn(item) {
      console.log("item object ");
      console.log(item);
      cartItems.push({
        price: item.price,
        product: item.item,
        quantity: item.quantity,
        gst: item.gst,
        sellerId: item?.sellerId,
        proName: item.title,
        GST_included:item.incl_gst,
      });
    }

    console.log("cartItems");
    console.log(cartItems);

    if (same == true) {
      const config = {
        method: "POST",
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city,
          state: state,
          address: plotno,
          zipcode: zipcode,
          place: street,
          items: cartItems,
          paid_amount: total,
          order_success: false,
          desc: "ok",
          txnid: orderId,
          order_time:Date().toLocaleString()
        }),
      };
      console.log(config.body);
      const res = await fetch(
        "https://api.seventhsq.com/orders/orders/",
        config
      );
      window.alert("order placed");
      const data = await res.json();
      console.log(data);
    }
    if (same == false) {
      const config = {
        method: "POST",
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: city2,
          state: state2,
          address: plotno2,
          zipcode: zipcode2,
          place: street2,
          items: cartItems,
          paid_amount: total,
          order_success: false,
          desc: "ok",
          txnid: orderId,
          order_time:Date().toLocaleString()
        }),
      };
      console.log(config.body);
      const res = await fetch(
        "https://api.seventhsq.com/orders/orders/",
        config
      );
      window.alert("order placed");
      const data = await res.json();
      console.log(data);
    }
  };
  /////////////////////////////////////////for getting user address data
  const getaddressdata = () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };

    axios.get("https://api.seventhsq.com/orders/addresses", config).then(
      (res) => {
        setaddress(res.data[0]);
        setplotno(res.data[0].apartment_address);
        setstreet(res.data[0].street_address);

        setcity(res.data[0].city);
        setstate(res.data[0].state);
        setzip(res.data[0].zip);
        console.log(res.data[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  ///////////////////////////////////for getting user data
  const getuserdata = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    const res = await fetch(
      "https://api.seventhsq.com/user_profile/get_profile/",
      config
    );
    const data = await res.json();
    console.log(Date().toLocaleString())
    setuserdata(data.user);
    console.log(data.user);
    setfirstname(data.user.first_name);
    setEmail(data.user.email);
    setPhone(data.user.phone);
    setlastname(data.user.last_name);
  };
  ////////////////////////////////////for getting cart details
  const getdata = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/orders/add-to-cart/",
      config
    );

    const data = await res.json();
    console.log(data);
    setdata(data);
    let s = 0;
    data.forEach(myFunction);
    function myFunction(item) {
      s += item.price * item.quantity;
    }
    let g = 0;

    data.forEach(myFunction2);
    function myFunction2(item) {
      if(!item.incl_gst){
        g += (item.price*item.gst)/100*item.quantity;
      }
    }
    let j = parseFloat(s) + parseFloat(g);
    settotal(j);
    setAmount(j);
  };

  const amt = (a, b) => {
    let ans = a * b;
    setnet(ans);
  };
  const handlesame = () => {
    setsame(!same);
  };
  useEffect(() => {
    getdata();
    getuserdata();
    getaddressdata();
  }, []);
  // useEffect(()=>{
  //   gethash();
  // },[amount,userdata.first_name,userdata.email])

  return (
    <div>
      <div class="container">
        <div class="py-5 text-center">
          <h1 style={{ fontFamily: "crimson text" }}>REVIEW YOUR ORDER</h1>
        </div>
        <div className="container desktopProgress">
          <ul class="progress-indicator">
            <li>
              <span class="bubble"></span>
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontFamily: "open sans",
                }}
              >
                {" "}
                <i class="fa fa-check" aria-hidden="true"></i>
                Cart
              </span>
            </li>
            <li class="">
              <span class="bubble"></span>

              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontFamily: "open sans",
                }}
              >
                Review & Confirm
              </span>
            </li>
            <li>
              <span class="bubble"></span>
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontFamily: "open sans",
                }}
              >
                {" "}
                <i class="fa fa-money" aria-hidden="true"></i> Payment
              </span>
            </li>
          </ul>
        </div>
        <div class="container" style={{ display: "flex" }}>
          <div class="success-box" style={{ padding: "10px" }}>
            <div className="review_card_s">
              <div
                className=" tick_image_os"
                style={{
                  fontFamily: "crimson text",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/> */}
                <h3>REVIEW DELIVERY</h3>
              </div>
              <span style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    class="ml-2 mr-2"
                    style={{
                      fontSize: "10px !important",
                      fontWeight: "bold",
                      display: "flex",
                    }}
                  >
                    Bill to{" "}
                  </h4>
                  <button
                    class="ml-2 mr-2"
                    style={{
                      fontSize: "10px !important",
                      fontWeight: "bold",
                      color: "red",
                    }}
                    onClick={toggle}
                  >
                    Change Address
                  </button>
                </div>
                <span className="review_card_1st_child_s mt-2">
                  <div
                    className="container"
                    style={{
                      alignContent: "left",
                      justifyContent: "left",
                      display: "flex",
                    }}
                  >
                    <span
                      style={{
                        alignContent: "left",
                        justifyContent: "left",
                        display: "flex",
                        fontFamily: "open sans",
                        fontSize: "11px",
                        // marginLeft: "auto",
                        wordWrap: "break-word",
                        width: "280px",
                        whiteSpace: "initial",
                      }}
                    >
                      {firstname} {lastname} <br />
                      {plotno}
                      {street} <br />
                      {city} {state} {zipcode}
                      <br />
                      <br />
                      P- {customerPhone} <br />
                      E- {customerEmail}
                    </span>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input mr-3"
                      id="same-address"
                      checked={same}
                      onChange={() => handlesame()}
                    />
                    <label
                      class="custom-control-label pl-2 mb-2 mt-2 pt-1"
                      for="same-address"
                      style={{
                        marginLeft: "10px",
                        fontSize: "11px",
                        color: "red",
                      }}
                    >
                      Shipping Address is same as Billing Address
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4
                      class="ml-2 mr-2"
                      style={{
                        fontSize: "10px !important",
                        fontWeight: "bold",
                        display: "flex",
                      }}
                    >
                      Ship to{" "}
                    </h4>
                    {/* <button  class="ml-2 mr-2"  style={{fontSize:"10px !important",fontWeight:"bold",color:"red"}} onClick={toggle}>Change Address</button> */}
                  </div>

                    <div
                      className="container"
                      style={{
                        alignContent: "left",
                        justifyContent: "left",
                        display: "flex",
                      }}
                    >
                      <span
                        style={{
                          alignContent: "left",
                          justifyContent: "left",
                          display: "flex",
                          fontFamily: "open sans",
                          fontSize: "11px",
                          // marginLeft: "auto",
                          wordWrap: "break-word",
                          width: "280px",
                          whiteSpace: "initial",
                        }}
                      >
                       {firstname} {lastname} <br />
                      {plotno}
                      {street} <br />
                      {city} {state} {zipcode}
                      <br />
                      <br />
                      P- {customerPhone} <br />
                      E- {customerEmail}
                      </span>
                    </div>
                        

                  <br />
                  <p>Is this a corporate order? Add GSTIN to your invoice.</p>
                </span>
              </span>
            </div>
          </div>

          <div className="review_card_cs">
            <div
              className=" tick_image_os"
              style={{
                fontFamily: "crimson text",
                justifyContent: "space-between",
              }}
            >
              {/* <img  style={{height:"35px",width:"35px",paddingTop:"10px"}} src={tick}/> */}

              <h3>CART SUMMARY</h3>
              <h3>Number of Items: {cartdata.length} {" "} &nbsp;</h3>
            </div>

            {cartdata.map((curr, index) => {
              return (
                <div
                  class="row mb-3 mt-2 ml-2"
                  style={{ fontFamily: "open sans",wordBreak: "break-word"  }}
                >
                  <div
                    class="col-4 "
                    key={curr.id}
                    style={{ fontFamily: "open sans" }}
                  >
                    <img />
                    <h5>{curr.title}</h5>
                  </div>
                  <div class="col">
                    <h5 key={index} style={{ fontFamily: "open sans",wordBreak: "break-word" }}>
                      {curr.brand}
                    </h5>
                    <h5></h5>
                  </div> 
                  <div class="col">
                    <h5 key={index} style={{ fontFamily: "open sans",wordBreak: "break-word"  }}>
                      {!curr.incl_gst?(
                        <p>

                          Price: ₹ {(Number(curr.price)+Number ((curr.price*curr.gst)/100)).toFixed(2)}
                        </p>
                      ):(
<p>

Price: ₹ {(curr.price)}
</p>
                      )
                    }
                    </h5>
                  </div>
                  <div class="col">
                    <h5 key={index} style={{ fontFamily: "open sans",wordBreak: "break-word"  }}>
                      Qty: {curr.quantity} 
                    </h5>
                  </div>
                  <div class="col">
                    <h5 key={index} style={{ fontFamily: "open sans",wordBreak: "break-word"  }}>
                    {!curr.incl_gst?(
                        <p>
Total: ₹ {(Number(curr.quantity) * Number(Number(curr.price)+Number ((curr.price*curr.gst)/100))).toFixed(2)} 
                      
                        </p>
                      ):(
<p>
Total: ₹ {(Number(curr.quantity) * Number(Number(curr.price))).toFixed(2)} 
</p>
                      )
                    }
                      
                    </h5>
                  </div>
                  {/* <div class="col"><input key={index} defaultValue={net} value={net} onChange={() => amt(curr.quantity,curr.price)}/></div> */}
                  {/* <hr/> */}
                </div>
              );
            })}
            <div  
              className=" tick_image_os"
              style={{
                fontFamily: "crimson text",
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                  marginTop: "auto"
              }}
            >
              <h4 style={{ fontWeight: "bold",wordBreak: "break-word"}}>Total: ₹{total}  &nbsp; {" "} </h4>
            </div>
          </div>
        </div>

        <hr class="mb-4" />
        <div style={{display:"flex", flexDirection:"column"}}>
          {showf ? (
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing Address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      value={firstname}
                      required
                      onChange={(e) => setfirstname(e.target.value)}
                    />
                    <div class="invalid-feedback">Valid first name is.</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      value={lastname}
                      required
                      onChange={(e) => setlastname(e.target.value)}
                    />
                    <div class="invalid-feedback">Valid last name is.</div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="phonenumber">Phone number</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="phonenumber"
                      value={customerPhone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div class="invalid-feedback">Your Phone number is.</div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">
                    Email <span class="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={customerEmail}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                {addressdata.length != 0 ? (
                  <>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName">Plot No.</label>
                        <input
                          type="text"
                          required
                          class="form-control"
                          value={plotno}
                          required
                          onChange={(e) => setplotno(e.target.value)}
                        />
                        <div class="invalid-feedback">
                          Valid Plot No. is required.
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName">Street</label>
                        <input
                          type="text"
                          required
                          class="form-control"
                          value={street}
                          required
                          onChange={(e) => setstreet(e.target.value)}
                        />
                        <div class="invalid-feedback">
                          Valid Street is required.
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <label for="firstName">City</label>
                        <input
                          type="text"
                          required
                          class="form-control"
                          value={city}
                          required
                          onChange={(e) => setcity(e.target.value)}
                        />
                        <div class="invalid-feedback">
                          Valid City is required.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="lastName">State</label>
                        <input
                          type="text"
                          required
                          class="form-control"
                          value={state}
                          required
                          onChange={(e) => setstate(e.target.value)}
                        />
                        <div class="invalid-feedback">
                          Valid State is required.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="lastName">Zip Code</label>
                        <input
                          type="text"
                          required
                          class="form-control"
                          value={zipcode}
                          required
                          onChange={(e) => setzip(e.target.value)}
                        />
                        <div class="invalid-feedback">
                          Valid Zip Code is required.
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <button class="btn btn-primary btn-md btn-block ">
                    <a href="/profile">Add Billing Address</a>
                  </button>
                )}

                <hr class="mb-4" />

                {/* <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                  checked={same}
                  onChange={() => handlesame()}
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div> */}

              

                <div className="row d-flex justify-content-evenly">
                  <div className="col-md-4 pt-5"></div>
                  <div className="col-md-4">
                    <div></div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}
          {same == false ? (
            <>
              <h4 class="mb-3"> Shipping Address</h4>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Plot No.</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={plotno2}
                    onChange={(e) => setplotno2(e.target.value)}
                  />
                  <div class="invalid-feedback">
                    Valid Plot No. is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Street</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={street2}
                    onChange={(e) => setstreet2(e.target.value)}
                  />
                  <div class="invalid-feedback">Valid Street is required.</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="firstName">City</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={city2}
                    onChange={(e) => setcity2(e.target.value)}
                  />
                  <div class="invalid-feedback">Valid City is required.</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="lastName">State</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={state2}
                    onChange={(e) => setstate2(e.target.value)}
                  />
                  <div class="invalid-feedback">Valid State is required.</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="lastName">Zip Code</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={zipcode2}
                    onChange={(e) => setzip2(e.target.value)}
                  />
                  <div class="invalid-feedback">
                    Valid Zip Code is required.
                  </div>
                </div>
              </div>
            </>
          ) : null}

          
        </div>

        <footer class="pt-2 text-muted text-center text-small">
        <div className="row d-flex justify-content-evenly">
            <div className="col-md-4 pt-5">
              <button class="btn btn-dark btn-md btn-block ">
                <a href="/cart">Go Back</a>
              </button>
            </div>
            <div className="col-md-4">
              <div>
                <Form
                  action={"https://api.seventhsq.com/payu/create_cashfree/"}
                  method="post"
                >
                  <Row className="pt-sm-2">
                    <Col sm>
                      <Form.Control
                        type="hidden"
                        name="orderId"
                        value={orderId}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="pt-sm-2">
                    <Col sm>
                      <Form.Control
                        type="hidden"
                        name="orderAmount"
                        value={orderAmount}
                      ></Form.Control>
                    </Col>
                  </Row>

                  <Row className="pt-sm-2">
                    <Col sm>
                      <Form.Control
                        type="hidden"
                        name="customerEmail"
                        value={customerEmail}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="pt-sm-2">
                    <Col sm>
                      <Form.Control
                        type="hidden"
                        name="customerPhone"
                        value={customerPhone}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row className="pt-sm-2">
                    <Col sm>
                      <Form.Control
                        type="hidden"
                        name="customerName"
                        value={firstname}
                      ></Form.Control>
                    </Col>
                  </Row>

                  <Button
                    class="btn btn-dark btn-lg btn-block "
                    type="submit"
                    onClick={postorder}
                  >
                    Proceed to Payment
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <p class="mb-1">&copy; 2017-2018 Company Name</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="/">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="/">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="/">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
export default withRouter(Checkout);
