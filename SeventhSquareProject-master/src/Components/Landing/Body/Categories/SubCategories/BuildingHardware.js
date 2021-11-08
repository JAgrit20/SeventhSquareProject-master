import React from 'react'
import "../Categories.css";
import LH from '../Sub Category Icons/Locks & Handles.png'
import HI from '../Sub Category Icons/Hinges.png'
import RS from '../Sub Category Icons/Railing System.png'
import DW from '../Sub Category Icons/Door & Window Fittings.png'

function BuildingHardware(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Building Hardware</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={LH}
              alt=""
              onClick={()=>props.handletype('Locks & Handles')}
            />
            <h5>Locks & Handles</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={HI}
              alt=""
              onClick={()=>props.handletype('Hinges')}
            />
            <h5>Hinges</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={RS}
              alt=""
              onClick={()=>props.handletype('Railing System')}
            />
            <h5>Railing System</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={DW}
              alt=""
              onClick={()=>props.handletype('Door & Window Fittings')}
            />
            <h5>Door & Window </h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
            />
            <h5>Fittings</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
            />
            <h5>Others</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default BuildingHardware
