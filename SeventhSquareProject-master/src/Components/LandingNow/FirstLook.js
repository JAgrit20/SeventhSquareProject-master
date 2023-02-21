import { fontFamily } from "@mui/system";
import React from "react";

function FirstLook() {
  return (
    <div style={{ backgroundColor:"#F8F8F8"}}>
      <div className="container row ml-5 "  >
        <div className="col-md-6">
          <img
            className="mt-5 ml-5"
            style={{ width: "83%" }}
            src="https://www.linkpicture.com/q/Buyer-Landing-page.png"
          ></img>
        </div>

        <div
          className="col-md-6"
          style={{ justifyContent: "center", marginTop: "140px" }}
        >
          <h1
            style={{
              fontWeight: "700",
              fontSize: "56px",
              fontFamily: "ui-serif",
            }}
          >
            COMING SOON!
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              fontFamily: "cursive",
            }}
          >
            {" "}
            Shop for Building Material & Home <br></br>Improvement Products
            online with us!
          </p>
        </div>
      </div>
      <div className="row col-md-12" style={{ backgroundColor:"#F8F8F8"}}>
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
          }}
        >
          {" "}
          Get Alerted on Launch and access{" "}
        </h1>
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
          }}
        >
          exciting launch offers!
        </h1>

        <form>
          <div className="row">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              aria-label="Search Your Product"
              aria-describedby="button-addon2"
              name=""
              style={{
                width: "35%",
                justifyContent: "center",
                display: "flex",
                textAlign: "justify",
                marginLeft: "28%",
                marginTop: "11px",
              }}
            />
            <button
              className="btn btn-dark"
              style={{ width: "143px", height: "34px", marginTop: "10px" }}
            >
              Get Notified !
            </button>
          </div>
        </form>
        <h3
          style={{
            justifyContent: "center",
            display: "flex",
            textAlign: "justify",
            marginTop: "30px",
            fontFamily: "serif"
          }}
        >
          Selling Building Materials ? Sell with us here : seller.seventhsq.com
        </h3>
      </div>
    </div>
  );
}

export default FirstLook;
