import React from 'react'
import "../Categories.css";
import T from '../Sub Category Icons/Tiles.png'
import NS from '../Sub Category Icons/Natural Stone.png'
import PB from '../Sub Category Icons/Panels & Boards.png'
import wd from '../Sub Category Icons/wooden.jfif'



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
              src={wd} 
              alt=""
              onClick={()=>props.handletype('Wooden Flooring')}
            />
            <h5>Wooden Flooring</h5>
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
              onClick={()=>props.handletype('WallPaper , Mural & Panel')}
            />
            <h5>WallPaper , Mural & Panel</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PB}
              alt=""
              onClick={()=>props.handletype('Cladding Brick')}
            />
            <h5>Cladding Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PB}
              alt=""
              onClick={()=>props.handletype('Paver')}
            />
            <h5>Paver </h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PB}
              alt=""
              onClick={()=>props.handletype('Accessories')}
            />
            <h5>Accessories</h5>
            {/* <p>1212 pieces</p> */}
          </div>
        
        </div>
      </div>
    )
}

export default Flooring
