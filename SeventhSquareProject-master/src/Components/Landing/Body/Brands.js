import React from 'react'
import "./Testimonial.css";
import Brand from "../../../images/brand.png";
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Brands() {

  const [data, setdata] = useState({});
  const [all, setall] = useState({});
  const [data2, setdata2] = useState({});
  const [data3, setdata3] = useState({});
  const [data4, setdata4] = useState({});
  const [data5, setdata5] = useState({});
  const [data6, setdata6] = useState({});
  const [data7, setdata7] = useState({});
  const [data8, setdata8] = useState({});
  const [data9, setdata9] = useState({});
  const [data10, setdata10] = useState({});
  const [data11, setdata11] = useState({});
  const [data12, setdata12] = useState({});
  const [data13, setdata13] = useState({});
  const [data14, setdata14] = useState({});
  const [data15, setdata15] = useState({});
  const [data16, setdata16] = useState({});
  const [data17, setdata17] = useState({});
  const [data18, setdata18] = useState({});
  const [data19, setdata19] = useState({});
  const [data20, setdata20] = useState({});

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };



  const getreview = async () => {

    const res = await fetch(
      "https://seller.seventhsq.com/account/companyname/logo/",
    );
    const data = await res.json();

    console.log(data);
    setdata(data[1]['lopicture']);
    setdata2(data[2]['lopicture']);
    setdata3(data[3]['lopicture']);
    setdata4(data[4]['lopicture']);
    setdata5(data[5]['lopicture']);
    setdata6(data[6]['lopicture']);
    setdata7(data[7]['lopicture']);
    setdata8(data[8]['lopicture']);
    setdata9(data[9]['lopicture']);
    setdata10(data[10]['lopicture']);
    setdata11(data[11]['lopicture']);
    setdata12(data[12]['lopicture']);
    setdata13(data[13]['lopicture']);
    setdata14(data[14]['lopicture']);
    setdata15(data[15]['lopicture']);
    setdata16(data[16]['lopicture']);
    setdata17(data[17]['lopicture']);
    // setdata10(data[18]['lopicture']);
    // setdata10(data[19]['lopicture']);

  };

  useEffect(()=>{
    // getreview();
},[])

         return (
           <div  >
          
      <section class="section brands" style={{  padding:" 30px"}}>
  <div class="title">
    <span className="h1">Brands associated with us </span>
  </div>

  <div style={{width:"100%"}} class="customer-logos slider">

    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/1.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/2.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/3.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/4.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/5.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/6.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/7.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/8.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/9.png"} alt="logo" />
    </div>
    <div class="slide">
    <img src={"https://raw.githubusercontent.com/theseventhsquare/logo_images/main/10.png"} alt="logo" />
    </div>

    </div>
    {/* {data
                ? data.map((curr, index) => {
                    return (
                      <div class="slide" style={{height:"100px !important"}}>
                      <img  key={index} style={{height:"100px !important"}} src={`https://seller.seventhsq.com${curr.lopicture}`} />
                      /</div>
           
                    );
                  })
                :  null} */}


</section>
  </div> 
      
    
         );
              }

export default Brands

{/* <div>
      <section class="section brands">
  <div class="title">
    <span className="h1">Brands associated with us </span>
  </div>

  <div class="customer-logos slider">
    <div class="slide">
      <img src=src={`https://seller.seventhsq.com${curr.lopicture}`} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
    <div class="slide">
      <img src={Brand} alt="logo" />
    </div>
  </div>
</section>
  </div> */}

    {/* // <div>
        //     <section class="section brands">
        // <div class="title">
        //   <span className="h1">Brands associated with us </span>
        // </div>
        // <div class="customer-logos slider"> */}

     
        {/* {data
                ? data.map((curr, index) => {
                    return (
                      <div class="slide" style={{height:"100px !important"}}>
                      <img  key={index} style={{height:"100px !important"}} src={`https://seller.seventhsq.com${curr.lopicture}`} />
                      /</div>
           
                    );
                  })
                :  null} */}

      {/* //     </div>
      // </section>
      //   </div> */}