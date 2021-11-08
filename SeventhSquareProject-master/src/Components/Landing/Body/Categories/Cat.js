import React, { useEffect, useState ,useCallback} from "react";

import "./categoriesProduct.css";
import CatItem from "./CatItem";
function Cat(props) {
  // const [filteredProducts, setfilteredProducts] = useState([]);
  
  // useEffect(() => {
  //   console.log('first')
  //   setfilteredProducts(props.product)
  //   console.log(props.product)
  //   console.log(filteredProducts)
  //   if(props.bricksize!=0){
  //       setfilteredProducts(
  //         props.product.filter((products)=>{
  //           return products.length==props.bricksize
  //           })

  //       )
  //   }

  // },[props.product] );

 
  
  return( props.product.map((curr,index) => {
    return (
      //   <div class={'product my-2 ' } key={curr.id}>
      //   <div class="img-container shadow">
      //     <img src={"https://seller.seventhsq.com"+ curr.image} alt={curr.name} width="100px" />

      //   </div>
      //   <div class="bottom shadow">
      //   <p>{curr.name}</p>
      //   <p>{curr.category}</p>
      //   <p>{curr.description}</p>

      //     <div class="price">
      //       <span>₹{curr.sellingPrice}</span>
      //     </div>
      //   </div>
      // </div>
      // "title": users.name,
      // "oldprice": users.markedPrice,
      // "pcksize": '3',
      // "estdelivery": '1' ,
      // "price": users.sellingPrice ,
      // "quantity": 1,
      // "item": users.id,
      // "gst":users.gstRate
      
             <CatItem  name={curr.name} price={curr.sellingPrice} key={index} id={curr.id} oldp={curr.markedPrice} gst={curr.gstRate} handleapply={props.handleapply} />
      
    );
  }));
}

export default Cat;
