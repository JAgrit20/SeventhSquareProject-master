import React from "react";
import "./MainProduct.css";


  function MainProduct(id, name, image, price, className) {
    return(
      
      <div class={'product my-2 ' + className} key={id}>
        <div class="img-container shadow">
          <img src={image} alt={name} />
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
        <div class="bottom">
          <a>{name}</a>
          <div class="price">
            <span>{price}</span>
          </div>
        </div>
      </div>
    )

  } 
 
  

export default MainProduct;



// export default function MainProduct() {
//   const [data, setData] = useState([]);
//   const apiGet = () => {
//  fetch('https://seller.seventhsq.com/inventory/api/')
//  .then((response) => response.json())
//  .then((json) => {
//    console.log(json)
//    setData(json)
//  })
//   };
//   useEffect(() =>{
//     apiGet();
//   },[]);
  
// return(

// )
// }

 