import React from 'react'
import "../Categories.css";
import glass  from '../Sub Category Icons/glass.jpg'
function Glass(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Architectural Glass</h1>
          <div className="categorySectionOptions">
          <div className="categorySectionItems slide">






            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Plywood')}
            />
            <h5>Toughened</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Float')}
            />
            <h5>Float</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Extra Clean')}
            />
            <h5>Extra Clean</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Tinted')}
            />
            <h5>Tinted</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Chromatic')}
            />
            <h5>Chromatic</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Reflective')}
            />
            <h5>Plywood</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Reflective')}
            />
            <h5>Reflective</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Laminated')}
            />
            <h5>Laminated</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Lacquered')}
            />
            <h5>Lacquered</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Bevelled')}
            />
            <h5>Bevelled</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Frosted')}
            />
            <h5>Frosted</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={glass}
              alt=""
              onClick={()=>props.handletype('Textured')}
            />
            <h5>Textured</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          
        </div>


        




      </div>
    )
}

export default Glass
