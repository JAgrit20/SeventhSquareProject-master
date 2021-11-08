import React from 'react'
import "../Categories.css";
function Pipes(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Pipes</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
              onClick={()=>props.handletype('Fittings')}
              
            />
            <h5> Fittings</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          
        </div>
      </div>
    )
}

export default Pipes
