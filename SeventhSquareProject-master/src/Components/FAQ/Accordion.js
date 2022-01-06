import React, {useEffect, useState} from "react";
import "../Product/product.css";
import { FaArrowDown } from "react-icons/fa";
function Accordion(props) {

    const[Faqdata,setdata]=useState([]);
    // const[tagdata,settagdata]=useState([]);
    //const[selectedtag,setselectedtag]=useState([]);
        
        const getdata=async()=>{
            const res=await fetch('https://api.seventhsq.com/faqs/');
            const data= await res.json();
            console.log(data);
            setdata(data);
    }
    const calltag=async(name)=>{
      const res=await fetch(`https://api.seventhsq.com/faqs/tags/${name}`);
      const data= await res.json();
        console.log(data);
        setdata(data)
      
    }
   useEffect(()=>{
     props.tag.length==0?
       getdata():
       calltag(props.tag)

   },[])

   return Faqdata.slice(0,20).map((curr,index) => {
    return (
      <>
        <div className="FaqAccordion" >
        <input
          className="FaqAccordionInput"
          type="checkbox"
          id={curr.id}
        />
    
         <label className="FaqAccordionLabel" for={curr.id}>
           {curr.question}
           <span>
             <FaArrowDown />
           </span>{" "}
         </label>
         <div class="accordianContent">
         
          <p>
          <div id= "posts_body" dangerouslySetInnerHTML={{__html: curr.answer}}></div>
         
          </p>
        </div>
         
        
       
        
      </div>
      </>
    )
   
})
}

export default Accordion
