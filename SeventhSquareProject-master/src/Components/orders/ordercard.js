import React, { useState,useEffect } from 'react'
import ReviewModal from './review_modal';
import Productcard from './productcard';
function Ordercard(props) {
  // const [total ,settotal]=useState(0)
  // const [description,setdescription]=useState('')
  // const [modalShow, setModalShow] = useState(false);
  // useEffect(()=>{
    

  //   let s=0
  //   props.items.forEach(myFunction)
  //   function myFunction(item) {
  //     s += item.price*item.quantity;
  //   }
  //   settotal(s)

  //   let j=''
  //   props.items.forEach(myFunction2)
  //   function myFunction2(item) {
  //     j += `${item.product}`+'*'+`${item.quantity}`+'+';
  //   }
  //   setdescription(j)
    
  // },[])
    return (
      props.items.map((curr,index)=>{
        return(
          <Productcard id={curr.product} key={index} orderid={props.orderid} status={props.status}/>
        )
      })
       
    )
}

export default Ordercard
