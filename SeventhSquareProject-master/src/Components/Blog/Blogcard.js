import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Blog.css";
import "./Responsive.css";
const Blogcard=(props)=> {
   
   
    return (
        <div className='container-sm  py-4 '>
              <div class="row pb-4">
                <div class="col-md-5">
                  
                  <div class="fh5co_hover_news_img">
                   <Link
                     to={"/detail-blog/" + props.slug}
                   > <div class="fh5co_news_img">
                      <img
                        src={'https://api.seventhsq.com'+props.image}
                        alt=""
                      />
                    </div>
                    </Link>
                    <div></div>
                  </div>
                </div>
                <div class="col-md-7 animate-box">
                  <a  class="fh5co_magna py-2">
                    {" "}
                   {props.title}{" "}
                  </a>{" "}
                 
                  <div class="fh5co_consectetur">
                    {" "}
                    { <div id= "posts_body" dangerouslySetInnerHTML={{__html: props.body}}></div>}
                  </div>
                  <span>
                    <Link
                    to={"/detail-blog/" + props.slug}
                    >
                   <button type="button" class="btn btn-dark">Read more</button>
                    </Link>
                    
                    </span>
                </div>
              </div>
        </div>
    )
}

export default Blogcard
