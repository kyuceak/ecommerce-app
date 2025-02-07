import { useState,useEffect } from "react";
import(useLocation)
import "../styles/shop-header.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import listSvg from "../assets/list-icon.svg"
import gridSvg from "../assets/grid-icon.svg"
import { useLocation } from "react-router-dom";


function ShopHeader({products,onSortChange}) {
  const [value, setValue] = useState("");

  const location = useLocation();

  // Reset the sort value whenever the URL changes
  useEffect(() => {
    setValue("");
  }, [location.pathname]);

  const handleChange = (event) => {

    const sortType = (event.target.value);
    setValue(sortType);


    let sortedProducts = [...products];

    switch(sortType) {
      case "lowestPrice":
        sortedProducts.sort((a,b) => a.price - b.price);
        break;
      case "highestPrice":
        sortedProducts.sort((a,b) => b.price - a.price);
        break;
      case "highestRating":
        sortedProducts.sort((a,b) => b.rating.rate - a.rating.rate);
        break;
      case "mostRated":
        sortedProducts.sort((a,b) => b.rating.count - a.rating.count);
        break;
      default:
        break;
    }

      
  if(onSortChange){
    onSortChange(sortedProducts)
  }

  };






  return (
    <>
      <div className="shop-header">
        <div className="view">
          <button><img src={listSvg} alt="" /></button>
          <button><img src={gridSvg} alt="" /></button>
        </div>
        <div className="product-sort">
          <FormControl variant="outlined" className="sort-select">
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              onChange={handleChange}
              label="Sort"
            >
              <MenuItem value="lowestPrice">Lowest Price</MenuItem>
              <MenuItem value="highestPrice">Hight Price</MenuItem>
              <MenuItem value="highestRating">Highest Rating</MenuItem>
              <MenuItem value="mostRated">Most Rated</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default ShopHeader;
