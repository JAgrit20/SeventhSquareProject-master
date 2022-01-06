import React from 'react'
import "../Categories.css";
import OPC from '../Sub Category Icons/OPC 33, OPC43, OPC53, PPC, PSC, PCC.png'
import WC from '../Sub Category Icons/White Cement.png'
function Cement(props) {
    return (
        <div className="categorySection">
         
          <h1 className="text-center mt-5 pt-4">Cement</h1>

        <div className="categorySectionOptions">
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Ordinary Portland Cement (OPC) 33')}
            />
            <h5>OPC 33</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Ordinary Portland Cement (OPC) 43')}
            />
            <h5> OPC 43</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Ordinary Portland Cement (OPC) 53')}
            />
            <h5>OPC 53</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Portland Composite Cement (PCC)')}
            />
            <h5>PCC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
         
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Portland Slag Cement (PSC)')}
            />
            <h5>PSC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={OPC}
              alt=""
              onClick={()=>props.handletype('Portland Pozzolana Cement (PPC)')}
            />
            <h5>PPC</h5>
            {/* <p>1212 pieces</p> */}
          </div>
          <div className="categorySectionItems slide">
            <img
              src={WC}
              alt=""
              onClick={()=>props.handletype('White Cement')}
            />
            <h5>WHITE CEMENT</h5>
            {/* <p>1212 pieces</p> */}
          </div>
        </div>
      </div>
    )
}

export default Cement
