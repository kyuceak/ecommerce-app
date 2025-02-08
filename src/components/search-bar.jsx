import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../assets/search.svg?react";
import useData from "../hooks/useData.jsx";
import { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/search-bar.css";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBar() {
  const { data: products, loading, error } = useData("https://fakestoreapi.com/products");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchTerm("");
  },[location.pathname])

  useEffect(() => {
    if (!loading && products) {
      if (searchTerm.trim() !== "") {
        const results = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
      } else {
        setFilteredProducts([]);
      }
    }
  }, [searchTerm, products, loading]);

  useEffect(() => {

    const handleClickOutside = (event) => {
        if(containerRef.current && !containerRef.current.contains(event.target)){
            setOpen(false)
        }
        if(containerRef.current && containerRef.current.contains(event.target)){
            setOpen(true)
        }
    }

    containerRef.current.addEventListener("mousedown",handleClickOutside);


    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown",handleClickOutside);
        document.removeEventListener("mousedown",handleClickOutside);
    }

  },[]);

  const handleSearchEnter = (e) => {

    if(e.key === "Enter" && searchTerm.trim() !== "")
    {
    
      navigate("/shop", {state: {filteredProducts}})
      setOpen(false);
    }
  }

  const searchClick = () => {
    navigate("/shop", {state: {filteredProducts}})
    setOpen(false);
  }

  const handleNavigation = (product) => {
    navigate(`/shop/${product.id}`,{ state: {product}});
  }

  return (
    <>
    <div className="search-bar" ref={containerRef}>

    
      <TextField
        variant="outlined"
        placeholder="Search your drip!"
        value={searchTerm}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                <Search className="search-icon"  onClick={searchClick}/>
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          width: "650px",
          "& .MuiOutlinedInput-root": {
            borderRadius: open && searchTerm ? "1rem 1rem 0 0":"1rem",
            backgroundColor: "white"
          },
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setOpen(true);
        }}
        onKeyDown={handleSearchEnter}
      />

      {/* Dropdown */}
      {open && searchTerm && (
        <div className="search-dropdown">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-item"
                onClick={() => {
                    handleNavigation(product)
                    setSearchTerm(product.title)
                    setOpen(false)
                    
                }}
              >
                {product.title}
              </div>
            ))
          ) : (
            <div style={{padding: "0.7rem"}}>No results found.</div>
          )}
        </div>
      )}
      </div>
    </>
  );
}

export default SearchBar;
