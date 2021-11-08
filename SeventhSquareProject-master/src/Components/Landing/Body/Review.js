
import Testimonial from './Testimonial'
import React, {useEffect, useState} from "react";
import "../Body/Review.css";
function Review() {

  const [userdata,setuserdata]=useState([])
  const [reviewdata,setreviewdata]=useState([])
  const [title,settitle]=useState('')
  const [review,setreview]=useState('')
  const [star,setstar]=useState('')

  const getuser=async()=>{
		const config = {
			headers: {
			  Authorization: "token " + localStorage.getItem("token"),
			},
		  };
		  console.log(config);
		  const res=await fetch('https://api.seventhsq.com/user_profile/get_profile/',config);
			const data= await res.json();
			
			setuserdata(data.user);
			console.log(userdata);
	}
  const getreviews=async()=>{
		const config = {
			headers: {
			  Authorization: "token " + localStorage.getItem("token"),
			},
		  };
		  console.log(config);
		  const res=await fetch('https://api.seventhsq.com/review/companyreview/',config);
			const data= await res.json();
			setreviewdata(data)
			
			console.log(data);
	}


  const postreview=async(e)=>{
    e.preventDefault();
    
			
    const config = {
      method:'POST',
      headers: {
        Authorization: "token " + localStorage.getItem("token"),
        "Content-Type": "application/json",    
      },
     
      body:JSON.stringify({
        "title": title,
        "review":review,
        "star": star,
        "username":userdata.first_name,
        "email":userdata.email
       
      })
    };
    console.log(config);
    const response=await fetch('https://api.seventhsq.com/review/companyreview/',config);
   
    const data= await response.json();
    console.log(data);
    
  }

  useEffect(()=>{
    getuser()
    getreviews()
  },[])
    return (
        <div className='container-lg'>
            <div className="d-flex justify-content-center my-5">
                <h1>Customer Reviews</h1>
                
            </div>
            <div className="d-flex justify-content-center my-5">
            <h4>we love and value all our customers equally every support of user means a lot</h4>
            </div>
            <section class="review" id="review">
              <div className='row'>
              <div className='col-md-6 col-sm-12'>
              <h2 className='text-center'>What did You think of SventhSquare</h2>

              <form >
              <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" placeholder="Please Enter Title" name='title' value={title} onChange={(e)=>settitle(e.target.value)} />
              </div>
              </div>
              

              <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Review</label>
              <div class="col-sm-10">
              <textarea  rows='5' class="form-control" id="inputPassword3" placeholder="Please Enter Review" name='review'value={review} onChange={(e)=>setreview(e.target.value)} />
              </div> 
              </div>
              <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Stars</label>
              <div class="col-sm-10">
              <div class="d-flex justify-content-space-between ">
												
										<div  class="d-flex justify-content-evenly">
                                        <label for="stars">1</label><br/>
									                    	<input type="radio" id="stars" name="stars" value="1"  onChange={(e)=>setstar(e.target.value)} />
										  <label for="stars" className='ml-3 p-1'>2</label><br/>
                                        <input type="radio" id="stars" name="stars" value="2" onChange={(e)=>setstar(e.target.value)}/>
										  <label for="stars" className='ml-3 p-1'>3</label><br/>
                                        <input type="radio" id="stars" name="stars" value="3" onChange={(e)=>setstar(e.target.value)} />
										  <label for="stars" className='ml-3 p-1'>4</label><br/>
                                        <input type="radio" id="stars" name="stars" value="4" onChange={(e)=>setstar(e.target.value)}/>
										  <label for="stars" className='ml-3 p-1'>5</label><br/>
                                        <input type="radio" id="stars" name="stars" value="5" onChange={(e)=>setstar(e.target.value)}/>
										 
 
											</div >
											
										
											</div>
              
              </div>
              </div>
              <div class="form-group row">
              <div class="col-md-12">
              <button  class="btn btn-dark" onClick={postreview}>Request</button>
              </div>
              </div>
              </form>

                </div>
                </div>
        
           <div className='review-wrapper'>
              {
                reviewdata.map((curr,index)=>{
                  return (
                    <div class="box-container my-3">
                    <div class="box">
          <h3>{curr.title}</h3>
          <p>
           {curr.review}
          </p>
          <div class="stars">
                              {curr.star>0 && curr.star<=1?
                              <>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                             </>
                                :null
                               }
                                {curr.star>1 && curr.star<=2?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                               {curr.star>2 && curr.star<=3?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                               {curr.star>3 && curr.star<=4?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                </>
                                :null
                               }
                                {curr.star>4 && curr.star<=5?
                                <>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                </>
                                :null
                               }
                                
               
              </div>
        </div>
        </div>

                  )
                })

              }
              
               </div>
               
        
      </section>
            
           
            
        </div>
    )
}

export default Review
