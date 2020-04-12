import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchResultsTable } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(5)
  }
}));


const SearchResults = props => {
  const { searchTerm } = props.location.state;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="h4"
      >
        Please choose the food you would like to see:
      </Typography>
      <div className={classes.content}>
        <SearchResultsTable />
      </div>
    </div>
  )
}

export default SearchResults;
