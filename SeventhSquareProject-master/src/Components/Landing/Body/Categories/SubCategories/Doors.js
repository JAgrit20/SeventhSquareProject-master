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
              onClick={()=>props.handletype('Iron & Steel')}
            />
            <h5>Iron & Steel</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PVC}
              alt=""
              onClick={()=>props.handletype('PVC')}
            />
            <h5>PVC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WD}
              alt=""
              onClick={()=>props.handletype('Wood')}
            />
            <h5>Wood</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default Doors
