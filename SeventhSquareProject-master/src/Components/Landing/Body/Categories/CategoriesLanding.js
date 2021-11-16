import React, { useEffect, useState,useCallback } from "react";
import "./Categories.css";
import Cat from "./Cat";
import {useParams} from "react-router-dom"
import Hardware from "./SubCategories/Hardware";

import Bricks from "./SubCategories/Bricks";
import BricksFilter from "./SubCategories/BricksFilter";
import Steel from "./SubCategories/Steel";
import  ReadyMixConcrete from "./SubCategories/ReadymixConrete";
import SteelFilter from "./SubCategories/SteelFilter";
import Aggregates from "./SubCategories/Aggregates";
import ReadyMixConcreteFilter from "./SubCategories/ReadyMixConcreteFilter";

import AggregatesFilter from "./SubCategories/AggregatesFilter";
import Wood from "./SubCategories/Wood";
import WoodFilter from "./SubCategories/WoodFilter";
import Glass from "./SubCategories/Glass";
import GlassFilter from "./SubCategories/GlassFilter";
import Pipes from "./SubCategories/Pipes";
import PipesFilter from "./SubCategories/PipesFilter";
import Sanitaryware from "./SubCategories/Sanitaryware";
import SanitarywareFilter from "./SubCategories/SanitarywareFilter";
import Electrical from "./SubCategories/Electrical";
import ElectricalFilter from "./SubCategories/ElectricalFilter";
import ConstructionChemicals from "./SubCategories/ConstructionChemicals";
import Paints from "./SubCategories/Paints";
import PaintsFilter from "./SubCategories/PaintsFilter";
import BuildingHardware from "./SubCategories/BuildingHardware";
import BuildingHardwareFilter from "./SubCategories/BuildingHardwareFilter";
import Roofing from "./SubCategories/Roofing";
import RoofingFilter from "./SubCategories/RoofingFilter";
import Flooring from "./SubCategories/Flooring";
import FlooringFilter from "./SubCategories/FlooringFilter";
import Doors from "./SubCategories/Doors";
import DoorsFilter from "./SubCategories/DoorsFilter";
import Cement from "./SubCategories/Hardware";
import CementFilter from "./SubCategories/HardwareFilter";
import ConstructionChemicalsFilter from "./SubCategories/ConstructionChemicalsFilter";



function CategoriesLanding() {
  const {name} = useParams();
  let [product, setProduct] = useState([]);
  const [order,setorder]=  useState('');
  const [min ,setmin]=useState(0);
  const [max ,setmax]=useState(1000000000);
  const [brands,setbrands]=useState([]);
  let [filterbrands,setfilterBrands]=useState([]);
  const [apply,setapply]=useState(0);
  const [type,settype]=useState('');
  const [city,setcity]=useState();
  const [hardwarematerial,sethardwarematerial]=useState('');
  const [sanitarymaterial,setsanitarymaterial]=useState('');
  let [glassize,setglassize]=useState([]);
  let [glassthick,setglassthick]=useState([]);
  let [bricksize ,setbricksize]=useState([]);
  let [pipesize ,setpipesize]=useState([]);
  let [floorsize ,setfloorsize]=useState([]);
  let brandsarray=[]
  let j=0
  let final=[]
  const getProduct = async () => {
    let city=localStorage.getItem("city")
    
    console.log(`city${city}`)
    if(city==null){
      city='Pan India'
    }
     
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
        name +'/'+city
    );
    console.log(response)
    const data= await response.json();
    console.log(data)
    
    setProduct(data)
   
    
    if (order==''){
         

           product=data

            console.log(product)
           if (min!=0 && max!=1000000000 && apply!=0){
              
            product=(product.filter((product)=>{
                return  parseInt(product.sellingPrice)>=min && parseInt(product.sellingPrice)<=max
                }))
           }

           if (filterbrands.length>0 && apply!=0){

            product=(product.filter((product)=>{
              return  filterbrands.includes(product.brand_name)
              }))
            // product=product.some(item=>{
              
            //   return filterbrands.includes(item.brand_name.toString())})
            //  console.log(product)
           }
           if(type!='' ){
            product=(product.filter((products)=>{
              return products.subCategory==type
              }))
              
           }
           if (bricksize!=0 && apply!=0){
            product=(product.filter((products)=>{
              return bricksize.includes(products.length)
              }))
           }
           if (glassize!=0 && apply!=0){
            product=(product.filter((products)=>{
              return glassize.includes(products.length)
              }))
           }
           if (pipesize!=0 && apply!=0){
            product=(product.filter((products)=>{
              return pipesize.includes(products.length)
              }))
           }
           if (floorsize!=0 && apply!=0){
            product=(product.filter((products)=>{
              return floorsize.includes(products.length)
              }))
           }
           if (glassthick!=0 && apply!=0){
            product=(product.filter((products)=>{
              return glassthick.includes(products.width)
              }))
           }
           if (hardwarematerial!='' && apply!=0){
            product=(product.filter((products)=>{
              return products.material==hardwarematerial
              }))
           }
           
           setProduct(product)
           
         
        
      
    }
   
    if (order=='low'){

    

        product=data

         console.log(product)
        if (min!=0 && max!=1000000000 && apply!=0){
           
         product=(product.filter((product)=>{
             return  parseInt(product.sellingPrice)>=min && parseInt(product.sellingPrice)<=max
             }))
        }

        if (filterbrands!='' && apply!=0){

         product=(product.filter((product)=>{
           return  product.brand_name==filterbrands
           }))
          
        }
        if(type!=''){
         product=(product.filter((products)=>{
           return products.subCategory==type
           }))
           
        }
        if (bricksize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return bricksize.includes(products.length)
            }))
        }
        if (glassize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return glassize.includes(products.length)
            }))
         }
         if (pipesize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return pipesize.includes(products.length)
            }))
         }
         if (floorsize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return floorsize.includes(products.length)
            }))
         }
         if (glassthick!=0 && apply!=0){
          product=(product.filter((products)=>{
            return glassthick.includes(products.width)
            }))
         }
        if (hardwarematerial!='' && apply!=0){
         product=(product.filter((products)=>{
           return products.material==hardwarematerial
           }))
        }
        
        setProduct(product.sort((a,b)=> a.sellingPrice-b.sellingPrice))
        
      
     
    }
    
    if (order=='high' ){

        product=data

         console.log(product)
        if (min!=0 && max!=1000000000 && apply!=0){
           
         product=(product.filter((product)=>{
             return  parseInt(product.sellingPrice)>=min && parseInt(product.sellingPrice)<=max
             }))
        }

        if (filterbrands!='' && apply!=0){

         product=(product.filter((product)=>{
           return  product.brand_name==filterbrands
           }))
          
        }
        if(type!=''){
         product=(product.filter((products)=>{
           return products.subCategory==type
           }))
           
        }
        if (bricksize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return bricksize.includes(products.length)
            }))
        }
        if (glassize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return glassize.includes(products.length)
            }))
         }
         if (pipesize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return pipesize.includes(products.length)
            }))
         }
         if (floorsize!=0 && apply!=0){
          product=(product.filter((products)=>{
            return floorsize.includes(products.length)
            }))
         }
         if (glassthick!=0 && apply!=0){
          product=(product.filter((products)=>{
            return glassthick.includes(products.width)
            }))
         }
        if (hardwarematerial!='' && apply!=0){
         product=(product.filter((products)=>{
           return products.material==hardwarematerial
           }))
        }
        
        setProduct(product.sort((a,b)=> b.sellingPrice -a.sellingPrice))
        
      
     }
  
   };


const handleorder=(value)=>{
  if(value.target.value=="high"){
    setorder('high')
    setapply(value => value+1)
  }else{
    setorder('low')
    setapply(value => value+1)
  }

  console.log(order)

}

  const handlemin=(e)=>{
    let name=e.target.name
		let value=e.target.value
    setmin(value)
    console.log(min)
  }
  const handlemax=(e)=>{
    let name=e.target.name
		let value=e.target.value
    setmax(value)
    console.log(max)
  }
  
  const handlebrands=(value)=>{
    if(filterbrands.includes(value)){
      filterbrands=(filterbrands.filter((filterbrand)=>{
        return filterbrand != value
        }))
      setfilterBrands(filterbrands)
      
    }
    else{
      filterbrands.push(value.toString())
      setfilterBrands(filterbrands)
      console.log(filterbrands)

    }
   
  }

  const handletype=(value)=>{
        settype(value)
        console.log(value)
  }
  const handlebricksize=(value)=>{
   

    if(bricksize.includes(value)){
      bricksize=(bricksize.filter((size)=>{
        return size != value
        }))
      setbricksize(bricksize)
      
    }
    else{
      bricksize.push(value.toString())
      setbricksize(bricksize)
      console.log(bricksize)

    }
}
const handlepipesize=(value)=>{
  if(pipesize.includes(value)){
    pipesize=(pipesize.filter((size)=>{
      return size != value
      }))
    setpipesize(pipesize)
    
  }
  else{
    pipesize.push(value.toString())
    setpipesize(pipesize)
    console.log(pipesize)

  }
}
const handlefloorsize=(value)=>{
  if(floorsize.includes(value)){
    floorsize=(floorsize.filter((size)=>{
      return size != value
      }))
    setfloorsize(floorsize)
    
  }
  else{
    floorsize.push(value.toString())
    setfloorsize(floorsize)
    console.log(floorsize)

  }
}
const handleglassize=(value)=>{
  if(glassize.includes(value)){
    glassize=(glassize.filter((size)=>{
      return size != value
      }))
    setglassize(glassize)
    
  }
  else{
    glassize.push(value.toString())
    setglassize(glassize)
    console.log(glassize)

  }
}
const handleglassthick=(value)=>{
  if(glassthick.includes(value)){
    glassthick=(glassthick.filter((size)=>{
      return size != value
      }))
    setglassthick(glassthick)
    
  }
  else{
    glassthick.push(value.toString())
    setglassthick(glassthick)
    console.log(glassthick)

  }
}
const handlehardwarematerial=(value)=>{
  sethardwarematerial(value)
  console.log(value)
}
const handlesanitarymaterial=(value)=>{
  setsanitarymaterial(value)
  console.log(value)
}
 
  const fetchbrands=async()=>{
    let city=localStorage.getItem("city")
    
    console.log(`city${city}`)
    if(city==null){
      city='Pan India'
    }
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
        name+ '/'+city
    );
    const data= await response.json();
    data.forEach(myFunction)
    function myFunction(item) {
      brandsarray.push(item.brand_name)
      let unique=[...new Set(brandsarray)]
      setbrands(unique)
      
    }
  }

  const handleapply=()=>{
    setapply(value => value+1)
    console.log(apply)
  }
  const handleremove=()=>{
    window.location.reload();
  }
  
  
  useEffect(() => {
    
    getProduct();
    fetchbrands()

   
  }, [apply,type]);

 


  
  return (
    <div>
      <div className="container-fluid categoryLanding">
        {
          name=='Cement'?
          <Cement handletype={handletype}/>
         :name=='Bricks'?
         <Bricks handletype={handletype}  />
         :name=='Steel'?
         <Steel handletype={handletype}/>
         :name=='Aggregates'?
         <Aggregates handletype={handletype}/>
         :name=='Modular'?
         <ReadyMixConcrete handletype={handletype}/>//no page for rmx so swapped modular with it
         :name=='wood'?
         <Wood handletype={handletype}/>
         :name=='Glass'?
         <Glass handletype={handletype}/>
         :name=='Pipes_&_Fittings'?
         <Pipes handletype={handletype}/>
         :name=='Sanitaryware'?
         <Sanitaryware handletype={handletype}/>
         :name=='Electricals'?
         <Electrical handletype={handletype}/>
         :name=='Chemicals'?
         <ConstructionChemicals handletype={handletype}/>
         :name=='Paints_&_Finishes'?<Paints handletype={handletype}/>
         :name=='Hardware'?<BuildingHardware  handletype={handletype}/>
         :name=='Roofing'?<Roofing handletype={handletype}/>
         :name=='Flooring_&_wall'?<Flooring handletype={handletype}/>
         :name=='Doors_&_Windows'?<Doors handletype={handletype}/>
         :null
        }
      
        <div className="categoryBody">
          {
            name=='Hardware'? <CementFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handlehardwarematerial={handlehardwarematerial} filterbrands={filterbrands}/>
            :name=='Bricks'?<BricksFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handlebricksize={handlebricksize} filterbrands={filterbrands} bricksizes={bricksize}/>
            :name=='Steel'?<SteelFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Aggregates'?<AggregatesFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Modular'?<ReadyMixConcreteFilter />
            :name=='wood'?<WoodFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Glass'?<GlassFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handleglassize={handleglassize} handleglassthick={handleglassthick} filterbrands={filterbrands} glassizes={glassize} glassthicks={glassthick} />
            :name=='Pipes_&_Fittings'?<PipesFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handlepipesize={handlepipesize} filterbrands={filterbrands} pipesizes={pipesize}/>
            :name=='Sanitaryware'?<SanitarywareFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handlesanitarymaterial={handlesanitarymaterial} filterbrands={filterbrands}/>
            :name=='Electricals'?<ElectricalFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Chemicals'?<ConstructionChemicalsFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Paints_&_Finishes'?<PaintsFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Cement'?<BuildingHardwareFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=="Roofing"?<RoofingFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :name=='Flooring_&_wall'?<FlooringFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} handlefloorsize={handlefloorsize} filterbrands={filterbrands} floorsizes={floorsize}/>
            :name=='Doors_&_Windows'?<DoorsFilter handlemin={handlemin} handlemax={handlemax}  brands={brands?brands:'none'} handlebrands={handlebrands} handleapply={handleapply} handleremove={handleremove} check={apply} filterbrands={filterbrands}/>
            :null
          }
        
          <div className="bodyRight">
            <div className="bodyRightHeading">
              <p>Options in {name} </p>
              <div className="sortOption">
                <p>Sort By</p>
                 {/* <select class="form-select" } >
                  <option  value='high' name='high' >High to Low</option>
                  <option value="low" name='low' >Low to High</option>
                  </select> */}
                  {/* <option value="2">Bottom to Top</option>
                  <option value="3">Popular</option>}
        </select> */}
        <select class="form-select" onChange={handleorder} >
        {/* <select class="form-select" > */}
                  <option  value='high' name='high' >High to Low</option>
                  <option value="low" name='low' >Low to High</option>
                  </select>
                {/* <button onClick={handlelow}>
                  High to low
                </button>
                <button onClick={handlehigh}>
                  low to high
                </button> */}
    
              </div>
              

            </div>
            {/* <div>
              <Cat name={name} />
              </div> */}
              <div class="gallery"> 
              {
                <Cat product={product} handleapply={handleapply} />

               
              
              }
              
              
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CategoriesLanding;
