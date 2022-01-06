                    import Testimonial from './Testimonial'
                    import React, { useEffect, useState } from "react";
                    import "../Body/Review.css";
                    import { Button, Modal } from 'react-bootstrap';
                    import Form from 'react-bootstrap/Form'  
                    import Swal from 'sweetalert2'
                    import { Helmet } from 'react-helmet';
                    function Review() {
                    
                      const [userdata, setuserdata] = useState([])
                      const [reviewdata, setreviewdata] = useState([])
                      const [title, settitle] = useState('')
                      const [review, setreview] = useState('')
                      const [star, setstar] = useState('')
                      const [Reviews, setReviews] = useState("")
                      const [show, setModalShow] = useState(false);
                   
                      const getuser = async () => {
                        const config = {
                          headers: {
                            Authorization: "token " + localStorage.getItem("token"),
                          },
                        };
                        console.log(config);
                        const res = await fetch('https://api.seventhsq.com/user_profile/get_profile/', config);
                        const data = await res.json();
                    
                        setuserdata(data.user);
                        console.log(userdata);
                      }
                      const getreviews = async () => {
                        const config = {
                          headers: {
                            Authorization: "token " + localStorage.getItem("token"),
                          },
                        };
                        console.log(config);
                        const res = await fetch('https://api.seventhsq.com/review/companyreview/', config);
                        const data = await res.json();
                        setreviewdata(data)                   
                        console.log(data);
                      }
                    
                    
                      const postreview = async (e) => {
                        e.preventDefault();
                    
                    
                        const config = {
                          method: 'POST',
                          headers: {
                            Authorization: "token " + localStorage.getItem("token"),
                            "Content-Type": "application/json",
                          },
                    
                          body: JSON.stringify({
                            "title": title,
                            "review": review,
                            "star": star,
                            "username": userdata.first_name,
                            "email": userdata.email
                    
                          })
                        };
                        console.log(config);
                        const response = await fetch('https://api.seventhsq.com/review/companyreview/', config);
                    
                        const data = await response.json();
                        console.log(data);
                        Swal.fire({
                          icon: 'success',
                          title: 'Thank you',
                          text: 'Review Recorded',
                          
                        })
                        window.location.reload()
                    
                      }
                    
                      console.log(reviewdata)
                    
                      useEffect(() => {
                        getuser()
                        getreviews()
                    
                      }, [])
                      return (
                        <div className='container-lg'>
                          {/* %Company% Review | Seventh Square */}
                          <Helmet>
    <title>Company Review | Seventh Square </title>
    <meta name="description" content="Review of Seventh Square " />
    {/* Review of Seventh Square */}
  </Helmet>
                          <div className="d-flex justify-content-center my-5" style={{ flexDirection: 'column' }}>
                            <h1 className="heading">Customer Reviews</h1>
                            <h4  className="subheading" >What people are saying about us</h4>
                            <div className="grid_wrap_review">
                              {/* review card */}
                              {reviewdata?.map(v => {
                                return <div className="review_card">
                                  {/* <span className="circle"></span> */}
                                  <span
                      className="rounded-circle p-4 bg-dark"
                      style={{ color: "white",margin:"5px" }}
                    >
                      
                      <h1>
                        {v?.username
                          ? v?.username[0] + v?.username[1]
                          : null}
                      </h1>
                    </span>
                                  <span style={{ flex: 1 }}>
                                    <span className="review_card_1st_child mt-2">
                                     
                                      <h2 style={{paddingTop:"5px"}}>{v?.title}</h2>
                    
                                    {v.star > 0 && v.star <= 1 ?
                                        <span style={{
                                          width: "30%",
                                          marginLeft: "auto"
                                        }}>   
                                          <i class="fas fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                        </span>
                                        : null
                                      }
                                      {v.star > 1 && v.star <= 2 ?
                                        <span style={{
                                          width: "30%",
                                          marginLeft: "auto"
                                        }}>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                        </span>
                                        : null
                                      }
                                      {v.star > 2 && v.star <= 3 ?
                                        <span style={{
                                          width: "30%",
                                          marginLeft: "auto"
                                        }}>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="far fa-star"></i>
                                          <i class="far fa-star"></i>
                                        </span>
                                        : null
                                      }
                                      {v.star > 3 && v.star <= 4 ?
                                        <span style={{
                                          width: "30%",
                                          marginLeft: "auto"
                                        }}>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="far fa-star"></i>
                                        </span>
                                        : null
                                      }
                                      {v.star > 4 && v.star <= 5 ?
                                        <span style={{
                                          width: "30%",
                                          marginLeft: "auto"
                                        }}>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                        </span>
                                        : null
                                      }
                                    </span>
                                    <p className="review_body">{v?.review}</p>
                                    {/* <p className="review_body">{v?.review}</p> */}
                                     <h3>Posted By: {v?.username}</h3>
                                  </span>
                                </div>
                              })}
                            </div>
                          </div>
                          <div className="d-flex justify-content-center my-5">
                            {/* <h4>we love and value all our customers equally every support of user means a lot</h4> */}
                          </div>
                          <section class="review" id="review">
                            <div className='row'>
                              <div className='  col-pl-8 col-sm-12'>
                                <h1 className='text-center'>Have a feedback for us? Post your review here</h1>
                              <div class="container" style={{justifyContent:"center",display:"flex"}}>
                                <form class="">
                                  <div class="card p-7" >
                                  <div class="form-group row">
                                    <label for="inputEmail3" class="md-3 col-sm-1 col-form-label" style={{fontSize:"18px",paddingTop: "initial"}}>Title</label>
                                    <div class="col-sm-10">
                                      <input type="text" class="form-control" id="inputEmail3" placeholder="Please Enter Title" name='title' value={title} onChange={(e) => settitle(e.target.value)} />
                                    </div>
                                  </div>
                    
                    
                                  <div class="form-group row">
                                    <label for="inputPassword3" class="md-3 col-sm-1 col-form-label" style={{fontSize:"18px",paddingTop: "initial"}}>Review</label>
                                    <div class="col-sm-10">
                                      <textarea rows='5' class="form-control" id="inputPassword3" placeholder="Please Enter Review" name='review' value={review} onChange={(e) => setreview(e.target.value)} />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="inputPassword3" class="col-sm-1 col-form-label" style={{fontSize:"18px"}}>Stars</label>
                                    <div class="md-6 col-sm-10">
                                      <div class="d-flex justify-content-space-between ">
                    
                                        <div class="d-flex justify-content-evenly">
                                        <div class="ww-wrapper">
                                               
  <input class="star" type="radio" id="r1" name="stars" value="5"  onChange={(e) => setstar(e.target.value)} />
  <label class="star_lable" for="r1">&#10038;</label>
  
  <input class="star"  type="radio" id="r2" name="stars" value="4" onChange={(e) => setstar(e.target.value)} />
  <label class="star_lable" for="r2">&#10038;</label>
  <input class="star"  type="radio" id="r3" name="stars" value="3" onChange={(e) => setstar(e.target.value)} />
  <label class="star_lable" for="r3">&#10038;</label>
  <input class="star"  type="radio" id="r4" name="stars" value="2" onChange={(e) => setstar(e.target.value)} />
  <label class="star_lable" for="r4">&#10038;</label>
  <input class="star"  type="radio" id="r5" name="stars" value="1" onChange={(e) => setstar(e.target.value)} />
  <label class="star_lable" for="r5">&#10038;</label>
</div>
                    
                            
                                        </div >
 
                    
                                      </div>
                    
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <div class="d-flex justify-content-center col-md-12">
                                      <button class="btn btn-dark btn-lg" onClick={postreview}>Post Review</button>
                                    
                                    </div>
                                    </div>
                                  </div>
                                </form>
                            
                    
                              </div>
                              </div>
                            </div>
                    
                    
                          </section>
                      
                    
                        </div>
                      )
                    }
                    
                    export default Review
                    