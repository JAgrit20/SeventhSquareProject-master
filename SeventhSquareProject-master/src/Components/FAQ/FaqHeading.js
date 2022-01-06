import React from 'react'
import { FaCentercode } from 'react-icons/fa'
import Quotation from '../Product/Quotation'
import "./Faq.css"
function FaqHeading() {
    const faqHeading = {
padding: "20px 40px",
backgroundColor: "rgb(240, 240, 243)",
height : "10%",
width: "100%",
    }
    const faqHeadingH1 = {
        textAlign: "center",
        fontSize: "40px",
        fontWeight : "800",
        fontFamily: "Crimson-text",
            }
            const faqQuotation = {
                marginTop:"50px",
                display:"flex",
                justifyContent: "center",
                alignItems:"center",
textAlign:"Center",
            }
    return (

        <>
            <div className="faqHeading" style={faqHeading}>
                <h1 style={faqHeadingH1}>How Can We Help You ?</h1>
                {/* <div className="d-flex faqQuotation py-4" style={faqQuotation}>
                <Quotation/>
            </div> */}
            </div>
            
        </>
    )
}

export default FaqHeading
