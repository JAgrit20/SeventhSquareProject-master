import React from 'react'
import "../Categories.css";
import M from '../Sub Category Icons/M Sand.png'
import P from '../Sub Category Icons/P Sand.png'
import Stone from '../Sub Category Icons/Crushed Stone.png'
function Aggregates(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Aggregates</h1>

        <div className="categorySectionOptions">
          
          <div className="categorySectionItems slide">
            <img
              src={M}
              alt=""
              onClick={()=>props.handletype('M-Sand')}
            />
            <h5>M-Sand</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={P}
              alt=""
              onClick={()=>props.handletype('P-Sand')}
            />
            <h5>P-Sand</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={Stone}
              alt=""
              onClick={()=>props.handletype('River Sand')}
            />
            <h5> River Sand</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={Stone}
              alt=""
              onClick={()=>props.handletype('Crushed Stone / Grit')}
            />
            <h5> Crushed Stone / Grit</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={Stone}
              alt=""
              onClick={()=>props.handletype('Gravel')}
            />
            <h5> Gravel</h5>
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

export default Aggregates
