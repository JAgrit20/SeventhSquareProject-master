import React from 'react'
import "./Blogs.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
function Blogcontainer(props) {

    function smallestToBiggest(a, b) {
        return a.createdDate - b.createdDate;
      }
      
      function biggestToSmallest(a, b) {
        return b.createdDate - a.createdDate;
      }
      
    return (
          <Link  to={"/detail-blog/" + props.slug}>
          
          <div class="blogcard">
                <div class="card_img">
                    <img src={'https://api.seventhsq.com'+props.image} alt=""/>
                </div>
                <div class="card_body">
                    <h2 class="card_title">{props.title}</h2>
                  
                </div>
            </div>
          </Link>
           
           
    )
}

export default Blogcontainer
