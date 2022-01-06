import React, { createContext } from "react";
import "./Categories.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { catItem } from "./CategoriesItem";

function Categories() {
  return (
    <div class="mainCategoryPanel">
        {catItem.map((curItem) => {
          return (
            <Link id="alink" to={"/catogoriesLanding/" + curItem.title.split(' ').join('_')}>
                <div class="card" style={{"height":"140px","width":"140px",'borderRadius':"20px",fontFamily:"open sans",padding: "1px !important"}}>
                  
    <div class="card-body" style={{"height":"150px"}}>
              <div className="item" key={curItem.id}>
                  <img src={curItem.image.default} alt="itemimage" class="card-img-top" style={{"width":'100px'}} />
                <span className='card-title' style={{"fontSize":"13px"}}>{curItem.title}</span>
              </div>
              </div>
              </div>

              </Link>
          );
        })}
    </div>
  );
}

export default Categories;
