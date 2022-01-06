import React from 'react'
import "../Categories.css";
function BuildingHardwareFilter(props) {
    
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
            <section class="mb-4">
              <h3 class="mb-1" style={{ fontWeight: 500 }}>
                PRICE
              </h3>

              <form>
               <div class="d-flex align-items-center mt-1 pb-1 maxmin">
                  <div class="md-form md-outline my-0">
                    <input
                      id="from"
                      type="text"
                      class="form-control mb-2"
                      name="min"
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
  );
}

export default BuildingHardwareFilter
