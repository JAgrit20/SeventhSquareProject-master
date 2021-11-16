import React, { useEffect, useState,useCallback } from "react";
import "../Categories.css";
function BricksFilter(props) {
  const [bricksize,setbricksize]=useState([]);
  let bricks=[]
  const fetchbricksize=async()=>{

    let city=localStorage.getItem("city")
    
    console.log(`city${city}`)
    if(city==null){
      city='Pan India'
    }
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/Bricks/"+city
    );
    const data= await response.json();
    data.forEach(myFunction)
    function myFunction(item) {
      bricks.push(item.length)
      let unique=[...new Set(bricks)]
      setbricksize(unique)
      
    }
  }
  useEffect(() => {
    fetchbricksize()
  }, []);


 
    return (
        <div className="bodyLeft shadow">
            <div className="leftFilterHeading">
              <h1>Filter</h1>{" "}
            </div>
            <div className="filerBody">
              <section>
                <section>
                  <section class="mb-4">
                    <h3 class="mb-3">Size</h3>

                    {
                       bricksize?
                       bricksize.map((curr,index)=>{
                         return(
                           <div>
                               <div class="form-check pl-0 mb-3 mx-4">
                                <input style={{width:"15px",height:"15px","backgroundColor": "#D7B1D7"}}
                                  type="checkbox"
                                  // class="form-check-input filled-in"
                                  id={curr}
                                  onChange={()=>props.handlebricksize(curr)}

                                    // border-color: #D7B1D7;
                                    
                                  
                                  defaultChecked={props.bricksizes.includes(curr)?true:false}
                                />
                                <label style={{fontSize:"17px",paddingLeft:"5px",justifyContent:"center",alignContent:"center"}}
                                  class="form-check-label small text-uppercase card-link-secondary"
                                  for={curr}
                                >
                                  {curr}
                                
                                </label>
                              </div>
                             </div>
                           
                         )
                       }):null

                    }

                 
                   
                  </section>

                  {/* <section class="mb-4 ratingBlock">
                    <h3 class="font-weight-bold mb-3">Avg. Customer Review</h3>

                    <a href="#!" className="">
                      <ul class="rating">
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                      </ul>
                    </a>
                    <a href="#!">
                      <ul class="rating">
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                      </ul>
                    </a>
                    <a href="#!">
                      <ul class="rating">
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                      </ul>
                    </a>
                    <a href="#!">
                      <ul class="rating">
                        <li className="py-2">
                          <i class="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                        <li className="py-2">
                          <i class="far fa-star fa-sm text-primary"></i>
                        </li>
                      </ul>
                    </a>
                  </section> */}
                   <h3 class="mb-3">Brands</h3>
                   {
                      
                        props.brands?
                        props.brands.map((curr,index)=>{
                          return(
                            <div>
                              {/* <button onClick={()=>props.handlebrands(curr)}>
                                <p>
                              {curr}
                              </p>
                              </button> */}
                                <div class="form-check pl-0 mb-3 ml-4">
                              <input style={{width:"13px",height:"13px"}}
                                type="checkbox"
                                // class="form-check-input filled-in"
                                id={curr}
                                onChange={()=>props.handlebrands(curr)}
                                defaultChecked={props.filterbrands.includes(curr)?true:false}
                              />
                              <label style={{fontSize:"13px",paddingLeft:"5px",justifyContent:"center",alignContent:"center"}}
                                class="form-check-label small text-uppercase card-link-secondary"
                                for={curr}
                              >
                                {curr}
                              </label>
                              </div>
                              </div>
                            
                          )
                        }):null
  
                      
                       

                    }
                  <section class="mb-4">
                    <h3 class="mb-3">Price</h3>

                   
                    <form>
                      <div class="d-flex align-items-center mt-4 pb-1">
                        <div class="md-form md-outline my-0">
                          <input
                            id="from"
                            type="text"
                            class="form-control mb-2"
                            name='min'
                            onChange={props.handlemin}
                          />
                          <label for="form">₹ Min</label>
                        </div>
                        <p class="px-2 mb-0 text-muted"> - </p>
                        <div class="md-form md-outline my-0">
                          <input
                            id="to"
                            type="text"
                            class="form-control mb-2"
                            name='max'
                            onChange={props.handlemax}
                          />
                          <label for="to" style={{fontSize:"10px"}}>₹ Max</label>
                        </div>
                      </div>
                    </form>
                  </section>

                  <div class="d-flex justify-content-evenly my-3">
                    <button type="button" class="btn btn-dark" onClick={props.handleapply}>
                        Apply Filters
                      </button>
                      <button type="button" class="btn btn-dark" onClick={props.handleremove}>
                        Remove Filters
                      </button>

                    </div>
                   

                  {/* <section class="mb-4">
                    <h3 class="mb-3">Price</h3>

                    <div class="slider-price d-flex align-items-center my-4">
                      <span class="font-weight-normal small text-muted mr-2">
                        $0
                      </span>
                      <form class="multi-range-field w-100 mb-1">
                        <input id="multi" class="multi-range" type="range" />
                      </form>
                      <span class="font-weight-normal small text-muted ml-2">
                        $100
                      </span>
                    </div>
                  </section> */}
                </section>
              </section>
            </div>
          </div>
    )
}

export default BricksFilter
