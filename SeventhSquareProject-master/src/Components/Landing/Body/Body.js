import React, { Component } from "react";
import axios from "axios";
import "./Body.css";
import "./MainProduct.css";
import Brands from "./Brands";
import Blogs from "./Benefits/Blog/Blogs";
import "./Script";
import { Helmet } from 'react-helmet';
import Slider from "./Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Services from "./Services/Services";
import Benefits from "./Benefits/Benefits";
import { catItem } from "./Categories/CategoriesItem";
// import "./MainProduct.css";
import Categories from "./Categories/Categories";
import Testimonial from "./Testimonial";
import ProductImage from "../../Product/ProductImage";
import ProductImageIndividual from "./ProductImageIndividual";
import HomeSlider from "./HomeSlider";
import HomeSlider2 from "./HomeSlider2";
import MostPopularCarousel from "./MostPopularCarousel";
import LatestCarousel from "./LatestCarousel";
import RecentlyViewedCarousel from "./RecentlyViewed";
import { FaCartArrowDown } from "react-icons/fa";

// import { post } from "jquery";
export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      best: [],
      vieww: [],
      latest: [],
      recent: [],
      posts: [],
      loggedin: false,
    };
  }

  componentDidMount() {
    let city = localStorage.getItem("city");

    console.log(`city${city}`);

    city
      ? axios
          .get(
            `https://seller.seventhsq.com/inventory/api/inventory_detail_by_location/${city}`
          )
          .then(
            (response) => {
              this.setState({ posts: response.data,best: response.data,vieww: response.data,latest: response.data,recent: response.data});
              // console.log(this.state.posts.sort((a, b) => a['id'] - b['id']).reverse());
            },
            (err) => {
              console.log(err);
            }
          )
      : axios
          .get("https://seller.seventhsq.com/inventory/api/")
          .then((response) => {
            this.setState({ posts: response.data });
            const sorted = this.state.posts
            console.log("sorted");
            console.log(sorted);
          })
          .catch((error) => {
            console.log(error);
          });
  }
  render() {
    return (
      <div className="everything">

        
         <Helmet>
    <title>Home | Seventh Square</title>
    {/* The best website for buying Construction material */}
    <meta name="description" content=" The best website for buying Construction material" />
  </Helmet>
        {/* <HomeSlider2/> */}
        <HomeSlider />

        <div class="title">
          <span class="h1">Categories</span>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              width: 600,
              height: 2.0,
              borderColor: "#000000",
              margin: "auto",
              marginBottom: 20,
            }}
          />
        </div>

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
        <div class="containerr">
          <div class="cardicon">
            {catItem.map((curItem) => {
              return (
                <Link id="alink" style={{ paddingBottom: "5px"}}
                  to={
                    "/catogoriesLanding/" + curItem.title.split(" ").join("_")
                  }
                >
                  <div
                    class="card"
                    style={{
                      height: "120px",
                      width: "100px",
                      // borderRadius: "20px",
                      fontFamily: "open sans",
                      width: "80px",
                      padding: "1px",
                    }}
                  >
                    <div
                      class="card-body"
                      style={{ height: "100px", padding: "1px" }}
                    >
                      <div
                        className="item"
                        key={curItem.id}
                        style={{ width: "70px" }}
                      >
                        <img
                          src={curItem.image.default}
                          alt="itemimage"
                          class="card-img-top"
                          style={{ width: "100px" }}
                        />
                        <span
                          className="card-title"
                        style={{ marginRight: "5%",fontSize: "10px" ,marginBotton:"10px"}}
                        >
                          {curItem.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
            <div className="catBody">
      
        </div>
        <div className="container"  style={{width:"100%",justifyContent: "center"}}>
          <Categories />
        </div>

        <Benefits />
        <section class="section products">
          <div class="title">
            <span class="h1 my-2">Best Selling</span>
            <div class="my-2">
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  width: 600,
                  height: 2.0,
                  borderColor: "#000000",
                  margin: "auto",
                  marginBottom: 40,
                }}
              />
            </div>
            <div class="product-layout" >
              {this.state.posts.sort((a, b) => b['mostsells'] - a['mostsells']).slice(0, 12).map((product, index) => (
                 <Link to={"/product/" + product.id.toString()}>
                 <div class={"product my-2 Mostpopulardiv ml-5"} key={product.id}>
                   <div class="card-body">
                     <div class="img-container shadow">
                       <ProductImageIndividual image={product.id.toString()} />
                      
                     </div>
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         textAlign: "left",
                       }}
                       class="bottom shadow"
                     >
                       <p
                         style={{
                           fontSize: 15,
                           textAlign: "left",
                           color: "black",
                         }}
                       >
                         {product.name}
                       </p>
                       <p style={{ fontSize: 13, textAlign: "left" }}>
                         {product.category} {'>'} {product.subCategory}
                       </p>
                       {/* <p style={{fontSize:15,textAlign: "left"}}>{product.subCategory}</p> */}
   
                       <div class="price">
                         {/* <span
                           style={{
                             fontSize: 20,
                             fontFamily: "Times new roman",
                             fontWeight: "bold",
                           }}
                         >
                           ₹{product.sellingPrice}
                         </span> */}
                         <div class="product-price">
                           <p class="last-price">
                             <span
                               style={{
                                 fontSize: 15,
                                 fontFamily: "times new roman",
                                 // fontWeight: "bold",
                                 color: "grey",
                               }}
                             >
                               ₹ {product.markedPrice}{" "}
                             </span>
                             &nbsp;&nbsp;
                           </p>
                           <p class="new-price">
                             <span
                               style={{
                                 fontSize: 15,
                                 fontFamily: "times new roman",
                                 // fontWeight: "bold",
                               }}
                             >
                               <i class="fa-solid fa-indian-rupee-sign"></i> ₹
                               {product.sellingPrice} {"per"} {product.qtyUnit}{" "}
                               <span style={{ color: "grey" }}>
                                 {" "}
                                 ({product.discount}% OFF)
                               </span>
                             </span>
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </Link>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="section">
        <img className="offerImage" src="" alt=""/>
      </section> */}
        <section class="section products" style={{ width: "100%" }}>
          <div class="title">
            <span class="h1 my-2">Recently Viewed</span>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                width: 600,
                height: 2.0,
                borderColor: "#000000",
                margin: "auto",
                marginBottom: 40,
              }}
            />
          </div>

          <RecentlyViewedCarousel items={this.state.posts} />
        </section>
        <section class="section products">
          <div class="title">
            <span class="h1 my-2">Most Popular</span>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                width: 600,
                height: 2.0,
                borderColor: "#000000",
                margin: "auto",
                marginBottom: 20,
              }}
            />
          </div>
        </section>
        <MostPopularCarousel items={this.state.posts} />
        <section class="section products">
          <div class="title">
            <span class="h1 my-2">Latest Added</span>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                width: 600,
                height: 2.0,
                borderColor: "#000000",
                margin: "auto",
                marginBottom: 40,
              }}
            />
          </div>
        </section>       
        <LatestCarousel items={this.state.posts} />
        <Services />

        <Brands />
        <Blogs />
        <Testimonial />
      </div>
    );
  }
}
