import React, { createContext } from "react";
import "./Categories.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { catItem } from "./CategoriesItem";
function Categories() {
  return (
    <div class="mainCategoryPanel">
        {catItem.map((curItem) => {
          return (
            <Link to={"/catogoriesLanding/" + curItem.title.split(' ').join('_')}>
              
              <div className="item" key={curItem.id}>
                  <img src={curItem.image.default} alt="itemimage" />
                <span className='mb-0'>{curItem.title}</span>
              </div>
              <div>
                
              </div>
              </Link>
          );
        })}
    </div>
  );
}

export default Categories;
