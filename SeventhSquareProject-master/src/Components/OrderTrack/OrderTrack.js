import React from "react";
import "./OrderTrack.css";
function OrderTrack() {
  return (
    <div class="orderTrack container">
      <div>
        <p className="h4">My orders / Tracking</p>
        <hr />
      </div>
      <h6>Order ID: OD45345345435</h6> <hr />
      <div className="card">
        <div className="block">
          <p>
            Estimated Delivery Time : <br />
            <span>29 Dec 2021</span>
          </p>
        </div>
        <div className="block">
          <p>
            Shipping by : <br />
            <span>ACC Cement</span>
          </p>
        </div>
        <div className="block">
          <p>
            Status : <br />
            <span>Picked up by the courier</span>
          </p>
        </div>
      </div>
      <div className="container mobileProgress">
        <ul class="progress-indicator stepped nocenter stacked">
        <li className="completed my-4">
            <span class="bubble"></span>
            <span class="stacked-text">
              <span class="subdued">Order Received</span>
            </span>
          </li>
          <li className="completed my-4">
            <span class="bubble"></span>
            <span class="stacked-text">
              <span class="subdued">Order accepted</span>
            </span>
          </li>
          <li className="completed my-4">
            <span class="bubble"></span>
            <span class="stacked-text">
              <span class="subdued">Packed & Shipped</span>
            </span>
          </li>
          <li className="my-4">
            <span class="bubble"></span>
            <span class="stacked-text">
              <span class="subdued">Out for Delivery</span>
            </span>
          </li>
          <li class="my-4">
            <span class="bubble"></span>
            <span class="stacked-text">
              <span class="subdued">Delivered</span>
            </span>
          </li>
        </ul>
        
      </div>
      <div className="container desktopProgress">
        <ul class="progress-indicator">
          <li class="completed">
            <span class="bubble"></span>
            Order Recieved
          </li>
          <li class="completed">
            <span class="bubble"></span>
            Order Accepted
          </li>
          <li class="completed">
            <span class="bubble"></span>
            Packed & Shipped
          </li>
          <li>
            <span class="bubble"></span>
            Out For Delivery
          </li>
          <li>
            <span class="bubble"></span>
            Delivered
          </li>
        </ul>
      </div>
      <div className="product-card col-md-12">
        <h4 className="h4">Product Details</h4>
        <div class="product-section col-md-12">
          <ul className="col-md-6">
            <li>
              <img src="https://www.cemx.in/front/img/cem2.png" alt=""></img>
            </li>
            {/* <p><b>Quantity</b> : <span>20 Pcs.</span></p> */}
          </ul>
          <ul className="col-md-6">
            <li>
              <p>
                Product Title : <span>Acc Cement Pack of two</span>
              </p>
            </li>
            <li>
              <p>
                Price : <span>Acc Cement Pack of two</span>
              </p>
            </li>
            <li>
              <p>
                Packeging Size : <span>21 Packets</span>
              </p>
            </li>
            <li>
              <p>
                Estimated Delivery : <span>29 Dec 2021</span>
              </p>
            </li>
            <li>
              <p>
                <a href="/moredetails">More Details</a>{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="track_footer_section">
        <button onClick="/cart" class="btn backToCart">
          Back to Cart
        </button>
      </div>
    </div>
  );
}

export default OrderTrack;
