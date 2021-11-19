import React from "react";
import "./Testimonial.css";
import 'bootstrap/dist/css/bootstrap.css';
function Testimonial() {
  return (
    <div className='testimonial'>
            <div className="container">
      
      
      <section class="review" id="review">
        <div class="title">
          <span className="h1" >What People Say about Us</span>
        </div>
        <div className='caraousel-container mb-4'>

            <div className='container'>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
            <div class="box-container">
          <div class="box">
            <h3 style={{fontFamily:"open sans"}}>john deo</h3>
            <p style={{fontFamily:"open sans"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
          </div>

            </div>
            <div className="carousel-item">
              <div class="box-container">
              <div class="box">
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
              </div>
           

            </div>
            <div className="carousel-item">
              <div class="box-container">
              <div class="box">
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>

              </div>
           

            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            </div>
        {/* <div class="box-container">
          <div class="box">
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>

          <div class="box">
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <h3>john deo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos eum. Laborum aut a consequatur ducimus, molestias possimus
              quisquam rerum temporibus ipsum voluptate accusamus, unde ab
              asperiores? Exercitationem, unde rem.
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div> */}
      </section>
      <br/>
    </div>
    </div>
   
  );
}
export default Testimonial;