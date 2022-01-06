import React from 'react'
import "../Categories.css";
function ConstructionChemicals(props) {
    
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Construction Chemicals</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Wall Putty')}
            />
            <h5>Wall Putty</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('UPVC & CPVC Solvent')}
            />
            <h5>UPVC & CPVC Solvent</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Adhesive')}
            />
            <h5>Adhesives</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Waterproofing')}
            />
            <h5>Waterproofing</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Sealant')}
            />
            <h5>Sealant</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Grout')}
            />
            <h5>Grout</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Mortar')}
            />
            <h5>Mortar</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Primer')}
            />
            <h5>Primer</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Screed')}
            />
            <h5>Screed</h5>
            {/* <p>1212 pieces</p> */}
          </div>
       
        </div>
      </div>
    )
}

export default ConstructionChemicals
