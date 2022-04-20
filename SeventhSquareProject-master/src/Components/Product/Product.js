import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./accordion";
import Quotation from "./Quotation";
import Testimonial from "../Landing/Body/Testimonial";
import Blogs from "../Landing/Body/Benefits/Blog/Blogs";
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
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
} from "react-share";
import { Add_to_whishlist } from "../../services/apicalls";

// import Image1 from "../../images/1.jpg";
// import Image2 from "../../images/2.png";
// import Image3 from "../../images/3.jpg";
// import MainProduct from "../Landing/Body/MainProduct";
// import "./Scroll";
function Product() {
  const { id } = useParams();
  const NewID = id.toString();
  const [users, setUsers] = useState([]);
  const [userdata, setuserdata] = useState([])
  const [quantity, setquantity] = useState(1);
  console.log(users, "users");
  const [reviews, setreviews] = useState([]);
  const [totalreview, settotalreview] = useState(0);
  const [totalview, settotalview] = useState(0);
  let history = useHistory();

  const [RfqmodalShow, setRfqModalShow] = useState(false);
  const [RfpmodalShow, setRfpModalShow] = useState(false);
  const [BpomodalShow, setBpoModalShow] = useState(false);
  const [InfomodalShow, setInfoModalShow] = useState(false);
  const [vari_drop, setvari_drop] = useState(false);
  const [usertoken, setusertoken] = useState();
  const [var_id, setvar_id] = useState();
  const [var_sp, setvar_sp] = useState();
  const [var_mp, setvar_mp] = useState();
  const [final_mrp, setfinal_mrp] = useState();
  const [def_mrp, setdef_mrp] = useState();
  const [def_type, setdef_type] = useState();
  const [def_sp, setdef_sp] = useState();
  const [def_var, setdef_var] = useState();
  const [def_prod_index, setdef_prod_index] = useState();
  const [final_sp, setfinal_sp] = useState();
  const [variants, setvariants] = useState([]);
  const [variants_selected, setvariants_selected] = useState([]);
  const [variants_select, setvariants_select] = useState([]);
  const [variants_tag, setvariants_tag] = useState([]);
  const [Var_poq, setVar_poq] = useState([]);
  const [variants_mrp, setvariants_mrp] = useState([]);
  const [variants_sp, setvariants_sp] = useState([]);
  const [check_poq, setcheck_poq] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  const getreviews = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `https://api.seventhsq.com/orders/review_get_by_product/${NewID}`
    );
    const data = await res.json();
    // console.log(`reviews${data}`);
    let l = data.length;
    let s = 0;
    setreviews(data);

    data.forEach(myFunction);
    function myFunction(item) {
      s += item.star;
    }
    settotalreview(s / l);
    // console.log(totalreview);
  };
  const handlechange = (e) => {
    let value = e.target.value
    
    function myReplaceFunction(element) {
      // console.log("replace is run")
      element = element.replace(/[\[\]']+/g, ' ');
      console.log("replace is run",element)
     }
    //  variantMp_data.forEach(myReplaceFunction)
    setvar_id(value)
    setvar_mp(variants_mrp[value].replace(/[\[\]']+/g, ''))
    console.log("check poq")
    console.log("see spacing",Var_poq[value].replace(/[\[\]']+/g, '',"see spacing"))
    setcheck_poq(Var_poq[value].replace(/[\[\]']+/g, ''))
    setvar_sp(variants_sp[value].replace(/[\[\]']+/g, ''))
    setfinal_mrp(parseInt(variants_mrp[value].replace(/[\[\]']+/g, '')))
    setfinal_sp(parseInt(variants_sp[value].replace(/[\[\]']+/g, '')))
    
 }
  const get_logedin_user = async () => {
    const token = localStorage.getItem("token");

    fetch("https://api.seventhsq.com/user_profile/get_profile/", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `token ${token}`,
      },
    })

      .then((v) => v.json())
      .then((v) => {
       
        Add_to_whishlist(v.user.id, users.id);
      });

    // console.log(users.id)
  };


  const getUsers = async () => {
    console.log(`id${NewID}`);
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail/" + NewID
    );

    var  data =  await response.json();
    setUsers(data);

    console.log( "response.data");
    // console.log(response.json());
    // console.log("users");
    // console.log(users['name']);
    console.log('variant')
    console.log(data['defaultPOQ'])
    setcheck_poq((data['defaultPOQ']))
    setvar_mp(parseInt(data['defaultMP']))
    setfinal_mrp(parseInt(data['defaultMP']))
    setvar_sp(parseInt(data['defaultSP']))
    setfinal_sp(parseInt(data['defaultSP']))
    setdef_type((data['selectVariant_data'].replace(/[\[\]']+/g, '')))
    setdef_var((data['defaultVar']))
    if(data['variant']){
      console.log("yes vari")
      let selectVariant_data = data['selectVariant_data'].split(', ');
      setvari_drop(true)
      let tag_Variant = data['tag_Variant'].split(',');
      let selectedVariant_data = data['selectedVariant_data'].split(', ');
      let variantMp_data = data['variantMp_data'].split(',');
      let variantSp_data = data['variantSp_data'].split(',');
      let Variant_Onrequest_all_data = data['Variant_Onrequest_all_data'].split(',');
      let Var_isDefault_all_data = data['Var_isDefault_all_data'].split(', ');


      console.log("selectVariant_data",selectVariant_data)
      console.log("tag_Variant",tag_Variant)
      console.log("selectedVariant_data",selectedVariant_data)
      console.log("variantMp_data",variantMp_data)
      console.log("variantSp_data",variantSp_data)
      console.log("Var_isDefault_all_data",Var_isDefault_all_data)

      Var_isDefault_all_data.forEach(myFunction);

      function myFunction(item, index) {
        console.log("check index", index+item.replace(/[\[\]']+/g, ''))

     if ((item.replace(/[\[\]']+/g, '')) == "True"){
      setvar_id(index)
        console.log("final index", index+item)
     }
      }

      setVar_poq(Variant_Onrequest_all_data)
      setvariants_selected(selectedVariant_data)
      setvariants_select(selectVariant_data)
      setvariants_tag(tag_Variant)
      setvariants_mrp(variantMp_data)
      setvariants_sp(variantSp_data)
      
    }
    
    // var varr = data['variant']
    // console.log(typeof(JSON.parse(varr)))
    // var ans = JSON.parse(JSON.stringify(varr)) 
    // console.log("typeof")
    // console.log(typeof(ans))
    // console.log((ans))
    // console.log("ok")
    // console.log(typeof(JSON.parse(ans)))
    // console.log((ans))
    // setvariants((ans))  
  };
  // const updateView = async () => {
  //   console.log(`id${NewID}`);
  //   const response = await fetch(
  //     "http://127.0.0.1:8000/inventory/api/inventory_detail/" + NewID
  //   );
  //   settotalview( response.json()['views'])
  //   setUsers(await response.json());
  // };

  const updateView = async () => {


    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        sells:0
      }),
    };
    // console.log(config);
    // console.log(users);
    const res = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail/" + NewID,
      config
    );
    //  const data = await res.json();
    // console.log(data);

    // window.alert("updated views");
  };
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
    // console.log(config);
    // console.log(users);
    const res = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail/" + NewID,
      config
    );
    // window.alert("updated views");
  };

 
  const addtolocal = async () => {
    const body = {
      title: users.name,
      oldprice: final_mrp? final_mrp :users.markedPrice,
      pcksize: "3",
      estdelivery: "1",
      price: final_sp? final_sp :users.sellingPrice,
      quantity: quantity,
      item: users.id,
      gst: users.gstRate,
      sellerId: users.account,
      var_id:var_id?var_id:null,
    };
    var localcart = [];
    var storedcart = await JSON.parse(localStorage.getItem("localcart"));
    // console.log(storedcart);
    if (storedcart != null || storedcart != undefined) {
      localcart = storedcart.slice();
      // console.log(localcart);
    }
    localcart.push(body);
    // console.log(localcart);
    localStorage.setItem("localcart", JSON.stringify(localcart));

    window.alert("Added to Cart");
  };

  const addtocart = async () => {
    console.log("final_sp",final_sp)


    updatesells()
    // console.log(users);
    const config = {
      method: "POST",
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: users.name,
        oldprice: final_mrp? final_mrp :users.markedPrice,

        pcksize: "3",
        estdelivery: "1",
        price: final_sp? final_sp :users.sellingPrice,

        quantity: quantity,
        item: users.id,
        gst: users.gstRate,
        sellerId: users.account,
        brand:users.brand_name,
        incl_gst:users.incl_gst,
        category:users.category,
        subcategory:users.subCategory,
        var_id:var_id?var_id:null,
      }),
    };
    // console.log(config);
    console.log("users");
    const res = await fetch(
      "https://api.seventhsq.com/orders/add-to-cart/",
      config
    );

    window.alert("Added to Cart");
    const data = await res.json();
    // console.log(data);
  };

  const buynow = async () => {
    console.log("final_sp",final_sp)
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: users.name,
        oldprice: final_mrp? final_mrp :users.markedPrice,
        pcksize: "3",
        estdelivery: "1",
        price: final_sp? final_sp :users.sellingPrice,
        quantity: quantity,
        item: users.id,
        gst: users.gstRate,
        sellerId: users.account,
        var_id:var_id?var_id:null,
      }),
    };
    // console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/orders/add-to-cart/",
      config
    );
    const data = await res.json();
    // console.log(data);
    history.push("/checkout");
  };
  const Verify = () => {
    const token = localStorage.getItem("token");
    setusertoken(token);
    // console.log(token);
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    getUsers();
    Verify();
    getreviews();


  }, []);
  useEffect(() => { 

    updateView();
    // postrecent();

  }, []);

  console.log(users, "main users");

  return (
    <div style={{overflow: "hidden"}}>
      <div id="content-wrapper" key={users.id}>
        <div class="column">
          <ProductImage image={NewID} />
          <div class="social-links">
            <p>Share on </p>

            <FacebookShareButton
              url={window.location.href}
              quote={"Check this Amazing Product"}
              hashtag="#seventhsquare"
            >
              <i
                class="fab fa-facebook mx-1"
                style={{ "font-size": "2em" }}
              ></i>
            </FacebookShareButton>

            <TwitterShareButton
              url={window.location.href}
              quote={"Check this Amazing Product"}
              hashtag="#seventhsquare"
            >
              <i class="fab fa-twitter mx-1" style={{ "font-size": "2em" }}></i>
            </TwitterShareButton>

            {/* <WhatsappShareButton

              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
            /> */}

            {/* <i class="fab fa-facebook mx-1" style={{ "font-size": "2em" }}></i>
            </FacebookShareButton> */}

            {/* <TwitterShareButton
              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
            >
              <i class="fab fa-twitter mx-1" style={{ "font-size": "2em" }}></i>
            </TwitterShareButton> */}

            <WhatsappShareButton
              url={window.location.href}
              quote={"Check this Amazing Product"}
              hashtag="#seventhsquare"
            >
              <i
                class="fab fa-whatsapp mx-1"
                style={{ "font-size": "2.2em" }}
              ></i>
            </WhatsappShareButton>

            <PinterestShareButton
              url={window.location.href}
              media="SeventhSquare"
              quote={"Check this Amazing Product"}
              hashtag="#seventhsquare"
            >
              <i
                class="fab fa-pinterest mx-1"
                style={{ "font-size": "2.2em" }}
              ></i>
            </PinterestShareButton>

            {/* <FacebookMessengerShareButton
              url={window.location.href}
              quote={'Check this Amazing Product'}
              hashtag="#seventhsquare"
            >

              <i class="fab fa-facebook-messenger mx-1" style={{ "font-size": "2.2em" }}></i>
            </FacebookMessengerShareButton> */}

            <TelegramShareButton
              url={window.location.href}
              quote={"Check this Amazing Product"}
              hashtag="#seventhsquare"
            >
              <i
                class="fab fa-telegram mx-1"
                style={{ "font-size": "2.2em" }}
              ></i>
            </TelegramShareButton>
          </div>
        </div>

        <div class="column">
          <div class="col-md-12">
            
        
<h2 class="product-title">{users.name}</h2>
            <h3 className="mt-5 ">{users.brand_name}</h3>
            <div class="product-detail">
              <p>{users.description}</p>
            </div>

            <div class="price-col">
              <div class="product-price" style={{alignItems:"baseline"}}>

              {(() => {
        if (users.Price_on_request == false && vari_drop == false && users.markedPrice != 0) {
          return (
            <div>
            <p class="last-price"> 
             Price : <span>₹ {users.markedPrice} </span>&nbsp;&nbsp;
           </p>
        
           <p class="new-price">
             <span>
               <i class="fa-solid fa-indian-rupee-sign"></i> ₹
               {users.sellingPrice}/{users.qtyUnit}  ({users.discount}% OFF) 


             </span>
           </p>
             </div>
          )
        } else if (setvar_mp) {
          return (
            <>
             {(() => {
            if(check_poq==" False" || check_poq=="False" || check_poq=="false" || check_poq==" false" ){
              return (  
                <>
            <p class="last-price"> 
                Price : <span>₹ {var_mp} </span>&nbsp;&nbsp;
                 </p>
              
                 <p class="new-price">
                   <span>
                     <i class="fa-solid fa-indian-rupee-sign"></i> ₹
                     {var_sp}
              
                   </span>
                 </p>
                 </>
              )
            }
            else{
              return (
                <>
            <h6 style={{fontSize:"15px",color:"red"}} class="product-title">Price On Request </h6>
                
                </>
                )
            }
          })()}
          {
            
            vari_drop &&


                 <select onChange={handlechange}>


{variants_selected? variants_selected.map((curr, index) => {
return (
<>
<option value={index}> {curr.replace(/['"\[\]']+/g, '')}</option>
</>
)
}
)
: null}
</select>
          }
            </>
          )
        } else {
          return (
            <h6 style={{fontSize:"20px",color:"red"}} class="product-title">Price On Request </h6>

          )
        }
      })()}
                         
                <p>
                  {
vari_drop &&
                <span style={{marginRight:"10px",marginLeft:"10px"}}> Variant: {def_type} </span>
                  }
     
                </p>
              </div>
              <div class="product-ratin">
                {totalreview == 0 ? (
                  <>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview > 0 && totalreview < 1 ? (
                  <>
                    {/* <i class="fas fa-star-half"></i> */}
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview == 1 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview > 1 && totalreview < 2 ? (
                  <>
                    <i class="fas fa-star"></i>
                    {/* <i class="fas fa-star-half"></i> */}
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview == 2 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview > 2 && totalreview < 3 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    {/* <i class="fas fa-star-half"></i> */}
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview == 3 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview > 3 && totalreview < 4 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    {/* <i class="fas fa-star-half"></i> */}
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview == 4 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </>
                ) : null}
                {totalreview > 4 && totalreview < 5 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    {/* <i class="fas fa-star-half"></i> */}
                  </>
                ) : null}
                {totalreview == 5 ? (
                  <>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    
                  </>
                ) : null}

              </div>
<span style={{fontSize:"15px",fontWeight:700,paddingLeft:"2px"}}>{totalreview.toFixed(1)}/5</span>
            </div>
            <div class="exclusiveGst">
              
            
              {users.incl_gst  ? (
                <span> ( Inclusive of GST {users.gstRate}% )</span>
              ) : (
                <span> ( Exclusive of GST {users.gstRate}% )</span>
              )}
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
              <div class="minimumorder" style={{display:"flex",flexDirection:"column"}}>
                <input
                  class="purchaseinput"
                  type="number"
                  value={quantity}
                  onChange={(e) => setquantity(e.target.value)}
                />
                
              <span style={{ fontWeight: 600, fontSize: "15px" }}>
                  {" "}
                  Min quantity: {users.qty}{" "}
              </span>
              </div>
              {
                !users.Price_on_request &&
              <button
                onClick={usertoken ? addtocart : addtolocal}
                class="btn btn-light btn-md mr-1 mb-2"
              >
                <i
                  class="fas fa-shopping-cart pr-2"
                  style={{ color: "white" }}
                ></i>
                Add to Cart
              </button>
              }
              {
                users.Price_on_request &&
              <button
              onClick={() => setRfqModalShow(true)}
                class="btn btn-light btn-md mr-1 mb-2"
              >

                Request For Quotation
              </button>
              }
                <div style={{display:"flex"}}>
                  {
          !users.Price_on_request &&
              <button
                type="button"
                class="btn btn-light btn-md mr-1 mb-2"
                onClick={buynow}
              >
                &nbsp;Buy Now
              </button>
                  }
              <button
                class="btn btn-light btn-md mr-1 mb-2"
                onClick={get_logedin_user}
              >
                <i class="far fa-heart pr-2" style={{ color: "white" }}></i>Add to Wishlist
              </button>
            </div>
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
                  {users.HSN ? (
                    <p>
                      HSN Code : <span>{users.HSN}</span>
                    </p>
                  ) : null}
                  {users.subCategory ? (
                    <p>
                      Product Type : <span>{users.subCategory}</span>
                    </p>
                  ) : null}
                  
                  {users.weight ? (
                    <p>
                      Product Weight : <span>{users.weight}Kg</span>
                    </p>
                  ) : null}

                    <p>
                      Product Dimension :
                    </p>
                  {users.length ? (
                    <p style={{paddingLeft:"10px"}}>
                       Length :{" "}
                      <span>
                        {users.length} {users.productdimensionUnit}
                      </span>
                    </p>
                  ) : null}
                  {users.width ? (
                   <p style={{paddingLeft:"10px"}}>
                       Width :{" "}
                      <span>
                        {users.width} {users.productdimensionUnit}
                      </span>
                    </p>
                  ) : null}
                  {users.height ? (
                     <p style={{paddingLeft:"10px"}}>
                       Height :{" "}
                      <span>
                        {users.height} {users.productdimensionUnit}
                      </span>
                    </p>
                  ) : null}
                  {users.material ? (
                    <p>
                      Product Material : <span>{users.material}</span>
                    </p>
                  ) : null}
                  {users.components ? (
                    <p>
                      Product components : <span>{users.components}</span>
                    </p>
                  ) : null}
                  {users.countryOfOrigin ? (
                    <p>
                      Country of Origin : <span>{users.countryOfOrigin}</span>
                    </p>
                  ) : null}

                  {users.guarantee ? (
                    <p>
                      Guarantee : <span>{users.guarantee} months </span>
                    </p>
                  ) : null}
                  {users.warranty ? (
                    <p>
                      Warranty : <span>{users.warranty} months </span>
                    </p>
                  ) : null}
                  {users.packagingSize ? (
                    <p>
                      Packaging Size : <span>{users.packagingSize} </span>
                    </p>
                  ) : null}
                </div>
              </>

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title2"
              />
              {users.aboutBrand ? (
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
                </>
              ) : null}

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title3"
              />
              {users.aboutUsage ? (
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
                </>
              ) : null}

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title4"
              />

              {users.aboutStorage ? (
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
                </>
              ) : null}

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title5"
              />
              {users.aboutInstallation ? (
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
                </>
              ) : null}

              <input
                className="productAccordianInput"
                type="checkbox"
                id="title6"
              />

              {users.aboutHandling ? (
                <>
                  <label className="productAccordianLabel" for="title6">
                    Handling
                    <span>
                      <FaArrowDown />
                    </span>
                  </label>

                  <div class="accordianContent">
                    <p>{users.aboutHandling}</p>
                  </div>
                </>
              ) : null}
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
                {reviews.length > 0
                  ? reviews.map((curr, index) => {
                      return (
                        <div>
                          <h4>{curr.title}</h4>
                          <div class="review-rating">
                            {curr.star == "1" ? (
                              <i class="fas fa-star"></i>
                            ) : null}
                            {curr.star == "2" ? (
                              <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </>
                            ) : null}
                            {curr.star == "3" ? (
                              <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </>
                            ) : null}
                            {curr.star == "4" ? (
                              <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </>
                            ) : null}
                            {curr.star == "5" ? (
                              <>
                                <i class="fas fa-star"></i>

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </>
                            ) : null}

                            <span>{curr.star}/5</span>
                          </div>
                          <p>{curr.review}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            <div class="d-flex justify-content-start">
              {users.returnable == true ? (
                <div style={{ display: "contents" }}>
                  <div style={{ display: "contents !important" }}>
                    <img
                      style={{
                        paddingBottom: "1px",
                        height: "30px",
                        width: "30px",
                      }}
                      src={Rship}
                    />
                    <div className="mt-2 mr-2">
                      <h5
                        style={{ fontFamily: "crimson Text", fontSize: "20px" }}
                      >
                        Returnable
                      </h5>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ display: "contents" }}>
                  <img
                    style={{
                      paddingBottom: "1px",
                      height: "30px",
                      width: "30px",
                    }}
                    src={Rship}
                  />
                  <div className="mt-2 mr-2">
                    <h5
                      style={{ fontFamily: "crimson Text", fontSize: "20px" }}
                    >
                      Non-Returnable
                    </h5>
                  </div>
                </div>
              )}

              {/* </div> */}

              {/* <div className='container mb-4 '> */}
              {users.incl_shipping == true ? (
                <img
                  style={{ paddingLeft: "10px", height: "30px", width: "70px" }}
                  src={Fship}
                />
              ) : null}

              {/* <h5> <i class="fas fa-truck fa-3x" style={{color:'white'}}></i>Free Shipping</h5> */}
              {/* </div> */}
            </div>
          </div>

          {/* <Quotation/> */}
          <div>
            <div>
              <h2 className="quotationHeading">Request for : </h2>
            </div>
            <div class="quotationwrapper">
              <button className="m-3" onClick={() => setRfqModalShow(true)}>
                <div class="button">
                  <div class="icon">Quotation</div>
                </div>
              </button>

              <button
                class="className='m-3'"
                onClick={() => setInfoModalShow(true)}
              >
                <div class="button">
                  <div class="icon">Information</div>
                </div>
              </button>

              <button
                class="className='m-3'"
                onClick={() => setRfpModalShow(true)}
              >
                <div class="button">
                  <div class="icon">Proposal</div>
                </div>
              </button>

              <button
                class="className='m-3'"
                onClick={() => setBpoModalShow(true)}
              >
                <div class="button">
                  <div class="icon">Blanket PO</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {users.subCategory ? (
        <section class="section products">
          <div class="title">
            <span class="h2 my-2">Related Products</span>
          </div>
          <RelatedProducts sub={users.category} />
          {/* <div class="product-layout"></div> */}
        </section>
      ) : null}

      <Blogs />
      <Testimonial />
      <Rfqmodal
        show={RfqmodalShow}
        id={users.id}
        category={users.category}
        name={users.name}
        users={users}
        onHide={() => setRfqModalShow(false)}
      />
      <Rfpmodal
        show={RfpmodalShow}
        id={users.id}
        users={users}
        category={users.category}
        onHide={() => setRfpModalShow(false)}
      />
      <Bpoform
        show={BpomodalShow}
        id={users.id}
        category={users.category}
        users={users}
        onHide={() => setBpoModalShow(false)}
      />
      <InfoModal
        show={InfomodalShow}
        id={users.id}
        category={users.category}
        onHide={() => setInfoModalShow(false)}
        users={users}
      />
    </div>
  );
}

export default Product;