import React, { useEffect, useState,useCallback } from "react";
import "../Categories.css";
function FlooringFilter(props) {

  const [floorsize,setfloorsize]=useState([]);
  let floor=[]
  const fetchfloorsize=async()=>{

    let city=localStorage.getItem("city")
    
    console.log(`city${city}`)
    if(city==null){
      city='Pan India'
    }
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/Flooring_&_wall/"+city
    );
    const data= await response.json();
    data.forEach(myFunction)
    function myFunction(item) {
      floor.push(item.length)
      let unique=[...new Set(floor)]
      setfloorsize(unique)
      
    }
  }
  useEffect(() => {
    fetchfloorsize()
  }, []);

    return (
      <div
      className="bodyLeft shadow"
      style={{ padding: "10px 10px !important" }}
    >
      <div className="leftFilterHeading">
        <h3 style={{fontFamily:"open sans"}}>FILTER PRODUCTS</h3>
      </div>
      <hr class="hrf"
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          width: 200,
          height: 2.0,
          borderColor: "#000000",
          margin: "auto",
          marginBottom: 4,
        }}
      />
              <div className="filerBody">
        <section>
          <section>
            <section class="mb-4">
              <h3 class="mb-3" style={{ fontWeight: 500 }}>
                SIZE
              </h3>
                    {
                       floorsize?
                       floorsize.map((curr,index)=>{
                         return(
                           <div>
                                <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                            <input
                              style={{
                                fontFamily:"open sans",
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                              type="checkbox"
                              // class="form-check-input filled-in"
                              id={curr}
                              onChange={() => props.floorsize(curr)}
                              class="custom-control-input"
                              name="default"
                              // border-color: #D7B1D7;

                              // defaultChecked={props.bricksizes.includes(curr)?true:false}
                            />
                            <label
                              style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary labname"
                              for={curr}
                            >
                              {curr}
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

                    
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
                  <h3 class="mb-3" style={{ fontWeight: 500 }}>
              BRANDS
            </h3>
            {props.brands
              ? props.brands.map((curr, index) => {
                  return (
                    <div>
                      {/* <button onClick={()=>props.handlebrands(curr)}>
                                <p>
                              {curr}
                              </p>
                              </button> */ 
                              }

                      {/* <div class="form-check pl-0 mb-3 mx-4">
                        <div class="custom-control custom-checkbox mx-2"> */}
                          {/* <input
                            style={{
                              width: "15px !important",
                              height: "15px !important",
                              backgroundColor: "#D7B1D7",
                              paddingBottom: "10px",
                            }}
                            type="checkbox"
                            // class="form-check-input filled-in"
                            id={curr}
                            onChange={() => props.handlebrands(curr)}
                            // class="custom-control-input"
                            defaultChecked={
                              props.filterbrands.includes(curr) ? true : false
                            }
                          /> */}
                          {/* <input
                              style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                paddingBottom: "10px",
                              }}
                              type="checkbox"
                              // class="form-check-input filled-in"
                              id={curr}
                              onChange={() => props.handlebrands(curr)}
                              class="custom-control-input"
                              name="default"
                              defaultChecked={
                                props.filterbrands.includes(curr) ? true : false
                              }
                              // border-color: #D7B1D7;

                              // defaultChecked={props.bricksizes.includes(curr)?true:false}
                            />
                          <label
                            style={{
                              fontSize: "13px",
                              paddingLeft: "5px",
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                            class="form-check-label small card-link-secondary"
                            for={curr}
                          >
                            {curr}
                          </label>
                        </div> */}
                      {/* </div> */}
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                            <input
                              style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                              type="checkbox"
                              // class="form-check-input filled-in"
                              id={curr}
                              onChange={() => props.handlebrands(curr)}
                              class="custom-control-input"
                              name="default"
                              // border-color: #D7B1D7;

                              // defaultChecked={props.bricksizes.includes(curr)?true:false}
                            />
                            <label
                              style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                              class="custom-control-label card-link-secondary lab2"
                              for={curr}
                            >
                              {curr}
                            </label>
                          </div>
                        </div>
                    </div>
                  );
                })
              : null}
                     

                     <h3 class="mb-1" style={{ fontWeight: 500 }}>
                       MATERIAL</h3>
                    <div class="form-check pl-0 mb-3 mx-4 ">
                    <div class="custom-control custom-checkbox mx-2">
                        <input
                         style={{
                          width: "15px !important",
                          height: "15px !important",
                          backgroundColor: "#D7B1D7",
                          // paddingBottom: "10px",
                        }}
                          type="checkbox"
                          // class="form-check-input filled-in"
                          class="custom-control-input"
                              name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px  ",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                              class="custom-control-label card-link-secondary lab2"   for="46"
                        >
                        Cement
                        </label>
                      </div>
                      </div>
                    <div class="form-check pl-0 mb-3 mx-4">
                      
                    <div class="custom-control custom-checkbox mx-2">
                        <input
                         style={{
                          width: "15px !important",
                          height: "15px !important",
                          backgroundColor: "#D7B1D7",
                          // paddingBottom: "10px",
                        }}
                          type="checkbox"
                          // class="form-check-input filled-in"
                          class="custom-control-input"
                              name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px !important ",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                              class="custom-control-label card-link-secondary lab2"   for="46"
                        >
                        Glass
                        </label>
                      </div>
                      </div>
                      
                      <div class="form-check pl-0 mb-3 mx-4">
                        
                      <div class="custom-control custom-checkbox mx-2">
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                         Basalt
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                      <div class="custom-control custom-checkbox mx-2">
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                          Quartz
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                            <div class="custom-control custom-checkbox mx-2">
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                         Slate
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                            <div class="custom-control custom-checkbox mx-2">
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                        Sandstone
                        </label>
                      </div>
                      </div>
                       <div class="form-check pl-0 mb-3 mx-4">
                             <div class="custom-control custom-checkbox mx-2">
                         
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                         Marble
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                        Travertine
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                         Granite
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                        Cork
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                        PVC
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                       Vinyl
                        </label>
                      </div>
                      </div>
                      <div class="form-check pl-0 mb-3 mx-4">
                          <div class="custom-control custom-checkbox mx-2">
                        
                        
                        <input
                        style={{
                                width: "15px !important",
                                height: "15px !important",
                                backgroundColor: "#D7B1D7",
                                // paddingBottom: "10px",
                              }}
                          type="checkbox"
                          class="custom-control-input"
                          name="default"
                          id="46"
                        />
                        <label
                        style={{
                                fontFamily:"open sans",
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                              }}
                          class="custom-control-label card-link-secondary lab2"
                              for="46"
                        >
                        Bamboo
                        </label>
                      </div>
                      </div>
                  <section class="mb-4">
                  <h3 class="mb-1" style={{ fontWeight: 500 }}>
                       PRICE</h3>

                    
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
                           <label for="form" id="min">
                      ₹ Min
                    </label>
                  </div>
                  <p class="px-2 mb-0 text-muted"> - </p>
                  <div class="md-form md-outline my-0">
                    <input
                      id="to"
                      type="text"
                      class="form-control mb-2"
                      name="max"
                      onChange={props.handlemax}
                    />
                    <label for="to" id="min">
                      ₹ Max
                    </label>
                  </div>

                      </div>
                    </form>
                  </section>
                  
                <div class="d-flex justify-content-evenly my-3 filterbutt">
              <button
                type="button"
                class="btn btn-dark filterbuttt"
                onClick={props.handleapply}
                style={{ marginRight: "5%",fontSize: "10px" ,marginBotton:"10px"}}
              >
                Apply Filters
              </button>
              <button
                type="button"
                class="btn btn-dark filterbuttt"
                onClick={props.handleremove}
              style={{ marginRight: "5%",fontSize: "10px" ,marginBotton:"10px"}}
              >
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

export default FlooringFilter
