import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./accordion";
import Quotation from "./Quotation";
import Testimonial from "../Landing/Body/Testimonial";
import Blogs from "../Landing/Body/Benefits/Blog/Blogs"
// import { FaLessThan } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa";
// import logo from "../../images/service1"
import Fship from "../../images/freeship.png";
import Rship from "../../images/returnship.png";
import "./product.css";
import { FaArrowDown } from "react-icons/fa";
import { BrowserRouter as router, Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import BrandName from "./BrandName";
import Rfqmodal from "./Rfomodal";
import Rfpmodal from "./Rfpmodal";
import Bpoform from "./Bpoform";
import InfoModal from "./InfoModal";
import RelatedProducts from "./RelatedProducts";
import { verify } from "crypto";
import {FacebookShareButton,PinterestShareButton,TwitterShareButton,WhatsappShareButton,InstapaperShareButton,FacebookMessengerShareButton,TelegramShareButton} from "react-share";

// import Image1 from "../../images/1.jpg";
// import Image2 from "../../images/2.png";
// import Image3 from "../../images/3.jpg";
// import MainProduct from "../Landing/Body/MainProduct";
// import "./Scroll";
function Product() {
  const {id} = useParams();
  const NewID = id.toString();
  const [users, setUsers] = useState([]);
  const [quantity,setquantity]=useState(1)
  
  const[reviews,setreviews]=useState([]);
  const[totalreview,settotalreview]=useState(0);
  let history = useHistory();
 
  const [RfqmodalShow, setRfqModalShow] = useState(false);
  const [RfpmodalShow, setRfpModalShow] = useState(false);
  const [BpomodalShow, setBpoModalShow] = useState(false);
  const [InfomodalShow, setInfoModalShow] = useState(false);
  const [usertoken, setusertoken] = useState();


  const getreviews=async()=>{
    
    const config = {
      
      headers: {
       
        'Content-Type': 'application/json',
      }
    }
    const res=await fetch(`https://api.seventhsq.com/orders/review_get_by_product/${NewID}`);
    const data= await res.json();
    console.log(`reviews${data}`);
    let l=data.length
    let s=0
    setreviews(data);

    data.forEach(myFunction)
      function myFunction(item) {
        s += item.star;
      }
      settotalreview(s/l)
      console.log(totalreview)
  
    
    
}
  const getUsers = async () =>{
    console.log(`id${NewID}`)
    const response  = await fetch('https://seller.seventhsq.com/inventory/api/inventory_detail/' + NewID);
    
    setUsers(await response.json());
   
  
  }
  const addtolocal=async()=>{
    const body={
      "title": users.name,
      "oldprice": users.markedPrice,
      "pcksize": '3',
      "estdelivery": '1' ,
      "price": users.sellingPrice ,
      "quantity": quantity,
      "item": users.id,
      "gst":users.gstRate,
      "sellerId":users.account
      
    }
    var localcart=[]
    var storedcart = await JSON.parse(localStorage.getItem("localcart"));
    console.log(storedcart)
    if(storedcart!=null || storedcart!=undefined){
      localcart=storedcart.slice()
      console.log(localcart)
    }
    localcart.push(body)
    console.log(localcart)
    localStorage.setItem('localcart',JSON.stringify(localcart))
    
    window.alert("Added to Cart");
  }



  const addtocart=async()=>{
    console.log(users)
    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      
      body:JSON.stringify({
        "title": users.name,
        "oldprice": users.markedPrice,
        "pcksize": '3',
        "estdelivery": '1' ,
        "price": users.sellingPrice ,
        "quantity": quantity,
        "item": users.id,
        "gst":users.gstRate,
        "sellerId":users.account
        
      })
      
    };
    console.log(config);
    console.log(users)
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
      "title": users.name,
      "oldprice": users.markedPrice,
      "pcksize": '3',
      "estdelivery": '1' ,
      "price": users.sellingPrice ,
      "quantity": quantity,
      "item": users.id,
      "gst":users.gstRate,
      "sellerId":users.account
      
    })
  };
  console.log(config);
  const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
  const data= await res.json();
  console.log(data);
  history.push("/checkout");
  
  
}
const Verify=()=>{
  const token=localStorage.getItem('token')
  setusertoken(token)
  console.log(token)

}

  useEffect (() => {
    getUsers()
    Verify()
    getreviews()
   
   
  },[])
  
  
  return (

    <div>
      <div id="content-wrapper" key={users.id}>
        <div class="column">
          <ProductImage
          image = {NewID}
          />
          <div class="social-links">
            <p>Share on </p>
            
              
              <FacebookShareButton 
                url={window.location.href}
                quote={'Check this Amazing Product'}
                hashtag="#seventhsquare"
               >
                <i class="fab fa-facebook mx-1" style={{"font-size": "2em"}}></i>
              </FacebookShareButton>

              <TwitterShareButton
               url={window.location.href}
               quote={'Check this Amazing Product'}
               hashtag="#seventhsquare"
              >
                 <i class="fab fa-twitter mx-1" style={{"font-size": "2em"}}></i>
                </TwitterShareButton>

             <WhatsappShareButton
              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
             >
               <i class="fab fa-whatsapp mx-1" style={{"font-size": "2.2em"}}></i>
               </WhatsappShareButton>

               <PinterestShareButton
              url={window.location.href}
              media='SeventhSquare'
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
             >
                <i class="fab fa-pinterest mx-1" style={{"font-size": "2.2em"}}></i>
               </PinterestShareButton>
               
               <FacebookMessengerShareButton
              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
             >
               
                <i class="fab fa-facebook-messenger mx-1" style={{"font-size": "2.2em"}}></i>
               </FacebookMessengerShareButton>
 
              

               <TelegramShareButton
              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
             >
               
               <i class="fab fa-telegram mx-1" style={{"font-size": "2.2em"}}></i>
               </TelegramShareButton>
            
              
            
          </div>
        </div>

        <div class="column">
          <div class="col-md-12">
            <h2 class="product-title">{users.name}</h2>
            <h3 className='mt-5 ' >
              {users.brand_name}
            </h3>
            <div class="product-detail">
              <p>
                {users.description}
              </p>
            </div>

            <div class="price-col">
              <div class="product-price">
                <p class="last-price">
                  Price : <span>₹ {users.markedPrice} </span>&nbsp;&nbsp;
                </p>
                <p class="new-price">
                  <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹{users.sellingPrice} ({users.discount}%) /{users.qtyUnit}</span>
                </p>
                
              </div>
              <div class="product-rating">
                         
                              {
                                totalreview==0 ?<>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i></>:null
                              }
                              {totalreview>0 && totalreview<1?
                               <> <i class="fas fa-star-half"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {totalreview==1?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                               {totalreview>1 && totalreview<2?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                               {totalreview==2?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {totalreview>2 && totalreview<3?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                               {totalreview==3?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {totalreview>3 && totalreview<4 ?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {totalreview==4 ?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {totalreview>4 && totalreview<5 ?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                                </>
                                :null
                               }
                                {totalreview==5 ?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </>
                                :null
                               }

                                
                <span>{totalreview}/5</span>
              </div>
            </div>
            <div class="exclusiveGst">
              {
                users.incl_gst?
                <span > ( Inclusive of GST {users.gstRate}% )</span>:
                <span > ( Exclusive of GST {users.gstRate}% )</span>

              }
           
            </div>
            <div class="delivery-info">
              <input
                class="checkDelivery"
                type="number"
                placeholder="Enter Your Pincode"
              />
              <button
                type="button"
                class="btn btn-primary btn-md mr-1 mb-2 deliveryButton"
              >
                Check Delivery
              </button>
            </div>
            <div class="purchase-info">
              <div class="minimumorder">
                <input class="purchaseinput" type="number"  value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
               
              </div>

              <button onClick={ usertoken?addtocart:addtolocal}   class="btn btn-light btn-md mr-1 mb-2">
                <i class="fas fa-shopping-cart pr-2"  style={{"color":"white"}}></i>Add to Cart
              </button>
              <button type="button" class="btn btn-light btn-md mr-1 mb-2" onClick={buynow}>
                &nbsp;Buy Now
              </button>
              <button   class="btn btn-light btn-md mr-1 mb-2">
              <i class="far fa-heart pr-2" style={{"color":"white"}}></i>Add to Wishlist
              </button>
            </div>
            <div className="productaccordian">
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title1"
              />
             
              <>
               <label className="productAccordianLabel" for="title1">
               Product Specifications
                 <span>
                   <FaArrowDown />
                 </span>{" "}
               </label>
               <div class="accordianContent">
               {
                 users.subCategory?
                 <p>
                  Product Type : <span>{users.subCategory}</span>
                </p>:null
               }
                {
                  users.weight?
                  <p>
                  Product Weight : <span>{users.weight}Kg</span>
                </p>:null
                }
              
              {
                users.length ?
                <p>
                  Product Length : <span>{users.length} {users.dimensionUnit}</span>
                </p>:null
              }
              {
                users.width ?
                <p>
                  Product Width : <span>{users.width} {users.dimensionUnit}</span>
                </p>:null
              }
              {
                users.height ?
                <p>
                  Product Height : <span>{users.height} {users.dimensionUnit}</span>
                </p>:null
              }
                 {
                users.material ?
                <p>
                  Product Material : <span>{users.material}</span>
                </p>:null
              }
             {
               users.countryOfOrigin?
               <p>
                  Country of Origin : <span>{users.countryOfOrigin}</span>
                </p>:null
             }
             
              {
               users.guarantee?
               <p>
                  Guarantee : <span>{users.guarantee} yr</span>
                </p>:null
             }
               {
               users.warranty?
               <p>
                  Warranty : <span>{users.warranty} yr</span>
                </p>:null
             }
             {
               users.packagingSize?
               <p>
                  Packaging Size : <span>{users.packagingSize} </span>
                </p>:null
             }
              </div>
               
               </>
             

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title2"
              />
              {
                users.aboutBrand?
                <>
                <label className="productAccordianLabel" for="title2">
                  About the Brand
                  <span>
                    <FaArrowDown />
                  </span>
                </label>
  
                <div class="accordianContent">
                  <p>
                    <span>{users.aboutBrand} </span>
                  </p>
                </div>
                   </>:
                   null
              }
             
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title3"
              />
              {users.aboutUsage?
              <>
                     <label className="productAccordianLabel" for="title3">
              Usage
                <span>
                  <FaArrowDown />
                </span>
              </label>

              <div class="accordianContent">
                <p>{users.aboutUsage}</p>
              </div>
              </>:null
            }
             
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title4"
              />

              {
                users.aboutStorage?
                <>
                <label className="productAccordianLabel" for="title4">
              Storage
                <span>
                  <FaArrowDown />
                </span>
              </label>

              <div class="accordianContent">
                <p>{users.aboutStorage}</p>
              </div>
                </>:null
              }
              
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title5"
              />
              {users.aboutInstallation?
            <>
              <label className="productAccordianLabel" for="title5">
              Installation
                <span>
                  <FaArrowDown />
                </span>
              </label>

              <div class="accordianContent">
                <p>{users.aboutInstallation}</p>
              </div>
            </>:null
            }
              
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title6"
              />

              {users.aboutHandling?
               <>
                <label className="productAccordianLabel" for="title6">
              Handling
                <span>
                  <FaArrowDown />
                </span>
              </label>

              <div class="accordianContent">
                <p>{users.aboutHandling}
                </p>
              </div>
               </>:null
            }
              <input
                className="productAccordianInput"
                type="checkbox"
                id="title7"
              />
               <label className="productAccordianLabel" for="title7">
                Reviews
                <span>
                  <FaArrowDown />
                </span>
              </label>
              <div class="accordianContent">
                { 
                  reviews.length>0?
                  reviews.map((curr,index)=>{
                         return(
                          
                           <div>
                           
                             <h4>
                               {curr.title}
                             </h4>
                             <div class="review-rating">
                               {curr.star=='1'?
                                <i class="fas fa-star"></i>:null
                               }
                                {curr.star=='2'?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </>
                                :null
                               }
                               {curr.star=='3'?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </>
                                :null
                               }
                               {curr.star=='4'?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                
                                
                                </>
                                :null
                               }
                                {curr.star=='5'?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </>
                                :null
                               }
                                
                                <span>{curr.star}/5</span>
                              </div>
                             <p>
                               {curr.review}
                             </p>
                             </div>
                         )
                  }):null
                }
              </div>
              
            </div>
            
            <div class="d-flex justify-content-start">
            {/* <img style={{height: '40px', width: '40px'}}src={Rship} /> */}
            {/* <div className='container mb-4 '> */}
               {
                 users.returnable==true?
                 <img style={{paddingBottom:'1px' ,height: '40px', width: '40px'}}src={Rship} />:null
               }
             

            {/* </div> */}

            {/* <div className='container mb-4 '> */}
            {
              users.incl_shipping==true?
              <img style={{paddingLeft:'10px' ,height: '30px', width: '70px'}}src={Fship} />:null
            }
            
            
              {/* <h5> <i class="fas fa-truck fa-3x" style={{color:'white'}}></i>Free Shipping</h5> */}
            {/* </div> */}

            </div>
            
          </div>

          {/* <Quotation/> */}
          <div>
             <div >
          <h2 className="quotationHeading">Request for : </h2>
        </div>
      <div class="quotationwrapper">
       

        <button className='m-3' onClick={() => setRfqModalShow(true)}>
        <div class="button">
          <div class="icon">
            Quotation
            </div>
        </div>
        </button>

        <button class="className='m-3'"  onClick={() => setInfoModalShow(true)}>
        <div class="button">
          <div class="icon">Information</div>
        </div>
        </button>

        <button class="className='m-3'"  onClick={() => setRfpModalShow(true)}>
        <div class="button">
          <div class="icon">Proposal</div>
        </div>
        </button>

        <button class="className='m-3'"  onClick={() => setBpoModalShow(true)}>
        <div class="button">
          <div class="icon">Blanket PO</div>
        </div>
        </button>

      </div>
    </div>
        </div>
      </div>
     {
       users.subCategory?<section class="section products">
       <div class="title">
         <span class="h2 my-2">Related Products</span>
       </div>
       <RelatedProducts sub={users.category}/>
       <div class="product-layout">
       </div>
     </section>:null
     }
      
<Blogs/>
      <Testimonial />
              <Rfqmodal
               show={RfqmodalShow}
               id={users.id}
               category={users.category}
               
               onHide={() => setRfqModalShow(false)}
              />
              <Rfpmodal
              show={RfpmodalShow}
              id={users.id}
              category={users.category}
              onHide={() => setRfpModalShow(false)}
              />
              <Bpoform
              show={BpomodalShow}
              id={users.id}
              category={users.category}
              onHide={() => setBpoModalShow(false)}
              />
              <InfoModal
              show={InfomodalShow}
              id={users.id}
              category={users.category}
              onHide={() => setInfoModalShow(false)}
              />
             
    </div>
  );
}

export default Product;