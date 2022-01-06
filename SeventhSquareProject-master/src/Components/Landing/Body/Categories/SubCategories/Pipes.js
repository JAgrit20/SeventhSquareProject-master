import React from 'react'
import "../Categories.css";
import up from '../Sub Category Icons/upvc.jpg'
import cp from '../Sub Category Icons/cpvc.jpg'
import fit from '../Sub Category Icons/fit.jpg'
import tank from '../Sub Category Icons/tank.jpg'
import iron from '../Sub Category Icons/iron.jpg'
function Pipes(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Pipes</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={up}
              alt=""
              onClick={()=>props.handletype('UPVC Pipe')}
              
            />
            <h5> UPVC Pipe</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={cp}
              alt=""
              onClick={()=>props.handletype('CPVC Pipe')}
              
            />
            <h5> CPVC Pipe</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={iron}
              alt=""
              onClick={()=>props.handletype('Iron & Steel Pipe')}
              
            />
            <h5> Iron & Steel Pipe</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
          <div className="categorySectionItems slide">
            <img
              src={fit}
              alt=""
              onClick={()=>props.handletype('Fittings')}
              
            />
            <h5> Fittings</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={tank}
              alt=""
              onClick={()=>props.handletype('Water Tank')}
              
            />
            <h5> Water Tank</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={cp}
              alt=""
              onClick={()=>props.handletype('Pipe - Other')}
              
            />
            <h5> Pipe - Other</h5>
            {/* <p>1212 pieces</p> */}
          </div>

          
        </div>
      
      </div>
    )
}

export default Pipes
