import React, { useState } from 'react';
import ReactDOM from "react-dom";
// import { makeStyles } from '@material-ui/styles';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchInput } from '../../components'
import ScanViewport from "./components"


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  searchButtonContainer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchInput placeholder="Search for a food item"/>
      <Box className={classes.searchButtonContainer}>
        <Button
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </Box>
    </div>
  )
}

export default Home;
