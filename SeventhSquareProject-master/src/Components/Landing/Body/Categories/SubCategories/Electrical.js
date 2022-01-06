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
              onClick={()=>props.handletype('Lighting')}
            />
            <h5>Lighting </h5>
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
              onClick={()=>props.handletype('Switch , Socket & Switchboard')}
            />
            <h5>Switch , Socket & Switchboard</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={EPB}
              alt=""
              onClick={()=>props.handletype('Electrical Box')}
            />
            <h5> Electrical Box</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={EPB}
              alt=""
              onClick={()=>props.handletype('Switchgear')}
            />
            <h5>Switchgear</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={CP}
              alt=""
              onClick={()=>props.handletype('Conduit Pipe')}
            />
            <h5>Conduit Pipes</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={CP}
              alt=""
              onClick={()=>props.handletype('Electrical Fittings')}
            />
            <h5>Electrical Fittings</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <a href={"/catogoriesLanding/HVAC"}>
            
            <img
              src={CP}
              alt=""
              
            />
            </a>
            <h5 class="fs-2">HVAC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          {/* <div className="categorySectionItems slide">
            <img
              src={CP}
              alt=""
              onClick={()=>props.handletype('Other')}
            />
            <h5>Other</h5> */}
            {/* <p>1212 pieces</p> */}
          {/* </div> */}
         
        </div>
            
      </div>
      
    )
}

export default Electrical
