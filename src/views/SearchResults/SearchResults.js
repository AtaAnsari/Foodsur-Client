import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchResultsTable } from './components'
import { getSearchResults } from 'helpers/getSearchResults'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(5)
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
      <Typography
        align="center"
        variant="h4"
      >
        Please choose the food item you would like to see:
      </Typography>
      <div className={classes.content}>
        {results &&
        <SearchResultsTable searchResults={results} />}
      </div>
    </div>
  )
}

export default SearchResults;
