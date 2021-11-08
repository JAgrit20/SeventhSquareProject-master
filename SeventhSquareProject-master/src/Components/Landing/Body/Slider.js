import React from 'react';
import  "./Slider.css";
function Slider() {
    return (
        <div id="myCarousel" class="carousel slide">

        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-in">
            <div class="item active">

                <div class="fill slide1"></div>
                <div class="carousel-caption">
                     <h2 class="animated fadeInLeft">Household Materials</h2>
                     <p class="animated fadeInUp">We are going to provide u amazing household materials</p>
                     <p class="animated fadeInUp"><a href="#" class="btn btn-transparent btn-rounded btn-large">Explore Products</a></p>
                </div>
            </div>
            <div class="item">
                <div class="fill slide2" ></div>
                <div class="carousel-caption">
                     <h2 class="animated fadeInDown">Steel Materials</h2>
                     <p class="animated fadeInUp">We are offering you the best quailty of steel</p>
                     <p class="animated fadeInUp"><a href="#" class="btn btn-transparent btn-rounded btn-large">Explore Products</a></p>
                </div>
            </div>
            <div class="item">
                <div class="fill slide3" ></div>
                <div class="carousel-caption">
                     <h2 class="animated fadeInRight">Tools and Accessories</h2>
                     <p class="animated fadeInRight">You can get all of your daily using tools.</p>
                     <p class="animated fadeInRight"><a href="#" class="btn btn-transparent btn-rounded btn-large">Explore Products</a></p>
                </div>
            </div>
        </div>


        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </div>
    )
}

export default Slider
