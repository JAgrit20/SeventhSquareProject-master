import React from "react";
import { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import SavedAddress from "./SavedAddress";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
// import { Button, Modal } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'
function Profile() {
  const [userdata, setuserdata] = useState([]);
  const [addressdata, setaddressdata] = useState([]);
  const [streetaddress, setstreetaddress] = useState("");
  const [cityaddress, setcityaddress] = useState("");
  const [apartmentaddress, setapartmentaddress] = useState("");
  const [stateaddress, setstateaddress] = useState("");
  const [countryaddress, setcountryaddress] = useState("");
  const [zip, setzip] = useState("");
  const [defaulttype, setdefaulttype] = useState(false);
  const [addresstype, setaddresstype] = useState("");
  const [show, setModalShow] = useState(false);
  const [oldpassword, setoldpass] = useState("");
  const [message, setmessage] = useState("");
  const [newpassword, setnewpass] = useState("");
  let history = useHistory();
  const getuser = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/user_profile/get_profile/",
      config
    );
    const data = await res.json();

    setuserdata(data.user);
    console.log(userdata);
  };

  const callChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name == "street_address") {
      setstreetaddress(value);
      console.log(stateaddress);
    }
    if (name == "city") {
      setcityaddress(value);
    }
    if (name == "apartment_address") {
      setapartmentaddress(value);
    }
    if (name == "state") {
      setstateaddress(value);
    }
    if (name == "country") {
      setcountryaddress(value);
    }
    if (name == "zip") {
      setzip(value);
    }
    if (name == "default") {
      setdefaulttype(value);
    }
    if (name == "address_type") {
      setaddresstype(value);
    }
  };
  const passchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name == "oldpassword") {
      setoldpass(value);
    }
    if (name == "newpassword") {
      setnewpass(value);
    }
  };

  const logout = (event) => {
    window.localStorage.removeItem("token");
    history.push({
      pathname: `/`,
    });
  };

  const getaddressses = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/orders/addresses",
      config
    );
    const data = await res.json();
    console.log(data);
    setaddressdata(data);
    console.log(addressdata);
  };

  useEffect(() => {
    getuser();
    getaddressses();
  }, []);

  const handlechangePassword = (e) => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    e.preventDefault();
    const data = {
      old_password: oldpassword,
      new_password: newpassword,
    };
    console.log(data);
    axios
      .patch(
        "https://api.seventhsq.com/auth/api/change-password/",
        data,
        config
      )
      .then((res) => {
        window.alert("Password Changed");
        window.localStorage.removeItem("token");
        console.log("token removed");
        history.push({
          pathname: `/login`,
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };

  const handleSubmit = (e) => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
      },
    };
    e.preventDefault();
    const data = {
      user: userdata.id,
      street_address: streetaddress,
      apartment_address: apartmentaddress,
      city: cityaddress,
      state: stateaddress,
      country: countryaddress,
      zip: zip,
      address_type: addresstype,
      default: defaulttype,
    };
    console.log(data);
    axios
      .post("https://api.seventhsq.com/orders/addresses/create/", data, config)
      .then((res) => {
        console.log(res);
        // window.alert("Added");
        Swal.fire({
          icon: "success",
          title: "Thank you",
          text: "Address Added successfully"
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incomplete form',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        // window.alert("Something went wrong");
      });
  };

  var messa = "";
  const ramanger_message = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);
    console.log(name);
    if (name == "message") {
      setmessage(value);
    }
    var mess = document.getElementById("message").value;
    console.log(message);
    var bodyFormData = new FormData();
    bodyFormData.append("user_name", userdata.first_name);
    bodyFormData.append("manager_name", userdata.assigned_manager);
    bodyFormData.append("message", mess);

    axios({
      method: "post",
      url: "https://api.seventhsq.com/enquiry/message/",
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
    setmessage("message delivered");
    messa = "message sent success";
  };

  //   const handleSubmitmessage = (e) =>{

  // 	// const config = {
  // 	// 	headers: {
  // 	// 	  Authorization: "token " + localStorage.getItem("token"),
  // 	// 	},
  // 	//   };
  //     // e.preventDefault();

  //     const data  = {

  // 		manager_name:'jagrit',
  //        street_address: streetaddress,
  //        street_address: streetaddress,

  //     };
  // 	console.log(data)
  //     axios.post('https://api.seventhsq.com/orders/addresses/create/', data,config).then(
  //         res => {
  //             console.log(res)
  //           window.alert("Added");
  // 		  window.location.reload();
  //         }
  //     ).catch(
  //         err => {
  //             console.log(err)
  //             window.alert("Something went wrong");
  //         }
  //     )
  //   }

  return (
    <div className="profile">
         <Helmet>
    <title>Login | Seventh Square</title>
    <meta name="description" content="Login Seventh Square" />
  </Helmet>
      <div class="container">
        <div class="main-body">
          <h1
            id="title_pro"
            className="h1 text-center my-4"
            style={{ fontfamily: "Crimson Text !important" }}
          >
            Your Profile
          </h1>
          <div class="row">
            <div class="col-lg-4">
              <div class="cardMe">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <div
                      className="rounded-circle p-1 bg-dark"
                      style={{ color: "white" }}
                    >
                      <h1>
                        {userdata.first_name && userdata.last_name
                          ? userdata.first_name[0] + userdata.last_name[0]
                          : null}
                      </h1>
                    </div>
                    <div class="mt-3">
                      <h4>
                        {userdata.first_name} &nbsp;{userdata.last_name}{" "}
                      </h4>
                      <p class="text-secondary mb-1"></p>
                      {userdata.is_corporate ? (
                        <p class="text-muted font-size-sm">Corporate Account</p>
                      ) : (
                        <p class="text-muted font-size-sm">
                          Individual Account
                        </p>
                      )}
                    </div>
                  </div>
                  <hr class="my-4" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span style={{ fontSize: "15px" }}> Your Email:</span>
                      <span
                        style={{ fontSize: "15px !important" }}
                        class="text-secondary"
                      >
                        {" "}
                        {userdata.email}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span class="text-secondary">{userdata.username}</span>
                    </li>
                    {userdata.is_corporate ? (
                      <>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <span class="text-secondary">
                            {userdata.company_name}
                          </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <span class="text-secondary">{userdata.gst_in}</span>
                        </li>
                      </>
                    ) : null}
                  </ul>
                  <hr class="my-4" />
                  <div className="d-flex justify-content-between">
                    <button onClick={logout}>
                      <h5>Logout</h5>
                    </button>
                    <button onClick={() => setModalShow(true)}>
                      <h5>Change Password</h5>
                    </button>
                  </div>
                </div>
              </div>
              <div class="cardMe">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <div
                      className="rounded-circle p-1 bg-dark"
                      style={{ color: "white" }}
                    >
                      <h1>
                        {userdata.first_name && userdata.last_name
                          ? userdata.first_name[0] + userdata.last_name[0]
                          : null}
                      </h1>
                    </div>

                    <div class="mt-3">
                      {/* <h4>{userdata.first_name} &nbsp;{userdata.last_name} </h4> */}

                      <h4>{userdata.assigned_manager}</h4>
                      <p class="text-secondary mb-1">
                        <p class="text-muted font-size-sm">
                          Relationship Manager
                        </p>
                      </p>
                      {/* {
										userdata.is_corporate?
									<p class="text-muted font-size-sm">Corporate Account</p>:

									<p class="text-muted font-size-sm">Individual Account</p>
									} */}
                    </div>
                  </div>
                  <hr class="my-4" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span class="text-secondary">
                        Manager Email: {userdata.email}
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span class="text-secondary">
                        {" "}
                        Manager Phone number: 1234567890
                      </span>
                    </li>
                    {userdata.is_corporate ? (
                      <>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <span class="text-secondary">
                            {userdata.company_name}
                          </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <span class="text-secondary">{userdata.gst_in}</span>
                        </li>
                      </>
                    ) : null}
                  </ul>
                  <hr class="my-4" />
                  <div className="d-flex justify-content-between">
                    {/* <button onClick={logout}>
								<h5>
									Logout
								</h5>
							</button> */}
                    <button className="btn btn-dark" onClick={ramanger_message}>
                      <h5>Send Message</h5>
                    </button>
                    <input
                      className="message"
                      name="message"
                      id="message"
                      style={{
                        border: "solid",
                        borderWidth: 1,
                        borderRadius: "100px",
                        height: 30,
                        width: 180,
                        whiteSpace: "pre-wrap",
                      }}
                      placeholder=" Type your message here"
                    />
                    <br></br>
                    <br />
                    <br></br>
                    <p style={{ color: "green" }}>{message}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="cardMe">
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h4 class="my-3 ">Full Name</h4>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        style={{backgroundColor:"lightgrey"}}
                        value={userdata.first_name + " " + userdata.last_name}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h4 class="my-3">Email</h4>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                      readonly
                        type="text"
                        class="form-control"
                        style={{backgroundColor:"lightgrey"}}
                        // onChange={(e) => {
                        //   setuserdata({
                        //     ...userdata,
                        //     email: e.target.value,
                        //   });
                        // }}
                        value={userdata.email}
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h4 class="my-3">Mobile</h4>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                      readonly
                        type="text"
                        class="form-control"
                        style={{backgroundColor:"lightgrey"}}
                        value={userdata.phone}
                        // onChange={(e) => {
                        //   setuserdata({
                        //     ...userdata,
                        //     phone: e.target.value,
                        //   });
                        // }}
                      />
                    </div>
                  </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                      <h4 class="mb-0 my-4">Saved Addresses</h4>
                    </div>

                    <div class="col-sm-9 text-secondary">
                      {addressdata
                        ? addressdata.map((curr, index) => {
                            return (
                              <SavedAddress
                                curr={curr}
                                index={index}
                                addressdata={addressdata}
                                setaddressdata={setaddressdata}
                              />
                            );
                          })
                        : null}
                    </div>
					
                  </div>
				  
                </div>
				<div>
			
				</div>
				
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="cardMe jay">
                    <div class="card-body">
                      <h4 className="mt-4"> Add new Address</h4>
                      <form
                        method="POST"
                        class="register-form"
                        onSubmit={handleSubmit}
                        id="address-form"
                      >
                        <div class="d-flex justify-content-evenly my-3 filterbutt">
                          <input
                            class="form-control mx-3"
                            type="text"
                            name="street_address"
                            id="street_address"
                            placeholder="Adress Line 1"
                            onChange={callChange}
                          />
                          <input
                            class="form-control "
                            type="text"
                            name="apartment_address"
                            id="apartment_address"
                            placeholder="Adress Line 2"
                            onChange={callChange}
                          />
                        </div>
                        <div class="d-flex justify-content-evenly my-3 filterbutt">
                          <input
                            class="form-control mx-3"
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            onChange={callChange}
                          />
                          <input
                            class="form-control"
                            type="text"
                            name="state"
                            id="state"
                            placeholder="State"
                            onChange={callChange}
                          />
                        </div>
                        <div class="d-flex justify-content-evenly my-3 filterbutt">
                          <input
                            class="form-control mx-3"
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            onChange={callChange}
                          />
                          <input
                            class="form-control"
                            type="text"
                            name="zip"
                            id="zip"
                            placeholder="Zip Code"
                            onChange={callChange}
                          />
                        </div>

                        <div class="d-flex justify-content-space-between">
                          <h5 className="mx-4" style={{ fontSize: "15px" }}>
                            Address Type
                          </h5>
                          <div class="d-flex justify-content-space-between">
                            <input
                              type="radio"
                              id="billing"
                              name="address_type"
                              value="B"
                              onChange={callChange}
                            />
                              <label for="billing">Billing</label>
                            <br />
                          </div>
                          <div className="d-flex justify-content-space-between mx-3">
                            <input
                              type="radio"
                              id="shipping"
                              name="address_type"
                              value="S"
                              onChange={callChange}
                            />
                             {" "}
                            <label for="shipping" style={{ fontSize: "10px" }}>
                              Shipping
                            </label>
                            <br />
                          </div>
                          {/* <label for="address_type">Address Type:</label>
										<select id="address_type" name="address_type" onChange={callChange} defaultValue='billing'>
											<option value="billing" >Billing </option>
											<option value="shipping">Shipping</option>

										</select>  */}
                        </div>
                        <div class="custom-control custom-checkbox mx-4 mt-4">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="default"
                            name="default"
                            value="True"
                            onChange={callChange}
                          />
                          <label
                            class="custom-control-label"
                            for="default"
                            style={{ fontSize: "15px", paddingLeft: "5px" }}
                          >
                            Keep this as default
                          </label>
                        </div>
                        <div class="d-flex justify-content-end mr-5">
                          <button
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-dark my-4"
                          >
                            <h6>Add this Address</h6>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={() => setModalShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "black" }}
          >
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details</h4>
        </Modal.Body>
        <Form.Group className="mx-3 my-2">
          <Form method="POST" onSubmit={handlechangePassword}>
            <Form.Label className="mt-4">Old Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="old password"
              name="oldpassword"
              id="oldpassword"
              onChange={passchange}
            />
            <Form.Label className="mt-4">New Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              name="newpassword"
              id="newpassword"
              onChange={passchange}
            />
            <Button className="mx-4 mt-4" type="submit">
              Save
            </Button>
          </Form>
        </Form.Group>

        <Modal.Footer>
          <a href="/forgot-password">Forgot Password?</a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Profile;
