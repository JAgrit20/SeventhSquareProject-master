import React from 'react';
import "./Benefits.css";
function BenefitsItem({id, image,title,description}) {
    return (
        <div class="benefitsItem" key={id}>
        <img src={image} alt="icon"/>
        <h2 className="text-center h3">{title}</h2>
        <span>{description}</span>
        </div>
    )
}

export default BenefitsItem
