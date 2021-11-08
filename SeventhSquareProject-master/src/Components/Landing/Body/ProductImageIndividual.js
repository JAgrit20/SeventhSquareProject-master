import React, { Component } from 'react'
import axios from "axios"
import "./Body.css";
export default class ProductImageIndividual extends Component {  

    
    constructor(props) {
      super(props);
     
      this.state = {
        posts: [],
        loggedin:false
      };
    }

    addtolocal=async(users)=>{
      const body={
        "title": users.name,
        "oldprice": users.markedPrice,
        "pcksize": '3',
        "estdelivery": '1' ,
        "price": users.sellingPrice ,
        "quantity": 1,
        "item": users.id,
        "gst":users.gstRate
        
      }
      var localcart=[]
      var storedcart = await JSON.parse(localStorage.getItem("localcart"));
      console.log(storedcart)
      if(storedcart!=null || storedcart!=undefined){
        localcart=storedcart.slice()
        console.log(localcart)
      }
      localcart.push(body)
      console.log(localcart)
      localStorage.setItem('localcart',JSON.stringify(localcart))
      
      window.alert("Added to Cart");
    }
  
  
  
     addtocart=async(users)=>{
      window.alert("Added to Cart");
      const config = {
        method:'POST',
        headers: {
          Authorization: "token " + localStorage.getItem("token"),
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "title": users.name,
          "oldprice": users.markedPrice,
          "pcksize": '3',
          "estdelivery": '1' ,
          "price": users.sellingPrice ,
          "quantity": 1,
          "item": users.id,
          "gst":users.gstRate
          
        })
        
      };
      console.log(config);
      const res=await fetch('https://api.seventhsq.com/orders/add-to-cart/',config);
      
      const data= await res.json();
      console.log(data);
      
      
      
  }
  
    componentDidMount() {
      axios
        .get("https://seller.seventhsq.com/inventory/api/picture/" + this.props.image)
        .then((response) => {
          this.setState({ posts: response.data });
         
         
        })
        .catch((error) => {
          console.log(error);
        });

        const token=localStorage.getItem('token')
      if ( token != undefined)
      this.setState({
        loggedin:true
      })
      console.log(this.state.loggedin)
    }
    render(){
        
        return(
          <div>
              { this.state.posts.slice(0, 1).map(curr =>(
              <img src= { "https://seller.seventhsq.com" + curr["picture"]} alt=""  />    
            ))
            }
             <ul class="side-icons">
            <span>
            <i class="fas fa-shopping-cart" onClick={async()=>this.state.loggedin==false?this.addtolocal(this.props.product):await this.addtocart(this.props.product)}></i>
            </span>
            <span>
              <i class="far fa-heart"></i>
            </span>
           
          </ul>
          </div>
          
                    

        );
      };
}

