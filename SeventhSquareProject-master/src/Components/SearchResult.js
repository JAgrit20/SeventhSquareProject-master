import React, { useEffect,useState } from "react";
import ProductImageIndividual from "./Landing/Body/ProductImageIndividual";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './SearchResult.css'
function SearchResult(props) {
    const[result,setresult]=useState([]);
    const getdata=async()=>{
        const res=await fetch(`https://seller.seventhsq.com/inventory/api/inventory_detail_by_tags/${props.match.params.slug.toString()}`);
        const data= await res.json();
        console.log(data);
        setresult(data);
    
    }
    useEffect(()=>{
        getdata();
    },[])
    
    return (
        <div className='container'>
            <div className='result-box'>
            {  result.length>0?
                result.map((product)=>{
                    return(
                        <Link to={"/product/"   + product.id.toString()} >
                        <div class={'product my-2 ' } key={product.id}>
              <div class="img-container shadow">
                <ProductImageIndividual
                image = {product.id.toString()}
                />
                {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                <div class="addCart">
                  <i class="fas fa-shopping-cart"></i>
                </div>
      
                <ul class="side-icons">
                  <span>
                    <i class="fas fa-search"></i>
                  </span>
                  <span>
                    <i class="far fa-heart"></i>
                  </span>
                  <span>
                    <i class="fas fa-sliders-h"></i>
                  </span>
                </ul>
              </div>
              <div class="bottom shadow">
              <p>{product.name}</p>
             
                <div class="price">
                  <span>₹{product.sellingPrice}</span>
                </div>
              </div>
            </div>
            </Link>  


                    )
                }
                ):<div >
                    
                    <h1 className='text-center'>
                        No Results
                    </h1>
                    <div className='empty-results'>
                        </div>
                       
                   
                    
                    </div>
            }

            </div>
           
            
            
        </div>
    )
}

export default SearchResult
