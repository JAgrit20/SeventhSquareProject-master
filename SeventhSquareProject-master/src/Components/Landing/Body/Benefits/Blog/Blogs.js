import React from 'react'
import "./Blogs.css"
import { useState, useEffect } from 'react';
import Blogcontainer from './Blogcontainer';
import { Helmet } from 'react-helmet';
function Blogs() {
    const[blogdata,setdata]=useState([]);
    const getdata=async()=>{
        const res=await fetch('https://api.seventhsq.com/blogs/blog/');
        const data= await res.json();
        console.log(data.posts.reverse())
        setdata(data.posts.reverse());      
        
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <div class="container-fluid blogcontainer">
            <Helmet>
    <title>Home | Seventh Square</title>
  </Helmet>

            <div class="title">
          <span className="h1">Recent Blogs</span>
          <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    width:600,
    height: 2.0,
    borderColor : '#000000',
    margin: 'auto',
    marginBottom: 40
}}/>
        </div>
        <div class="bloggrid">
            {
                 blogdata.reverse().slice(-3).map((curr,index)=>{
                     return(
                        <Blogcontainer title={curr.title} image={curr.image} slug={curr.slug} key={index} />
                     )
                    
                })
               
            }
        </div>
    </div>
    )
}

export default Blogs
