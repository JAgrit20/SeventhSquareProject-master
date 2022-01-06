import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Body/HomeSlider2.css'
function HomeSlider2() {
    return (
        <div className='homeslider mb-5'>
            <div id="carousel-example-one" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators my-5">
    <button type="button" data-bs-target="#carousel-example-one" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel-example-one" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel-example-one" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
        <div className='slide1'>
      <div class="carousel-caption d-none d-md-block">
                    <h2 class="animated fadeInLeft my-2">Household Materials</h2>
                     
                     <button type="button" class="btn btn-secondary animated fadeInUp">Explore Products</button>
      </div>
        </div>
      
    </div>
    <div class="carousel-item">
    <div className='slide2'>
      <div class="carousel-caption d-none d-md-block">
                    <h2 class="animated fadeInDown my-2">Steel Materials</h2>
                     
                     <button type="button" class="btn btn-secondary animated fadeInUp">Explore Products</button>
      </div>
        </div>
    </div>
    <div class="carousel-item">
    <div className='slide3'>
      <div class="carousel-caption d-none d-md-block">
                    <h2 class="animated fadeInRight my-2">Tools and Accessories</h2>
                     
                     <button type="button" class="btn btn-secondary animated fadeInUp">Explore Products</button>
      </div>
        </div>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-example-one" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel-example-one" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    )
}

export default HomeSlider2
