import React from 'react';
import { FormControl } from 'react-bootstrap';
import debounce from 'lodash.debounce';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = debounce((event) => {
    setSearchTerm(event.target.value);
  }, 300);

  return (
    <FormControl
      type="text"
      placeholder="Search for users"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
