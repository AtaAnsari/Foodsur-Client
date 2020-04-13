import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SearchResultsTable } from './components'

import { getSearchResults } from 'helpers/getSearchResults'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2)
  },
  backArrow: {
    paddingBottom: theme.spacing(2)
  }
}));


const SearchResults = props => {
  const [results, setResults] = useState('');
  
  const history = useHistory();

  const classes = useStyles();

  const { searchTerm } = props.location.state;

  // Fetch the search results and set as state
  useEffect(() => {
    getSearchResults(searchTerm)
      .then(newResults => setResults(newResults));
  }, []);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <div className={classes.backArrow}>
        <IconButton onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      {results &&
      <SearchResultsTable searchResults={results} />}
    </div>
  )
}

export default SearchResults;
