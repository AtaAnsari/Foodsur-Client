import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SearchResultsTable } from './components'

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
  const history = useHistory();

  const classes = useStyles();

  const { searchResults } = props.location.state;

  return (
    <div className={classes.root}>
      <div className={classes.backArrow}>
        <IconButton onClick={history.goBack}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <SearchResultsTable searchResults={searchResults} />
    </div>
  )
}

export default SearchResults;
