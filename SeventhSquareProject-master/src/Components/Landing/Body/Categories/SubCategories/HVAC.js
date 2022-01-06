import React from 'react'
import "../Categories.css";
import OPC from '../Sub Category Icons/OPC 33, OPC43, OPC53, PPC, PSC, PCC.png'
import WC from '../Sub Category Icons/White Cement.png'
import up from '../Sub Category Icons/upvc.jpg'
import cp from '../Sub Category Icons/cpvc.jpg'
import fit from '../Sub Category Icons/fit.jpg'
import tank from '../Sub Category Icons/tank.jpg'
import iron from '../Sub Category Icons/iron.jpg' 
function HVAC(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">HVAC</h1>

          <div className="categorySectionOptions">
          <div className="categorySectionItems slide">
            <img
              src={up}
              alt=""
              onClick={()=>props.handletype('Exhaust Fan & Ceiling Fan')}
              
            />
            <h5>Exhaust Fans , Ceiling Fans</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={cp}
              alt=""
              onClick={()=>props.handletype('Air Conditioner & Outdoor')}
              
            />
            <h5>Air Conditioner & Outdoor</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={iron}
              alt=""
              onClick={()=>props.handletype('Ventilation Louvre')}
              
            />
            <h5> Ventilation Louvres</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
          <div className="categorySectionItems slide">
            <img
              src={fit}
              alt=""
              onClick={()=>props.handletype('Water Heater / Geyser')}
              
            />
            <h5> Water Heater / Geyser</h5>
            {/* <p>1212 pieces</p> */}
          </div>

          <div className="categorySectionItems slide">
            <img
              src={cp}
              alt=""
              onClick={()=>props.handletype('Accessories')}
              
            />
            <h5> Accessories</h5>
            {/* <p>1212 pieces</p> */}
          </div>

          
        </div>
        </div>

    )
}

export default HVAC
