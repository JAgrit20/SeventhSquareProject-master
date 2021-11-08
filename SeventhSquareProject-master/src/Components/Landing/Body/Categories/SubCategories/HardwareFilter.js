import React from 'react'
import "../Categories.css";
function CementFilter(props) {

    return (
        <div className="bodyLeft shadow">
            <div className="leftFilterHeading">

              <h1>Filter</h1>{" "}
            </div>
            <div className="filerBody">
              <section>
                <section>
                  <section class="mb-4">
                  <h6 class="font-weight-bold mb-3">Material</h6>

                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="PVC"
                        onChange={()=>props.handlehardwarematerial('PVC')}
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="PVC"
                      >
                        PVC
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="Iron & Steel"
                        onChange={()=>props.handlehardwarematerial('Iron & Steel')}
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="Iron & Steel"
                      >
                        Iron & Steel
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="Aluminium"
                        onChange={()=>props.handlehardwarematerial('Aluminium')}
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="Aluminium"
                      >
                        Aluminium
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="Copper"
                        onChange={()=>props.handlehardwarematerial('Copper')}
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="Copper"
                      >
                        Copper
                      </label>
                    </div>
                   
                    <h6 class="font-weight-bold mb-3">Brands</h6>
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
                            <input
                              type="checkbox"
                              class="form-check-input filled-in"
                              id={curr}
                              onChange={()=>props.handlebrands(curr)}
                              //checked={props.filterbrands.includes(curr)?true:false}
                              defaultChecked={props.filterbrands.includes(curr)?true:false}
                             
                            />
                            <label
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
                    <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>

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

                  <section class="mb-4">
                    <h6 class="font-weight-bold mb-3">Price</h6>

                    
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
                            name='max'
                            onChange={props.handlemax}
                            class="form-control mb-2"
                          />
                          <label for="to">₹ Max</label>
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
                    <h6 class="font-weight-bold mb-3">Price</h6>

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

export default CementFilter
