import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchInput } from '../../components'
import { ScanViewport } from './components'

import useLoginValidation from 'hooks/useLoginValidation';
import { getSearchResults } from 'helpers/getSearchResults';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  searchButtonContainer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  logoWidth: {
    height: "100px",
    width: "262px"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
  },
  searchButton: {
    color: "primary"
  }

}));


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')

  const classes = useStyles();
  const history = useHistory();

  useLoginValidation();

  const validateSearch = () => {
    if (searchTerm) {
      handleSearch();
    } else {
      setError('error');
    }
  }

  const handleSearch = () => {

    history.push('/loading');
    getSearchResults(searchTerm)
      .then(searchResults => {
        history.replace({
          pathname:'/search-results',
          state: { searchResults }
        })
      })
  }

  return (
    <div className={classes.root}>
      <Box className={classes.logoContainer}>
        <img
          className={classes.logoWidth}
          alt="Logo"
          src="/images/logos/foodsur.png"
        />
      </Box>
      <SearchInput
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a food item"
        value={searchTerm}
      />
      {error &&
        <Typography
          color="error"
          variant="h6"
        >
          Please enter a search term
        </Typography>}
      <Box className={classes.searchButtonContainer}>
        <Button
          variant="contained"
          className={classes.searchButton}
          color="primary"
          onClick={validateSearch}
        >
          Search
        </Button>
      </Box>
      <ScanViewport />
    </div>
  )
}

export default Home;
