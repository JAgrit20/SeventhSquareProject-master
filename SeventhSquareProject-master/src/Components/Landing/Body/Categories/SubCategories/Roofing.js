import React from 'react'
import "../Categories.css";
import CT from '../Sub Category Icons/Clay Tiles.png'
import SRS from '../Sub Category Icons/Steel Roofing Sheet.png'
import ARS from '../Sub Category Icons/Aluminium Roofing sheet.png'
function Roofing(props) {
    
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Roofing</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={CT}
              alt=""
              onClick={()=>props.handletype('Metal Roofing Sheet & Accessories')}
            />
            <h5> Metal Roofing Sheet & Accessories</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={SRS}
              alt=""
              onClick={()=>props.handletype('Polycarbonate Sheet')}
            />
            <h5>Polycarbonate Sheet</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ARS}
              alt=""
              onClick={()=>props.handletype('Fibre Cement Sheet')}
            />
            <h5>Fibre Cement Sheet</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ARS}
              alt=""
              onClick={()=>props.handletype('Clay Roof Tiles & Accessories')}
            />
            <h5>Clay Roof Tiles & Accessories</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ARS}
              alt=""
              onClick={()=>props.handletype('Solar Roofing')}
            />
            <h5>Solar Roofing</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ARS}
              alt=""
              onClick={()=>props.handletype('Ceiling Panel')}
            />
            <h5>Ceiling Panelt</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default Roofing
