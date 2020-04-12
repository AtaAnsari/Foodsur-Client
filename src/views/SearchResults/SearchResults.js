import React from 'react';

const SearchResults = props => {
  const { searchTerm } = props.location.state
  return (
    <div>{searchTerm}</div>
  )
}

export default SearchResults;
