import React from 'react'
import "../Categories.css";
import AAC from '../Sub Category Icons/AAC Block.png'
function ReadyMixConcrete() {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Modular</h1>
          <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={AAC}
              alt=""
              // onClick={()=>props.handletype('Fly Ash (AAC)')}
            />
            <h5>Modular Kitchen</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={AAC}
              alt=""
              // onClick={()=>props.handletype('Concrete Blocks')}
            />
            <h5>Modular Wardrobe</h5>
            {/* <p>1212 pieces</p> */}
          </div>
        </div>
      </div>
    )
}

export default ReadyMixConcrete
