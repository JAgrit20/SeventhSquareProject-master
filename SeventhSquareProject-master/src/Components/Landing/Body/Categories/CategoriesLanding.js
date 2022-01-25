import React, { useEffect, useState, useCallback } from "react";
import "./Categories.css";
import Cat from "./Cat";
import { useParams,useLocation } from "react-router-dom";
import Hardware from "./SubCategories/Hardware";

import Bricks from "./SubCategories/Bricks";
import BricksFilter from "./SubCategories/BricksFilter";
import Steel from "./SubCategories/Steel";
import ReadyMixConcrete from "./SubCategories/ReadymixConrete";
import SteelFilter from "./SubCategories/SteelFilter";
import Aggregates from "./SubCategories/Aggregates";
import ReadyMixConcreteFilter from "./SubCategories/ReadyMixConcreteFilter";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

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
import HVAC from "./SubCategories/HVAC"; 
import HVACFilter from "./SubCategories/HVACFilter"; 
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

function CategoriesLanding(props) {
  const location = useLocation();



  let typ=location.state;
  console.log("typ")
  console.log(typ)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  //
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <GlassFilter />

      <Divider />
    </Box>
  );

  const { name } = useParams();
  let [product, setProduct] = useState([]);
  const [order, setorder] = useState("");
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(1000000000);
  const [brands, setbrands] = useState([]);
  let [filterbrands, setfilterBrands] = useState([]);
  const [apply, setapply] = useState(0);
  const [type, settype] = useState("");
  const [city, setcity] = useState();
  const [hardwarematerial, sethardwarematerial] = useState("");
  const [showf, setshowf] = useState(true);
  const [sanitarymaterial, setsanitarymaterial] = useState("");
  const [glassize, setglassize] = useState(0);
  const [glassthick, setglassthick] = useState(0);
  const [bricksize, setbricksize] = useState(0);
  const [pipesize, setpipesize] = useState(0);
  const [floorsize, setfloorsize] = useState(0);
  let brandsarray = [];
  let j = 0;
  let final = [];
  const getProduct = async () => {
    let city = localStorage.getItem("city");

    console.log(`city${city}`);
    if (city == null) {
      city = "Pan India";
    }

    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
        name +
        "/" + 
        city

    );
   console.log(      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
   name +
   "/" +
   city)
    console.log(response);
    console.log( "/inventory_detail_by_category/");
    const data = await response.json();
    console.log(data);
    data.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setProduct(data);

    if (order == "") {
      product = data;

      console.log(product);
      if (min != 0 && max != 1000000000 && apply != 0) {
        product = product.filter((product) => {
          return (
            parseInt(product.sellingPrice) > min &&
            parseInt(product.sellingPrice) < max
          );
        });
      }

      if (filterbrands.length > 0 && apply != 0) {
        product = product.filter((product) => {
          return filterbrands.includes(product.brand_name);
        });

      }
      if (type === "" && typ !== "" ) {
        product = product.filter((products) => {
           return products.subCategory.includes( typ); 
        })
      }  
      console.log("type")
      console.log(type)
      if (type !== "") {
        product = product.filter((products) => {
          return products.subCategory.includes( type); 
        });
      }


      if(type === "" && typ === undefined){
        return product
      }


      if (bricksize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == bricksize;
        });
      }
      if (glassize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassize;
        });
      }
      if (pipesize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == pipesize;
        });
      }
      if (floorsize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == floorsize;
        });
      }
      if (glassthick != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassthick;
        });
      }
      if (hardwarematerial != "" && apply != 0) {
        product = product.filter((products) => {
          return products.material == hardwarematerial;
        });
      }

      setProduct(product);
    }
    if (order == "neutral") {
      product = data;

      console.log(product);
      // product.sort(function (a, b) {
      //   return a.name.localeCompare(b.name);
      // });

      product.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }
    if (order == "low") {
      product = data;

      console.log(product);
      if (min != 0 && max != 1000000000 && apply != 0) {
        product = product.filter((product) => {
          return (
            parseInt(product.sellingPrice) > min &&
            parseInt(product.sellingPrice) < max
          );
        });
      }

      if (filterbrands != "" && apply != 0) {
        product = product.filter((product) => {
          return product.brand_name == filterbrands;
        });
      }
     
      if (type === "" && typ !== undefined ) {
        product = product.filter((products) => {
          console.log("go1")
           return products.subCategory.includes( typ); 
        })
      }  
      console.log("type")
      console.log(type)
      if (type !== "") {
        product = product.filter((products) => {
          console.log("go3")
          return products.subCategory.includes( type);
        });
      }


      if(type === "" && typ === undefined){
        console.log("go2") 
        return product.sort((a, b) => a.sellingPrice - b.sellingPrice)
      }


      if (bricksize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == bricksize;
        });
      }
      if (glassize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassize;
        });
      }
      if (pipesize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == pipesize;
        });
      }
      if (floorsize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == floorsize;
        });
      }
      if (glassthick != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassthick;
        });
      }
      if (hardwarematerial != "" && apply != 0) {
        product = product.filter((products) => {
          return products.material == hardwarematerial;
        });
      }
      product.sort(function (a, b) {
        var textA = a.sellingPrice;
        var textB = b.sellingPrice;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setProduct(product.sort((a, b) => a.sellingPrice - b.sellingPrice));
    }

    if (order == "high") {

      product = data;

      console.log(product);
      if (min != 0 && max != 1000000000 && apply != 0) {
        product = product.filter((product) => {
          return (
            parseInt(product.sellingPrice) > min &&
            parseInt(product.sellingPrice) < max
          );
        });
      }

      if (filterbrands != "" && apply != 0) {
        product = product.filter((product) => {
          return product.brand_name == filterbrands;
        });
      }


      if (bricksize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == bricksize;
        });
      }
      if (glassize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassize;
        });
      }
      if (pipesize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == pipesize;
        });
      }
      if (floorsize != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == floorsize;
        });
      }
      if (glassthick != 0 && apply != 0) {
        product = product.filter((products) => {
          return products.length == glassthick;
        });
      }
      if (hardwarematerial != "" && apply != 0) {
        product = product.filter((products) => {
          return products.material == hardwarematerial;
        });
      }

      if (type === "" && typ !== undefined) {
        product = product.filter((products) => {
           return products.subCategory.includes( typ); 
        })
      }  
      console.log("type")
      console.log(type)
      if (type !== "") {
        product = product.filter((products) => {
          return products.subCategory.includes( type); 
        });
      }


      if(type === "" && typ === undefined){
        return product.sort((a, b) => b.sellingPrice - a.sellingPrice)
      }

      product.sort(function (a, b) { 
        var textA = a.sellingPrice;
        var textB = b.sellingPrice;
        return textA > textB ? 1 : textA < textB ? -1 : 0;
      });

      setProduct(product.sort((a, b) => b.sellingPrice - a.sellingPrice));
    }
  };

  const handlelow = () => {
    setorder("high");

    console.log(order);
  };
  const handlehigh = () => {
    setorder("low");
    console.log(order);
  };
  const handlemin = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setmin(value);
    console.log(min);
  };
  const handlemax = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setmax(value);
    console.log(max);
  };

  const handlebrands = (value) => {
    if (filterbrands.includes(value)) {
      filterbrands = filterbrands.filter((filterbrand) => {
        return filterbrand != value;
      });
      setfilterBrands(filterbrands);
    } else {
      filterbrands.push(value.toString());
      setfilterBrands(filterbrands);
      console.log(filterbrands);
    }
  };

  const handletype = (value) => {
    settype(value);
    console.log(value);
  };

  const handlebricksize = (value) => {
    setbricksize(value);
    console.log(value);
  };
  const handlepipesize = (value) => {
    setpipesize(value);
    console.log(value);
  };
  const handlefloorsize = (value) => {
    setfloorsize(value);
    console.log(value);
  };
  const handleglassize = (value) => {
    setglassize(value);
    console.log(value);
  };
  const handleglassthick = (value) => {
    setglassthick(value);
    console.log(value);
  };
  const handlehardwarematerial = (value) => {
    sethardwarematerial(value);
    console.log(value);
  };
  const handlesanitarymaterial = (value) => {
    setsanitarymaterial(value);
    console.log(value);
  };

  const fetchbrands = async () => {
    let city = localStorage.getItem("city");

    console.log(`city${city}`);
    if (city == null) {
      city = "Pan India";
    }
    const response = await fetch(
      "https://seller.seventhsq.com/inventory/api/inventory_detail_by_category/" +
        name +
        "/" +
        city
    );
    const data = await response.json();
    data.forEach(myFunction);
    function myFunction(item) {
      brandsarray.push(item.brand_name);
      let unique = [...new Set(brandsarray)];
      setbrands(unique);
    }
  };

  const toggle = () => {
    console.log(showf);
    setshowf((showf) => !showf);
  };

  const handleorder = (value) => {
    if (value.target.value == "high") {
      setorder("high");
      setapply((value) => value + 1);
    } else if (value.target.value == "neutral") {
      setorder("neutral");
      setapply((value) => value + 1);
    } else {
      setorder("low");
      setapply((value) => value + 1);
    }

    console.log(order);
  };

  const handleapply = () => {
    setapply((value) => value + 1);
    console.log(apply);
  };
  const handleremove = () => {
    window.location.reload();
  };
  console.log(product) 
  useEffect(() => {
    getProduct();
    fetchbrands();
  }, [apply, type]);

  return (
    <div>
      <div className="container-fluid categoryLanding">
        
        {name  == "Cement" ? (
          <Cement handletype={handletype}  />
        ): name  == "HVAC" ? (
          <HVAC handletype={handletype} />
        ) :name == "Bricks" ? (
          <Bricks handletype={handletype} />
        ) : name == "Steel" ? (
          <Steel handletype={handletype} />
        ) : name == "Aggregates" ? (
          <Aggregates handletype={handletype} />
        ) : name == "Modular" ? (
          <ReadyMixConcrete handletype={handletype} /> //no page for rmx so swapped modular with it
        ) : name == "Boards_&_Sheets" ? (
          <Wood handletype={handletype} />
        ) : name == "Glass" ? (
          <Glass handletype={handletype} />
        ) : name == "Pipes_&_Fittings" ? (
          <Pipes handletype={handletype} />
        ) : name == "Sanitaryware" ? (
          <Sanitaryware handletype={handletype} />
        ) : name == "Electricals" ? (
          <Electrical handletype={handletype} />
        ) : name == "Chemicals" ? (
          <ConstructionChemicals handletype={handletype} />
        ) : name == "Paints_&_Finishes" ? (
          <Paints handletype={handletype} />
        ) : name == "Hardware" ? (
          <BuildingHardware handletype={handletype} />
        ) : name == "Roofing" ? (
          <Roofing handletype={handletype} />
        ) : name == "Flooring_&_wall" ? (
          <Flooring handletype={handletype} />
        ) : name == "Doors_&_Windows" ? (
          <Doors handletype={handletype} />
        ) : null}

        <div className="categoryBody">
          {name && showf == "Hardware" ? (
            <CementFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handlehardwarematerial={handlehardwarematerial}
              filterbrands={filterbrands}
            />
          ) : name == "Bricks" && showf ? (
            <BricksFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handlebricksize={handlebricksize}
              filterbrands={filterbrands}
            />
          ) : name == "Steel" && showf ? (
            <SteelFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Aggregates" && showf? (
            <AggregatesFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Modular" && showf ? (
            <ReadyMixConcreteFilter />
          ) : name == "Boards_&_Sheets" && showf ? (
            <WoodFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Glass" && showf? (
            <GlassFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handleglassize={handleglassize}
              handleglassthick={handleglassthick}
              filterbrands={filterbrands}
            />
          ) : name == "Pipes_&_Fittings" && showf? (
            <PipesFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handlepipesize={handlepipesize}
              filterbrands={filterbrands}
            />
          ) : name == "Sanitaryware" && showf ? (
            <SanitarywareFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handlesanitarymaterial={handlesanitarymaterial}
              filterbrands={filterbrands}
            />
          ) : name == "Electricals" && showf ? (
            <ElectricalFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          )  : name == "HVAC" && showf ? (
            <HVACFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Chemicals" && showf ? (
            <ConstructionChemicalsFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Paints_&_Finishes" && showf ? (
            <PaintsFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Cement" && showf ? (
            <BuildingHardwareFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Roofing" && showf ? (
            <RoofingFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : name == "Flooring_&_wall" && showf ? (
            <FlooringFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              handlefloorsize={handlefloorsize}
              filterbrands={filterbrands}
            />
          ) : name == "Doors_&_Windows" && showf ? (
            <DoorsFilter
              handlemin={handlemin}
              handlemax={handlemax}
              brands={brands ? brands : "none"}
              handlebrands={handlebrands}
              handleapply={handleapply}
              handleremove={handleremove}
              check={apply}
              filterbrands={filterbrands}
            />
          ) : null}

          <div className="bodyRight">
            <div className="bodyRightHeading">
              <p>Options in {name} </p>
              <div className="sortOption">
                <div>
                  <button onClick={toggle}>FILTER</button>
                </div>

                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    marginLeft: "10px",
                    marginRight: "4px",
                    fontFamily: "open sans",
                    clear: "both",
                    display: "inline-block",
                    overflow: "hidden",
                    paddingRight: "45px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sort By
                </span>

                <select
                  id="htl"
                  class="form-select"
                  onChange={handleorder}
                  style={{ fontSize: "15px !important" }}
                >
                  {/* <select class="form-select" > */}
                  <option
                    value="neutral"
                    name="neutral"
                    style={{ fontSize: "15px !important" }}
                  >
                    ----------
                  </option>
                  <option
                    value="high"
                    name="high"
                    style={{ fontSize: "15px !important" }}
                  >
                    High to Low
                  </option>
                  <option
                    value="low"
                    name="low"
                    style={{ fontSize: "15px !important" }}
                  >
                    Low to High
                  </option>
                </select>
              </div>
            </div>
            {/* <div>
              <Cat name={name} />
              </div> */}
            <div class="gallery">
              {<Cat product={product} handleapply={handleapply} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesLanding;
