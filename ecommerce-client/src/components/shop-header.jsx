import { useState } from "react";
import "../styles/shop-header.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import listSvg from "../assets/list-icon.svg"
import gridSvg from "../assets/grid-icon.svg"


function ShopHeader() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
              <MenuItem value="chocolate">Lowest Price</MenuItem>
              <MenuItem value="strawberry">Hight Price</MenuItem>
              <MenuItem value="vanilla">Highest Rating</MenuItem>
              <MenuItem value="vanilla">Most Rated</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export default ShopHeader;
