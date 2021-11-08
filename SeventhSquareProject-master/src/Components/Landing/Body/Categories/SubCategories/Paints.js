import React from 'react'
import "../Categories.css";
import WP from '../Sub Category Icons/Wall Putty.png'
import PA from '../Sub Category Icons/Paint.png'
import PR from '../Sub Category Icons/Primer.png'




function Paints(props) {
   
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Paints</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={PA}
              alt=""
              onClick={()=>props.handletype('Paint')}
            />
            <h5>Paint</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WP}
              alt=""
              onClick={()=>props.handletype('Wall Putty')}
            />
            <h5>Wall Putty</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={PR}
              alt=""
              onClick={()=>props.handletype('Primer')}
            />
            <h5>Primer</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
        </div>
      </div>
    )
}

export default Paints
