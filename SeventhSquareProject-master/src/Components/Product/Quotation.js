import React from "react";
import "./product.css";
function Quotation() {
  return (
    <div>
      <div class="quotationwrapper">
        <div class="quotationHeading">
          <h2 className="h4">Request for : </h2>
        </div>
        <div class="button">
          <div class="icon"><a href='/requestQuotation'>Quotation</a></div>
        </div>
        <div class="button">
          <div class="icon">Information</div>
        </div>
        <div class="button">
          <div class="icon">Proposal</div>
        </div>
        <div class="button">
          <div class="icon">Blanket PO</div>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
