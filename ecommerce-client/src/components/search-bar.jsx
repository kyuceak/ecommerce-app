import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// import SearchIcon from "mui/icons-material/Search";
import Search from "../assets/search.svg?react";

function SearchBar() {
  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Search your drip!"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search className="search-icon"/>
            </InputAdornment>
          ),
        }}
        sx={{
          width: "40%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
          },
        }}
      />
    </>
  );
}

export default SearchBar;
