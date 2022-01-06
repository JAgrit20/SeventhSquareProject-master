import React, { useEffect, useState } from "react";
// import "./Testimonial.css";  

function Testimonial() {
  const [reviewdata, setreviewdata] = useState([]);
  
  
  const getreviews = async () => {
    const config = {
      headers: {
        // Authorization: "token " + localStorage.getItem("token"),
      },
    };
    console.log(config);
    const res = await fetch(
      "https://api.seventhsq.com/review/companyreview/",
      config
    );
    const data = await res.json();
    setreviewdata(data);
    console.log(data);
  };
  
  useEffect(() => {
  
    getreviews();
  }, []);

return(
  <>
  <div className="container-lg">
    <div
      className="d-flex justify-content-center my-5"
      style={{ flexDirection: "column" }}
    >
      <h4
        style={{
          fontFamily: "open sans",
          fontSize: "25px",
          marginBottom: "10px",
        }}
      >
        What people are saying about us
        
      </h4>
      <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                width: 600,
                height: 2.0,
                borderColor: "#000000",
                margin: "auto",
                marginBottom: 40,
              }}
            />
      <div className="grid_wrap_review">
        {/* review card */}
        {reviewdata?.map((v) => {
          return (
            <div className="review_card">
              {/* <span className="circle"></span> */}
              <span
                className="rounded-circle p-4 bg-dark"
                style={{ color: "white", margin: "5px" }}
              >
                <h1>
                  {v?.username ? v?.username[0] + v?.username[1] : null}
                </h1>
              </span>
              <span style={{ flex: 1 }}>
                <span className="review_card_1st_child mt-2">
                  <h2 style={{ paddingTop: "5px" }}>{v?.title}</h2>

                  {v.star > 0 && v.star <= 1 ? (
                    <span
                      style={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                    >
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </span>
                  ) : null}
                  {v.star > 1 && v.star <= 2 ? (
                    <span
                      style={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                    >
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </span>
                  ) : null}
                  {v.star > 2 && v.star <= 3 ? (
                    <span
                      style={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                    >
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </span>
                  ) : null}
                  {v.star > 3 && v.star <= 4 ? (
                    <span
                      style={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                    >
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </span>
                  ) : null}
                  {v.star > 4 && v.star <= 5 ? (
                    <span
                      style={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                    >
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  ) : null}
                </span>
                <p className="review_body">{v?.review}</p>
                {/* <p className="review_body">{v?.review}</p> */}
                <h3>Posted By: {v?.username}</h3>
              </span>
            </div>
          );
        })}
      </div>
    </div>
    </div>


</>
);

}
export default Testimonial;
