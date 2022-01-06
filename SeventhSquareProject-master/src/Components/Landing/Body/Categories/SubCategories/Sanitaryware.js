import React from 'react'
import "../Categories.css";
import faucet from '../Sub Category Icons/Faucet.png'
import shower from '../Sub Category Icons/Shower.png'
import sink from '../Sub Category Icons/Sink.png'
import basin from '../Sub Category Icons/Wash Basin.png'
import closet from '../Sub Category Icons/Water Closet.png'
import tub from '../Sub Category Icons/Bath Tub.png'
function Sanitaryware(props) {
    
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Sanitaryware</h1>

        <div className="categorySectionOptions ">
          <div className="categorySectionItems slide">
            <img
              src={faucet}
              alt=""
              onClick={()=>props.handletype('Faucet')}
            />
            <h5>Faucet</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={shower}
              alt=""
              onClick={()=>props.handletype('Shower')}
            />
            <h5>Shower</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={sink}
              alt=""
              onClick={()=>props.handletype('Sink')}
            />
            <h5>Sink</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={basin}
              alt=""
              onClick={()=>props.handletype('Washbasin')}
            />
            <h5>Wash Basin</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={closet}
              alt=""
              onClick={()=>props.handletype('Water Closet & Bidet')}
            />
            <h5>Water Closet & Bidet</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={tub}
              alt=""
              onClick={()=>props.handletype('Bath Tub')}
            />
            <h5>Bath Tub</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={tub}
              alt=""
              onClick={()=>props.handletype('Urinal')}
            />
            <h5>Urinal</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={tub}
              alt=""
              onClick={()=>props.handletype('Flushing Cistern & Flush Tank')}
            />
            <h5>Flushing Cistern & Flush Tank</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={tub}
              alt=""
              onClick={()=>props.handletype('Fittings & Allied Product')}
            />
            <h5>Fittings & Allied Product</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          {/* <div className="categorySectionItems slide">
            <img
              src={tub}
              alt=""
              onClick={()=>props.handletype('Bath Tub')}
            />
            <h5>Other</h5> */}
            {/* <p>1212 pieces</p> */}
          {/* </div> */}
          {/* <div className="categorySectionItems slide">

          Faucet
Shower
Sink 
Washbasin
Water Closet & Bidet
Bath Tub
Urinal
Flushing Cistern & Flush Tank
Fittings & Allied Product
Other

            <img
              src="https://png.pngitem.com/pimgs/s/61-612316_transparent-red-brick-png-bricks-png-png-download.png"
              alt=""
            />
            <h5>Other</h5>
            
          </div> */}
        </div>
      </div>
    )
}

export default Sanitaryware
