import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SearchInput } from '../../components'
import {ScanViewport} from './components'


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
  const [searchTerm, setSearchTerm] = useState('')

  const classes = useStyles();
  const history = useHistory();

  const handleSearch = () => {
    history.push({
      pathname:'/search-results',
      state: { message: 'hi' }
    })
  }

  return (
    <div className={classes.root}>
      <SearchInput
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a food item"
        value={searchTerm}
      />
      <Box className={classes.searchButtonContainer}>
        <Button
          color="primary"
          onClick={handleSearch}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <ScanViewport />
    </div>
  )
}

export default Home;
