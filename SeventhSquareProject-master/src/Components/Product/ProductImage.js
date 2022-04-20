import React, { useState,useEffect } from 'react'
import "./ImageScript"
import axios from "axios"
import "./ProductImage.css"
  function ProductImage(props)  {  
       const [images,setimages]=useState([])
       const [bigimage,setbigimage]=useState('')
       
       const getimages=async()=>{
       
        
          const res=await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.image}`);
          const data= await res.json();
          console.log("data")
          console.log(data)
          setimages(data)
          setbigimage(data[0].picture)
          
          console.log(bigimage);
      }

      useEffect(()=>{
       
        getimages()
        },[])
      
    // constructor(props) {
    //   super(props);
     
    //   this.state = {
    //     posts: [],
    //   };
    // }
    // componentDidMount() {
    //   axios
    //     .get("https://seller.seventhsq.com/inventory/api/picture/" + this.props.image)
    //     .then((response) => {
    //       this.setState({ posts: response.data });
    //       console.log(response);
    //       console.log(this.state.posts[1]["picture"])
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });  
    // }
    // clickme(smallImg){
    //   const fullImg = document.getElementById("imagebox");
    //   fullImg.src = smallImg.src;
    // }
    
        
        return(
          <div className="app">
            <div class="slider">
                    <div class="product" style={{overflow:"auto !important"}}>
                    { images.map((curr,index) =>(
              <div className="details">
              <div className="big-img">
              <img value={index} src= { "https://seller.seventhsq.com" + curr["picture"]} onClick={()=>setbigimage(curr["picture"])} alt=""  />
                   
                  </div>
                  
                  </div>
            )
                    )
            }
                      

                    </div>
                    <div class="preview">
                    
              <img src= { `https://seller.seventhsq.com${bigimage}`} /*onClick={()=>this.clickme()} */alt=""  />    
           
                </div>

            
        </div>
          </div>
        );
      }

export default ProductImage
