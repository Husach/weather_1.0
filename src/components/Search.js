import React from 'react';
import TextField from 'material-ui/TextField';

const Search = ({onSearch, value}) => {
  return (
    <div className="search">
      <TextField
        className="search__input"
        hintText="Enter city"
        value={value}
        onChange={onSearch.bind(this)}
      />
    </div>
  );
};

export default Search;
