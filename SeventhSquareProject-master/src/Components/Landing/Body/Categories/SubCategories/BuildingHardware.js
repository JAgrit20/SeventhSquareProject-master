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
              onClick={()=>props.handletype('Bath Hardware')}
            />
            <h5>Bath Hardware</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={HI}
              alt=""
              onClick={()=>props.handletype('Door & Window Hardware')}
            />
            <h5>Door & Window Hardware</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={RS}
              alt=""
              onClick={()=>props.handletype('Safe & Deposit Box')}
            />
            <h5>Safe & Deposit Box</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={DW}
              alt=""
              onClick={()=>props.handletype('Railing System')}
            />
            <h5>Railing System</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Nails, Screws, Nuts & Bolts')}
            />
            <h5>Nails, Screws, Nuts & Bolts</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Curtain Rings & Rod')}
            />
            <h5>Curtain Rings & Rod</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Smoke Detector')}
            />
            <h5>Smoke Detector</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Security System')}
            />
            <h5>Security System</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Ladder')}
            />
            <h5>Ladder</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Drawer Channel / Slider')}
            />
            <h5>Drawer Channel / Slider</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
         
        </div>
      </div>
    )
}

export default BuildingHardware
