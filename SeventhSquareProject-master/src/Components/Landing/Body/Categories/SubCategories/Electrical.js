import React from 'react'
import "../Categories.css";
import WC from '../Sub Category Icons/Wires & Cables.png'
import LF from '../Sub Category Icons/Lighting & Fan.png'
import HA from '../Sub Category Icons/Home Automation.png'
import SS from '../Sub Category Icons/Switches & Switchboard.png'
import EPB from '../Sub Category Icons/Electrical Panels & Boards.png'
import CP from '../Sub Category Icons/Conduit Pipe.png'

function Electrical(props) {
    
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Electrical</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={WC}
              alt=""
              onClick={()=>props.handletype('Wires & Cables')}
            />
            <h5>Wires & Cables</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={LF}
              alt=""
              onClick={()=>props.handletype('Lighting & Fan')}
            />
            <h5>Lighting & Fan</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={HA}
              alt=""
              onClick={()=>props.handletype('Home Automation')}
            />
            <h5>Home Automation</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={SS}
              alt=""
              onClick={()=>props.handletype('Switches & Switchboard')}
            />
            <h5>Switches & Switchboard</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={EPB}
              alt=""
              onClick={()=>props.handletype('Electrical Panels & Boards')}
            />
            <h5> Electrical Panels & Boards</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={CP}
              alt=""
              onClick={()=>props.handletype('Conduit Pipes')}
            />
            <h5>Conduit Pipes</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default Electrical
