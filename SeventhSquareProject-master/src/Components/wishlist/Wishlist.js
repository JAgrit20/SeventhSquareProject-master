import { useEffect, useState } from 'react'
import './Wishlist.css'
function Wishlist() {
  const [products, setproducts] = useState([])
  const [userId, setuserId] = useState("")

  console.log(products)
  useEffect(() => {
    fetch("http://localhost:8000/wishlist/", {
      headers: {
        "Authorization": `token ${localStorage.getItem("token")}`
      }
    })
      .then(v => v.json())
      .then(async v => {
        const list = v?.map(val => val?.product_id)
        setuserId(v[0]?.user)

        fetch("http://localhost:8001/inventory/api/inventory_list/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ list: list })
        }).then(res => res.json()).then(res => { setproducts(res) })

      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <div className='row'>
      <div className='col-md-6 sm-12 mx-5'>
        <h1 className='mx-5 my-5 text-center'> Your Wishlist</h1>

        {
          products?.map(v => {
            return <div>
              <h1>hello</h1>
            </div>
          })
        }

        <div class="card mb-3 fluid">
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-4'>
                <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..." />
              </div>
              <div className='col-md-4'>
                <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..." />
              </div>
              <div className='col-md-4'>
                <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..." />
              </div>

            </div>
          </div>

          <div class="card-body">
            <h5 class="card-title">Sample Product</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Price : 1000₹</small></p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Wishlist
