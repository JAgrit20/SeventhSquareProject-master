import React from "react";
import "./Blog.css";
import "./Responsive.css";
import { Link } from 'react-router-dom';
import Blogcard from './Blogcard';
import { useState, useEffect } from 'react';
import Tags from "./Tags";
import { Helmet } from 'react-helmet';

function Blog() {
  const[blogdata,setdata]=useState([]);
  const[tagdata,settagdata]=useState([]);
  const[selectedtag,setselectedtag]=useState([]);
  const getdata=async()=>{
      const res=await fetch('https://api.seventhsq.com/blogs/blog/');
      const data= await res.json();
      console.log(data);
      setdata(data.posts);
      
      settagdata(data.tags)
    
      
  }
  const calltag=async(name)=>{
   
    const res=await fetch(`https://api.seventhsq.com/blogs/tags/${name}`);
    const data= await res.json();
      console.log(data);
      setselectedtag(data)
    
  }
 useEffect(()=>{
     getdata();
 },[])
 let index = blogdata.length;
  return (
    
    blogdata.length!=0?
   
    <div>
      <Helmet>
    <title>Blog | Seventh Square</title>
    <meta name="description" content="Blogs on Seventh Square" />
  </Helmet>
      {blogdata.length!=0 ?
      <div class="container-fluid paddding mb-5 ">
        <div class="row mx-0">
          <div
            class="col-md-6 col-12 paddding animate-box"
            data-animate-effect="fadeIn"
          >
            <Link
             to={"/detail-blog/" + blogdata[index-1].slug}
              >
            <div class="fh5co_suceefh5co_height">
              
              <img

                src={'https://api.seventhsq.com'+blogdata[index-1].image}
                alt="img"
              />
              
              
              <div class="fh5co_suceefh5co_height_position_absolute"></div>
              <div class="fh5co_suceefh5co_height_position_absolute_font">
                <div class="">
                  <a href="/" class="color_fff">
                    {" "}
                    <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{blogdata[index-1].created}
                  </a>
                </div>
                <div class="">
                  <a href="single.html" class="fh5co_good_font">
                    {" "}
                    {blogdata[index-1].title}{" "}
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div
                class="col-md-6 col-6 paddding animate-box"
                data-animate-effect="fadeIn"
              >
                <Link
             to={"/detail-blog/" + blogdata[index-2].slug}
              >
                <div class="fh5co_suceefh5co_height_2">
                  <img
                    src={'https://api.seventhsq.com'+blogdata[index-2].image}
                    alt="img"
                  />
                  <div class="fh5co_suceefh5co_height_position_absolute"></div>
                  <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                    <div class="">
                      <a href="/" class="color_fff">
                        {" "}
                        <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{blogdata[index-2].created}{" "}
                      </a>
                    </div>
                    <div class="">
                      <a href="single.html" class="fh5co_good_font_2">
                        {" "}
                        {blogdata[index-2].title}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div
                class="col-md-6 col-6 paddding animate-box"
                data-animate-effect="fadeIn"
              >
                  <Link
             to={"/detail-blog/" + blogdata[index-3].slug}
              >
                <div class="fh5co_suceefh5co_height_2">
                  <img
                    src={'https://api.seventhsq.com'+blogdata[index-3].image}
                    alt="img"
                  />
                  <div class="fh5co_suceefh5co_height_position_absolute"></div>
                  <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                    <div class="">
                      <a href="/" class="color_fff">
                        {" "}
                        <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{blogdata[index-3].created}{" "}
                      </a>
                    </div>
                    <div class="">
                      <a href="single.html" class="fh5co_good_font_2">
                        {" "}
                        {blogdata[index-3].title}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div
                class="col-md-6 col-6 paddding animate-box"
                data-animate-effect="fadeIn"
              >
                  <Link
             to={"/detail-blog/" + blogdata[index-4].slug}
              >
                <div class="fh5co_suceefh5co_height_2">
                  <img
                    src={'https://api.seventhsq.com'+blogdata[index-4].image}
                    alt="img"
                  />
                  <div class="fh5co_suceefh5co_height_position_absolute"></div>
                  <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                    <div class="">
                      <a href="/" class="color_fff">
                        {" "}
                        <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{blogdata[index-4].created}{" "}
                      </a>
                    </div>
                    <div class="">
                      <a href="single.html" class="fh5co_good_font_2">
                        {" "}
                        {blogdata[index-4].title}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div
                class="col-md-6 col-6 paddding animate-box"
                data-animate-effect="fadeIn"
              >
                  <Link
             to={"/detail-blog/" + blogdata[index-5].slug}
              >
                <div class="fh5co_suceefh5co_height_2">
                  <img
                     src={'https://api.seventhsq.com'+blogdata[index-5].image}
                    alt="img"
                  />
                  <div class="fh5co_suceefh5co_height_position_absolute"></div>
                  <div class="fh5co_suceefh5co_height_position_absolute_font_2">
                    <div class="">
                      <a href="/" class="color_fff">
                        {" "}
                        <i class="fa fa-clock-o"></i>&nbsp;&nbsp;{blogdata[index-5].created}{" "}
                      </a>
                    </div>
                    <div class="">
                      <a href="single.html" class="fh5co_good_font_2">
                        {" "}
                        {blogdata[index-5].title}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>:
     null
  
        }
     
      <div class="container-fluid pb-4 pt-4 paddding">
        <div class="container paddding">
          <div class="row mx-0">
            <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
              <div>
                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                  Blogs
                </div>
              </div>
              {
               
                selectedtag.length==0?
                blogdata.map((curr,index)=>{
                    return(
                        <Blogcard
                        image={curr.image} title={curr.title} body={curr.body} key={index} slug={curr.slug}
                        />
                    )
                      
                }
                
                ):selectedtag.reverse().map((curr,index)=>{
                  return(
                      <Blogcard
                      image={curr.image} title={curr.title} body={curr.body} key={index}
                      />
                  )
                    
              }
              
              )
            }
             
             
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <div>
                <div class="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">
                  Tags
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="fh5co_tags_all">
               
                {
                tagdata.map((curr,index)=>{
                    return(
                      <button  onClick={()=>{
                        calltag(curr.slug)
                      }}>
                               <Tags  title={curr.slug} key={index}/>
                      </button>
                      
                    )
                      
                })
            }
            <span>
            <a href="/blog" class="fh5co_tagg">
                    Clear Selection
                </a>
            </span>

              </div>
            </div>
          </div>
          <div class="row mx-0 animate-box" data-animate-effect="fadeInUp">
            <div class="col-12 text-center pb-4 pt-4">
              <a href="#" class="btn_mange_pagging">
                <i class="fa fa-long-arrow-left"></i>&nbsp;&nbsp; Previous
              </a>
              <a href="#" class="btn_pagging">
                1
              </a>
              <a href="#" class="btn_pagging">
                2
              </a>
              <a href="#" class="btn_pagging">
                3
              </a>
              <a href="#" class="btn_pagging">
                ...
              </a>
              <a href="#" class="btn_mange_pagging">
                Next <i class="fa fa-long-arrow-right"></i>&nbsp;&nbsp;{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    :<div className="d-flex justify-content-center align-items-center my-5 py-5">
    <div className="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  );
}

export default Blog;