import React, { useEffect, useState } from "react";
import Popup from "./Modal";
import Popup2 from "./Modal2";
import "./Request.css";
import { Helmet } from 'react-helmet';


function Request() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  // const [modalShow2, setModalShow2] = React.useState(false);
  const [reviewdata, setreviewdata] = useState([]);
  const [data, setdata] = useState("");
  const [sub, setSub] = useState('');
  const [des, setDes] = useState('');
  const [ticket, setticket] = useState('');
  // const [sub, setSub] = useState('');


  const getreviews = async () => {
    const config = {
      headers: {
        Authorization: "token " + localStorage.getItem("token"),

      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/customer_service/request",
      config
    );
    const data = await res.json();
    setreviewdata([...data]);

    console.log("data");
    console.log(data);
    console.log(reviewdata);
    // console.log("products");
    // console.log(products);
  };

  const modalOpen = (sub,des,ticket) => {
    setSub(sub)
    setDes(des)
    setticket(ticket)
    setModalShow2(true)
  }

  useEffect(() => {
    getreviews();

  }, []);

  return (
      <div style={{overflowX:"auto"}}>
        {/* Customer Support Seventh Square */}
        <Helmet>
    <title>Customer Support Seventh Square </title>
    <meta name="description" content="Login Seventh Square" />
  </Helmet>
    <div className="container requestForQuote">
      <div className="requests py-3">
        <h1 className="mx-5 my-5 text-center">Customer Service Requests</h1>

        <div className="table-responsive-md px-2 ml-1">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col"style={{width:"70px"}}>Ticket no.</th>
                <th scope="col"style={{width:"200px"}}>Subject</th>
                <th scope="col"style={{width:"100px"}}>Date Raised</th>

                <th scope="col" style={{width:"100px"}}>Status</th>
                <th scope="col" style={{width:"100px"}}>Action</th>
              </tr>
            </thead>

            <tbody>
              {reviewdata
                ? reviewdata.map((curr, index) => {
                    return (
                
                        <tr onClick={() => modalOpen(curr.desc,curr.subject,curr.id)} key={index}>
                          <td scope="row" key={index}>{curr.id}</td>
                          <td key={index}>{curr.subject}</td>
                          <td key={index}>{curr.created_at.slice(0, 10)}</td>
                          {/* <td key={index}>{curr.desc}</td> */}
                          <td key={index}>{curr.is_completed?"Closed":"Open"}</td>
                          <td key={index}>Pending</td>
                        </tr>
                
                    );
                  })
                : null}

              {/* <th scope="row">{curr[0]}</th> */}

              {/*  */}
            </tbody>
          </table>

          <button class="btn btn-secondary" onClick={() => setModalShow(true)}>
            Raise Request
          </button>
          <Popup show={modalShow} onHide={() => setModalShow(false)} />
          <Popup2 show={modalShow2} onHide={() => setModalShow2(false)} data={data} sub={sub} des={des} ticket={ticket}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Request;
