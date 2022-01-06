import React from 'react'
import "../Categories.css";
import PVC from '../Sub Category Icons/PVC Doors & Windows.png'
import IS from '../Sub Category Icons/Iron & Steel Doors & Windows.png'
import WD from '../Sub Category Icons/Wooden Door & Windows.png'

function Doors(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Doors & Windows</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={IS}
              alt=""
              onClick={()=>props.handletype('Metal')}
            />
            <h5>Metal</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PVC}
              alt=""
              onClick={()=>props.handletype('Wooden')}
            />
            <h5>Wooden</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WD}
              alt=""
              onClick={()=>props.handletype('Modular')}
            />
            <h5>Modular</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WD}
              alt=""
              onClick={()=>props.handletype('Glass')}
            />
            <h5>Glass </h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WD}
              alt=""
              onClick={()=>props.handletype('UPVC')}
            />
            <h5>UPVC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default Doors
