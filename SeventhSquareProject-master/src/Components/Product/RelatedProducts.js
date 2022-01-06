import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProductImageIndividual from '../Landing/Body/ProductImageIndividual';

import "../Landing/Body/MainProduct.css"
import '../Landing/Body/MostPopularCarousel.css'
function RelatedProducts(props) {
    
      const [related, setRelated] = useState([]);

      const getRelated = async()=>{
            
        let city=localStorage.getItem("city")
    
        console.log(`city${city}`)
        if(city==null){
          city='Pan India'
        }
         
        const response = await fetch(
          "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
            props.sub +'/'+city
        );
        setRelated(await response.json());
         
      }
      useEffect (() => {
       
        getRelated()
      },[])
      

    const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 4 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };


    return (
      <div class="mt-5">
      <div class="">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={responsive.desktop}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
      
        {related.slice(0,15).map((product) => (
           <Link to={"/product/" + product.id.toString()}>
           <div class={"product my-2 Mostpopulardiv ml-5"} key={product.id}  id="prod">
             <div class="card-body"  style={{width:"90%"}}>
               <div class="img-container shadow" >
                 <ProductImageIndividual image={product.id.toString()} />
                 {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                 
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
                   {product.category}
                   {" > "}
                   {product.subCategory}
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
      
      {/* <div className='container overflow-hidden'>
      <img src="https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat-1030x580.jpg" />   
      </div>
      <div className='container overflow-hidden'>
      <img src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg" />  
      </div>
      <div className='container overflow-hidden'>
      <img src="https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat-1030x580.jpg" />  
      </div>
      <div className='container overflow-hidden'>
      <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />  
      </div>
      <div className='container overflow-hidden'>
      <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" /> 
      </div> */}
    </Carousel>
    </div>
    </div>
    )
}

export default RelatedProducts
