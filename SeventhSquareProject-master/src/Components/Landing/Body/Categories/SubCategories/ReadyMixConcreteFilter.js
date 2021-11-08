import React from 'react'
import "../Categories.css";
function ReadyMixConcreteFilter() {
    return (
        <div className="bodyLeft shadow">
            <div className="leftFilterHeading">
              <h1>Filter</h1>{" "}
            </div>
            <div className="filerBody">
              <section>
                <section>
                  {/* <section class="mb-4">
                    <h6 class="font-weight-bold mb-3">Size</h6>

                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="34"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="34"
                      >
                        34
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="36"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="36"
                      >
                        36
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="38"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="38"
                      >
                        38
                      </label>
                    </div>
                    <div class="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input filled-in"
                        id="40"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="40"
                      >
                        40
                      </label>
                    </div>
                    <a
                      class="btn btn-link text-muted p-0"
                      data-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      More
                    </a>
                    <div class="collapse pt-3" id="collapseExample">
                      <div class="form-check pl-0 mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input filled-in"
                          id="42"
                        />
                        <label
                          class="form-check-label small text-uppercase card-link-secondary"
                          for="42"
                        >
                          42
                        </label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input filled-in"
                          id="44"
                        />
                        <label
                          class="form-check-label small text-uppercase card-link-secondary"
                          for="44"
                        >
                          44
                        </label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input filled-in"
                          id="46"
                        />
                        <label
                          class="form-check-label small text-uppercase card-link-secondary"
                          for="46"
                        >
                          46
                        </label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input filled-in"
                          id="50"
                        />
                        <label
                          class="form-check-label small text-uppercase card-link-secondary"
                          for="50"
                        >
                          50
                        </label>
                      </div>
                    </div>
                  </section> */}

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

                    <div class="form-check pl-0 mb-3">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="under25"
                        name="materialExampleRadios"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
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
                        class="form-check-label small text-uppercase card-link-secondary"
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
                        class="form-check-label small text-uppercase card-link-secondary"
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
                        class="form-check-label small text-uppercase card-link-secondary"
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
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="200above"
                      >
                        $200 & Above
                      </label>
                    </div>
                    <form>
                      <div class="d-flex align-items-center mt-4 pb-1">
                        <div class="md-form md-outline my-0">
                          <input
                            id="from"
                            type="text"
                            class="form-control mb-2"
                          />
                          <label for="form">$ Min</label>
                        </div>
                        <p class="px-2 mb-0 text-muted"> - </p>
                        <div class="md-form md-outline my-0">
                          <input
                            id="to"
                            type="text"
                            class="form-control mb-2"
                          />
                          <label for="to">$ Max</label>
                        </div>
                      </div>
                    </form>
                  </section>

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
