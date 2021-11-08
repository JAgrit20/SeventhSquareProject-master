import React from 'react'
import { useParams } from "react-router";
import './Detailblog.css'
import { useState, useEffect } from 'react';

const DetailBlog=(props)=> {
     
    
    const[blogdata,setdata]=useState([]);
    const getdata=async()=>{
        const res=await fetch(`https://api.seventhsq.com/blogs/blog/${props.match.params.slug.toString()}`);
        const data= await res.json();
        console.log(data);
        setdata(data);
    }
    useEffect(()=>{
        getdata();
    },[])
     
    return (
        <div className='detail-blog'>
            <h1 className='text-center fs-1 fw-bold my-5 '>
              {blogdata.title}
            </h1>
            <div>
            <h5 className='text-center fs-4  my-1'>
                Author - 
                  {blogdata.author}
                  
                </h5>
            <h5 className='text-center my-3'>
           
                    {blogdata.created}
                   
                </h5>
            </div>
           
            <div className='container-md my-3'>
                
                <img className='img-fluid rounded mx-auto d-block'
                       src={'https://api.seventhsq.com'+blogdata.image}
                        alt=""
                      />
                <p className='lh-lg mx-auto my-5 py-2 '>
                <div id= "posts_body" dangerouslySetInnerHTML={{__html: blogdata.body}}></div>
                </p>
            </div>




            
        </div>
    )
}

export default DetailBlog
