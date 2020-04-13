import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { SearchResultsTable } from './components'
import { getSearchResults } from 'helpers/getSearchResults'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


const SearchResults = props => {
  const [results, setResults] = useState('');

  const classes = useStyles();

  const { searchTerm } = props.location.state;

  // Fetch the search results and set as state
  useEffect(() => {
    getSearchResults(searchTerm)
      .then(newResults => setResults(newResults));
  }, []);

  return (
    <div className={classes.root}>
      {results &&
      <SearchResultsTable searchResults={results} />}
    </div>
  )
}

export default SearchResults;
