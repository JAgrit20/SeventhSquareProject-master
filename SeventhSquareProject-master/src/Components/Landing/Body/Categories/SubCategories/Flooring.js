import React from 'react'
import "../Categories.css";
import T from '../Sub Category Icons/Tiles.png'
import NS from '../Sub Category Icons/Natural Stone.png'
import PB from '../Sub Category Icons/Panels & Boards.png'



function Flooring(props) {
    
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Flooring</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={T}
              alt=""
              onClick={()=>props.handletype('Tiles')}
            />
            <h5>Tiles</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={NS}
              alt=""
              onClick={()=>props.handletype('Natural Stone')}
            />
            <h5>Natural Stone</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PB}
              alt=""
              onClick={()=>props.handletype('Panels & Boards')}
            />
            <h5>Panels & Boards</h5>
            {/* <p>1212 pieces</p> */}
          </div>
        
        </div>
      </div>
    )
}

export default Flooring
