
import Testimonial from './Testimonial'
import React, { useEffect, useState } from "react";
import "../Body/Review.css";
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'   
function Review() {

  const [userdata, setuserdata] = useState([])
  const [reviewdata, setreviewdata] = useState([])
  const [title, settitle] = useState('')
  const [review, setreview] = useState('')
  const [star, setstar] = useState('')
  const [Reviews, setReviews] = useState("")
  const [show, setModalShow] = useState(false);

  const handlechangePassword = (e) => {
		const config = {
			headers: {
				Authorization: "token " + localStorage.getItem("token"),
			},
		};
		e.preventDefault()
		// const data = {
		// 	old_password: oldpassword,
		// 	new_password: newpassword
		// }
		// console.log(data)
		// axios.patch('https://api.seventhsq.com/auth/api/change-password/', data, config).then(
		// 	res => {

		// 		window.alert("Password Changed");
		// 		window.localStorage.removeItem("token");
		// 		console.log('token removed')
		// 		history.push({
		// 			pathname: `/login`,

		// 		});
		// 	}

		// ).catch(
		// 	err => {
		// 		console.log(err)
		// 		window.alert("Something went wrong");
		// 	}
		// )
	}

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

  }

  console.log(reviewdata)

  useEffect(() => {
    getuser()
    getreviews()

  }, [])
  return (
    <div className='container-lg'>
      <div className="d-flex justify-content-center my-5" style={{ flexDirection: 'column' }}>
        <h1>Customer Reviews</h1>
        <div className="grid_wrap_review">
          {/* review card */}
          {reviewdata?.map(v => {
            return <div className="review_card">
              <span className="circle"></span>
              <span style={{ flex: 1 }}>
                <span className="review_card_1st_child">
                  <h1>{v?.username}</h1>

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
              </span>
            </div>
          })}
        </div>
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
                  <input type="text" class="form-control" id="inputEmail3" placeholder="Please Enter Title" name='title' value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
              </div>


              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Review</label>
                <div class="col-sm-10">
                  <textarea rows='5' class="form-control" id="inputPassword3" placeholder="Please Enter Review" name='review' value={review} onChange={(e) => setreview(e.target.value)} />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Stars</label>
                <div class="col-sm-10">
                  <div class="d-flex justify-content-space-between ">

                    <div class="d-flex justify-content-evenly">
                      <label for="stars">1</label><br />
                      <input type="radio" id="stars" name="stars" value="1" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>2</label><br />
                      <input type="radio" id="stars" name="stars" value="2" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>3</label><br />
                      <input type="radio" id="stars" name="stars" value="3" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>4</label><br />
                      <input type="radio" id="stars" name="stars" value="4" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>5</label><br />
                      <input type="radio" id="stars" name="stars" value="5" onChange={(e) => setstar(e.target.value)} />


                    </div >


                  </div>

                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <button class="btn btn-dark" onClick={postreview}>Request</button>
                  {/* <button class="btn btn-dark" onClick={() => setModalShow(true)}>
											<h5>
												Post your review
											</h5>
										</button> */}
                </div>
              </div>
            </form>

          </div>
        </div>


      </section>
      <Modal show={show} onHide={() => setModalShow(false)} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Add Review
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Please fill the details</h4>
				</Modal.Body>
				<Form.Group className='mx-3 my-2' >
					<Form method='POST' onSubmit={handlechangePassword} >
						{/* <Form.Label className='mt-4'>Old Password: </Form.Label>
						<Form.Control type="password" placeholder="old password" name="oldpassword" id="oldpassword"  />
						<Form.Label className='mt-4'>New Password: </Form.Label>
						<Form.Control type="password" placeholder="New Password" name="newpassword" id="newpassword"  /> */}
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputEmail3" placeholder="Please Enter Title" name='title' value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
              </div>


              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Review</label>
                <div class="col-sm-10">
                  <textarea rows='5' class="form-control" id="inputPassword3" placeholder="Please Enter Review" name='review' value={review} onChange={(e) => setreview(e.target.value)} />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Stars</label>
            <div class="d-flex justify-content-space-between ">
            <div class="d-flex justify-content-evenly">
                      <label for="stars">1</label><br />
                      <input type="radio" id="stars" name="stars" value="1" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>2</label><br />
                      <input type="radio" id="stars" name="stars" value="2" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>3</label><br />
                      <input type="radio" id="stars" name="stars" value="3" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>4</label><br />
                      <input type="radio" id="stars" name="stars" value="4" onChange={(e) => setstar(e.target.value)} />
                      <label for="stars" className='ml-3 p-1'>5</label><br />
                      <input type="radio" id="stars" name="stars" value="5" onChange={(e) => setstar(e.target.value)} />


                    </div >
                    </div >
                    </div >
						<Button className='mx-4 mt-4' type='submit' >Save</Button>
					</Form>
				</Form.Group>

				<Modal.Footer>
					<a href='/forgot-password'>Forgot Password?</a>

				</Modal.Footer>
			</Modal>



    </div>
  )
}

export default Review
