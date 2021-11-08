import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProductImageIndividual from './ProductImageIndividual';
import "./Body.css";

import './BestSellerCollage.css'


function BestSellerCollage(props) {
    return (
        <div class="card-fluid">
             <div class="card-body">
           
            <div className='container-fluid '>
            <div class="row">
               
                <div class="col-sm-8">
                <div class="row">
                    <div class="col-8 col-sm-6">
                    <Link to={"/product/"   + '94'} >
                          <div  >
                          <div class="img-container shadow">
                            <ProductImageIndividual
                            image = '94'
                            />
                            {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                          
                          </div>
                        
                        </div>
                        </Link>  
                      {/* <div className='image1'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   

                      </div> */}
                    </div>
                    <div class="col-4 col-sm-6">
                    <Link to={"/product/"   + '96'} >
                      <div >
                        <div class="img-container shadow" >
                          <ProductImageIndividual
                          image = '96'
                          />
                          {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                         
                        </div>
                       
                      </div>
                      </Link>  
                    {/* <div className='image2'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   
                        
                      </div> */}
                    </div>
                </div>
                </div>
                <div class="col-sm-4">
                    <div className='row p-2'>
                        <div className='col-sm-6'>
                        <Link to={"/product/"   + '94'} >
                             <div >
                            <div class="img-container shadow" >
                              <ProductImageIndividual
                              image = '94'
                              />
                              {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                            
                            </div>
                            
                          </div>
                          </Link>  
                        {/* <div className='image3'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   
                      </div> */}
                        </div>
                        <div className='col-sm-6'>
                        <Link to={"/product/"   + '98'} >
                              <div  >
                                <div class="img-container shadow">
                                  <ProductImageIndividual
                                  image = '98'
                                  />
                                  {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}

                                </div>
                               
                              </div>
                              </Link>  
                        {/* <div className='image3'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   
                      </div> */}
                        </div>

                    </div>
                    <div className='row p-2'>
                        <div className='col-sm-6'>
                        <Link to={"/product/"   + '99'} >
                                  <div >
                                  <div class="img-container shadow">
                                    <ProductImageIndividual
                                    image = '99'
                                    />
                                    {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                                   
                                  </div>
                                  
                                </div>
                                </Link>  
                        {/* <div className='image3'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   
                      </div> */}
                        </div>
                        <div className='col-sm-6'>
                        <Link to={"/product/"   + '102'} >
                                     <div  >
                                      <div class="img-container shadow ">
                                        <ProductImageIndividual
                                        image = '102'
                                        />
                                        {/* <img src={"https://seller.seventhsq.com"+ product.image} alt={product.name} /> */}
                                       
                                      </div>
                                     
                                    </div>
                                    </Link>  
                        {/* <div className='image3'>
                      <img src=  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />   
                      </div> */}
                        </div>

                    </div>
                   
                </div>
            </div>

            </div>
            
            </div>
        </div>
    )
}

export default BestSellerCollage
