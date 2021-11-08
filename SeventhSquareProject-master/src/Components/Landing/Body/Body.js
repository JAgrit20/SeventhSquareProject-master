import React, { Component } from "react";
import axios from "axios";
import "./Body.css";
import "./MainProduct.css"
import Brands from "./Brands";
import Blogs from "./Benefits/Blog/Blogs";
import "./Script";
import Slider from "./Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Services from "./Services/Services";
import Benefits from "./Benefits/Benefits";
// import "./MainProduct.css";
import Categories from "./Categories/Categories";
import Testimonial from "./Testimonial";
import ProductImage from "../../Product/ProductImage";
import ProductImageIndividual from './ProductImageIndividual';
import HomeSlider from "./HomeSlider";
import MostPopularCarousel from "./MostPopularCarousel";
import BestSellerCollage from "./BestSellerCollage";
import RecentlyViewedCarousel from "./RecentlyViewed";
import { FaCartArrowDown } from "react-icons/fa";


// import { post } from "jquery";
export default class Body extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      posts: [],
      loggedin:false
    
    };
  }

  
  componentDidMount() {
    let city=localStorage.getItem("city")
    
    console.log(`city${city}`)

    city?
    axios.get(`https://seller.seventhsq.com/inventory/api/inventory_detail_by_location/${city}`)
      .then(
         response=>{
          this.setState({ posts: response.data });
          console.log(this.state.posts)
          },
          err => {
console.log(err)
          }
      )
    :
    axios
      .get("https://seller.seventhsq.com/inventory/api/")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(this.state.posts)
      
      })
      .catch((error) => {
        console.log(error);
      })
      
  }
  render() {
    return (
      <div>
        <HomeSlider/>
      <section class="section products my-2">
        <div class="title">
          <span class="h1">Categories</span>
          
        </div>
        <br/>
        <Categories />
      </section>
      <Benefits />
        <section class="section products">
          <div class="title">
            <span class="h1 my-2">Best Selling</span>
            <div class="product-layout">
              {this.state.posts.slice(0,12).map((product,index) => (
              <Link to={"/product/"   + product.id.toString()} >
                  <div class={'product my-2 ' } key={product.id}>
        <div class="img-container shadow">
          <ProductImageIndividual
          image = {product.id.toString()}
          product={product}

          />
          {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
          {/* <div class="addCart">
            <i class="fas fa-shopping-cart"></i>
          </div> */}

         
        </div>
        <div class="bottom shadow">
        <p>{product.name}</p>
       
          <div class="price">
            <span>₹{product.sellingPrice}</span>
          </div>
        </div>
      </div>
      </Link>  
              ))}
              ;
            </div>
          </div>
        </section>
        {/* <section className="section">
        <img className="offerImage" src="" alt=""/>
      </section> */}
      <section class="section products">
        <div class="title">
          <span class="h1 my-2">Recently Viewed</span>
          </div>
          <RecentlyViewedCarousel items={this.state.posts}/>
        
        
      </section>
      <section class="section products">
        <div class="title">
          <span class="h1 my-2">Most Popular</span>
        </div>
      </section>
      <MostPopularCarousel  items={this.state.posts}/>
      <div class="title">
          <span class="h1 my-2">Latest Products</span>
        </div>
      <BestSellerCollage    items={this.state.posts}/>
      <Services />

      <Brands/>
      <Blogs/>
      <Testimonial />
      
      
      </div>
    );
  }
 
}

