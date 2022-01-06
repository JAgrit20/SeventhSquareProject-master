// import { useEffect, useState } from 'react'
import './Wishlist.css'

// import Testimonial from './Testimonial'
import React, { useEffect, useState } from "react";
// import "../Body/Review.css";
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'  
import Swal from 'sweetalert2'
function Wishlist() {
  const [products, setproducts] = useState([])
  const [userId, setuserId] = useState("")

  console.log(products)
  useEffect(() => {
    fetch("https://api.seventhsq.com/wishlist/", {
      headers: {
        "Authorization": `token ${localStorage.getItem("token")}`
      }
    })
      .then(v => v.json())
      .then(async v => {
        const list = v?.map(val => val?.product_id)
        setuserId(v[0]?.user)

        fetch("https://seller.seventhsq.com/inventory/api/inventory_detail/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ list: list })

        }).then(res => res.json()).then(res => { setproducts(res)})

      })
      .catch(err => { console.log(err) })
  }, [])

  // const [userdata, setuserdata] = useState([])
  // const [reviewdata, setreviewdata] = useState([])
  // const [title, settitle] = useState('')
  // const [review, setreview] = useState('')
  // const [star, setstar] = useState('')
  // const [Reviews, setReviews] = useState("")
  // const [show, setModalShow] = useState(false);

  // const handlechangePassword = (e) => {
	// 	const config = {
	// 		headers: {
	// 			Authorization: "token " + localStorage.getItem("token"),
	// 		},
	// 	};
	// 	e.preventDefault()
	// 	// const data = {
	// 	// 	old_password: oldpassword,
	// 	// 	new_password: newpassword
	// 	// }
	// 	// console.log(data)
	// 	// axios.patch('https://api.seventhsq.com/auth/api/change-password/', data, config).then(
	// 	// 	res => {

	// 	// 		window.alert("Password Changed");
	// 	// 		window.localStorage.removeItem("token");
	// 	// 		console.log('token removed')
	// 	// 		history.push({
	// 	// 			pathname: `/login`,

	// 	// 		});
	// 	// 	}

	// 	// ).catch(
	// 	// 	err => {
	// 	// 		console.log(err)
	// 	// 		window.alert("Something went wrong");
	// 	// 	}
	// 	// )
	// }

  // const getuser = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: "token " + localStorage.getItem("token"),
  //     },
  //   };
  //   console.log(config);
  //   const res = await fetch('https://api.seventhsq.com/user_profile/get_profile/', config);
  //   const data = await res.json();

  //   setuserdata(data.user);
  //   console.log(userdata);
  // }
  // const getreviews = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: "token " + localStorage.getItem("token"),
  //     },
  //   };
  //   console.log(config);
  //   const res = await fetch('https://api.seventhsq.com/review/companyreview/', config);
  //   const data = await res.json();
  //   setreviewdata(data)

  //   console.log(data);
  // }
  // const getwishlist= async () => {
  //   const config = {
  //     headers: {
  //       Authorization: "token " + localStorage.getItem("token"),
  //     },
  //   };
  //   console.log(config);
  //   const res = await fetch('https://api.seventhsq.com/wishlist/', config);
  //   const data = await res.json();
  //   setreviewdata(data)

  //   console.log("wishlist data");
  //   console.log(data);
  // }


  // const postreview = async (e) => {
  //   e.preventDefault();


  //   const config = {
  //     method: 'POST',
  //     headers: {
  //       Authorization: "token " + localStorage.getItem("token"),
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       "title": title,
  //       "review": review,
  //       "star": star,
  //       "username": userdata.first_name,
  //       "email": userdata.email

  //     })
  //   };
  //   console.log(config);
  //   const response = await fetch('https://api.seventhsq.com/review/companyreview/', config);

  //   const data = await response.json();
  //   console.log(data);
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Thank you',
    //   text: 'Review Recorded',
      
    // })

  // }

  // console.log("wishlist item")
  // console.log(products)

  // useEffect(() => {
  //   getuser()
  //   getreviews()
  //   getwishlist()

  // }, [])
  return (
    <div className='container-lg'>
      <div className="d-flex justify-content-center my-5" style={{ flexDirection: 'column' }}>
        <h1 style={{fontFamily:"crimson text"}}>Wishlist</h1>
        <div className="container">
          {/* review card */}
          {products?.map(v => {
            return <div className="review_card">
              <span className="circle"></span>
              <span style={{ flex: 1 }}>
                <span className="review_card_1st_child">
                  <h1>Product Name: {v?.id}</h1>
                  <div>
                  <p className="price pl-10">Price {v?.review}</p>
                    </div>
                  
                  {/* <p className="review_body">Region: {v?.review}</p>
                  <p className="review_body">Date Added: {v?.review}</p> */}


                 
                </span>
                
                <p className="review_body">Brand: {v?.review}</p>
                <p className="review_body pd-4">Region: {v?.review} <span class="mx-3"> Date Added: {v?.review} </span> 
                <div class="two_button">

<button className="btn btn-secondary mx-2">Remove</button>
<button className="btn btn-secondary">Add to Cart</button>

</div>
</p>
                
              </span>
              
            </div>
          })}
        </div>
      </div>
      
      


    </div>
  )
}

export default Wishlist
