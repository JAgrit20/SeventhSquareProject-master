import React from 'react'
import "../Categories.css";
import AAC from '../Sub Category Icons/AAC Block.png'
import Red from '../Sub Category Icons/Red Clay Brick.png'
import Conc from '../Sub Category Icons/Concrete Block.png'
import REF from '../Sub Category Icons/Refractory Brick.png'
import PRO from '../Sub Category Icons/Porotherm Hollow Block.png'
import ENG from '../Sub Category Icons/Engineering Brick.png'
import RCC from '../Sub Category Icons/RCC Pole.png'
function Bricks(props) {
    return (
      
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4" style={{fontWeight:600}}>Bricks</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={Red}
              alt=""
              onClick={()=>props.handletype('Red Clay Brick')}
            />
            <h5>Red Clay Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={AAC}
              alt=""
              onClick={()=>props.handletype('Fly Ash Brick')}
            />
            <h5>Fly Ash  Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={AAC}
              alt=""
              onClick={()=>props.handletype('AAC Block')}
            />
            <h5>AAC Block</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={Conc}
              alt=""
              onClick={()=>props.handletype('Concrete Hollow Block')}
            />
            <h5>Concrete Hollow Blocks</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={REF}
              alt=""
              onClick={()=>props.handletype('Refractory Brick')}
            />
            <h5>Refractory Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PRO}
              alt=""
              onClick={()=>props.handletype('Porotherm Hollow Block')}
            />
            <h5>Porotherm Hollow Block</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ENG}
              alt=""
              onClick={()=>props.handletype('Engineering Brick')}
            />
            <h5>Engineering Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={ENG}
              alt=""
              onClick={()=>props.handletype('Sand Lime Brick')}
            />
            <h5>Sand Lime Brick</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={RCC}
              alt=""
              onClick={()=>props.handletype('RCC Pole')}

            />
            <h5>RCC Pole</h5>
            {/* <p>1212 pieces</p> */}
          </div>
        </div>
      </div>
    )
}

export default Bricks
