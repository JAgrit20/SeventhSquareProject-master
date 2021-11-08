import React from 'react'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './review_form.css'
import Form from 'react-bootstrap/Form';
import axios from "axios";
function ReviewForm(props) {
    const [values, setValues] = useState({
        title: '',
        product: '',
        review: '',
        star:''
    });


    const handleTitleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            title: event.target.value,
        }));
    };
    // const handleProductsInputChange = (event) => {
    //     event.persist();
    //     setValues((values) => ({
    //         ...values,
    //         product: event.target.value,
    //     }));
    // };
    const handleReviewInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            review: event.target.value,
        }));
    };
    const handleStarInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            star: event.target.value,
        }));
    };

  const  handleSubmit = (e) =>{
        const config = {
            headers: {
              Authorization: "token " + localStorage.getItem("token"),
            },
          };
        console.log('login clicked')
        e.preventDefault();
        const data  = {
            product:props.productid,
            star:values.star,
            review:values.review,
            title:values.title,
            order_item:props.orderid,

           
            
        };
        axios.post('https://api.seventhsq.com/orders/review/', data,config).then(
            res => {
                console.log(res)
              window.alert("review submitted");
              props.hide()
            }
        ).catch(
            err => {
                console.log(err)
                window.alert("Something went wrong");
            }
        )
        console.log(data);
    }

    useEffect(()=>{
        setValues((values) => ({
                    ...values,
                    product: props.productid,
                }));
      },[])


    return (
        <form method="POST" class="review-form"  id="review-form" onSubmit={handleSubmit}>
										<div class="d-flex justify-content-evenly">
										<input
									   class="form-control"
										type="text"
										name="title"
										id="title"
										placeholder="Title"
										onChange={handleTitleInputChange}
										value={values.title}
										/>
									 
                                       
											</div>
                                            <div class="d-flex justify-content-evenly">
										<input
									   class="form-control reviewinput"
										type="text-area"
										name="review"
										id="review"
										placeholder="Your Review"
										onChange={handleReviewInputChange}
										value={values.review}
										/>
                                        </div>
											
											<div class="d-flex justify-content-space-between mt-4">
												<h6 className='mx-4'>Stars</h6>
										<div  class="d-flex justify-content-evenly">
                                        <label for="stars">1</label><br/>
										<input type="radio" id="stars" name="stars" value="1" onChange={handleStarInputChange}/>
										  <label for="stars" className='ml-3 p-1'>2</label><br/>
                                        <input type="radio" id="stars" name="stars" value="2" onChange={handleStarInputChange}/>
										  <label for="stars" className='ml-3 p-1'>3</label><br/>
                                        <input type="radio" id="stars" name="stars" value="3" onChange={handleStarInputChange}/>
										  <label for="stars" className='ml-3 p-1'>4</label><br/>
                                        <input type="radio" id="stars" name="stars" value="4" onChange={handleStarInputChange}/>
										  <label for="stars" className='ml-3 p-1'>5</label><br/>
                                        <input type="radio" id="stars" name="stars" value="5" onChange={handleStarInputChange}/>
										 
 
											</div >
											
										
											</div>
								
										{/* <button type="submit" id="submit" name='submit' className='my-4'><h6>Add</h6></button> */}
                                        <button className="btn btn-secondary mt-5" type="submit" id="submit" name='submit' >
                                            Send 
                                            </button>
									</form>
    )
}

export default ReviewForm
