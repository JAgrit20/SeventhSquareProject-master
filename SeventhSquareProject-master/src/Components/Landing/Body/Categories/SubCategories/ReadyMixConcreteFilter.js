import React from 'react'
import "../Categories.css";
function ReadyMixConcreteFilter() {
    return (
        <div className="bodyLeft shadow"   style={{ padding: "10px 10px !important" }}>
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
                      PRICE
                      </h3>

                    {/* <div class="form-check pl-0 mb-3">
                      <input
                       style={{
                        fontFamily:"open sans",
                        width: "15px !important",
                        height: "15px !important",
                        backgroundColor: "#D7B1D7",
                    
                      }}
                        type="radio"
                        class="form-check-input"
                        id="under25"
                        name="materialExampleRadios"
                      />
                      <label
                       style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary"

                        for="under25"
                      >
                        Under $25
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="2550"
                        name="materialExampleRadios"
                      />
                      <label
                       style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary"

                        for="2550"
                      >
                        $25 to $50
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="50100"
                        name="materialExampleRadios"
                      />
                      <label
                       style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary"

                        for="50100"
                      >
                        $50 to $100
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="100200"
                        name="materialExampleRadios"
                      />
                      <label
                       style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary"

                        for="100200"
                      >
                        $100 to $200
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="200above"
                        name="materialExampleRadios"
                      />
                      <label
                       style={{
                                fontSize: "15px",
                                paddingLeft: "5px",
                                justifyContent: "center",
                                alignContent: "center",
                                fontFamily:"open sans",
                              }}
                              class="custom-control-label text-uppercase card-link-secondary"

                        for="200above"
                      >
                        $200 & Above
                      </label>
                    </div> */}
                <form>
               <div class="d-flex align-items-center mt-1 pb-1 maxmin">
                  <div class="md-form md-outline my-0">
                    <input
                      id="from"
                      type="text"
                      class="form-control mb-2"
                      name="min"
                      // onChange={props.handlemin}
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
                      // onChange={props.handlemax}
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
                // onClick={props.handleapply}
                style={{ marginRight: "5%",fontSize: "10px" }}
              >
                Apply Filters
              </button>
              <button
                type="button"
                class="btn btn-dark filterbuttt"
                // onClick={props.handleremove}
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

export default ReadyMixConcreteFilter
