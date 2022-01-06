import React from 'react'
import "../Categories.css";
import TMT from '../Sub Category Icons/TMT Bar.png'
import wire from '../Sub Category Icons/Binding Wire.png'
import steel from '../Sub Category Icons/Structural Steel.png'
function Steel(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Steel </h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={TMT}
              alt=""
              onClick={()=>props.handletype('TMT Bar')}
            />
            <h5>TMT Bars</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={wire}
              alt=""
              onClick={()=>props.handletype('Binding Wire & Stirrup')}
            />
            <h5>Binding Wires & Stirrup</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={steel}
              alt=""
              onClick={()=>props.handletype('Structural Steel')}
            />
            <h5>Structural Steel</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          {/* <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
            />
           
          </div> */}
        </div>
      </div>
    )
}

export default Steel
