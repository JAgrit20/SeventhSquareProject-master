import React from 'react'
import "./Blogs.css"
import { useState, useEffect } from 'react';
import Blogcontainer from './Blogcontainer';
function Blogs() {
    const[blogdata,setdata]=useState([]);
    const getdata=async()=>{
        const res=await fetch('https://api.seventhsq.com/blogs/blog/');
        const data= await res.json();
        console.log(data.posts)
        setdata(data.posts);
        
      
        
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <div class="container-fluid blogcontainer">
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
                 blogdata.slice(-3).map((curr,index)=>{
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
