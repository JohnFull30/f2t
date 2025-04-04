import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
    <TextField
      placeholder="Search Farm2Table"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style: { borderRadius: '20px', backgroundColor: '#f5f5f5' },
      }}
      sx={{ width: '100%', maxWidth: '500px' }}
    />
  );
};

export default SearchBar;
