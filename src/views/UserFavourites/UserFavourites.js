import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { ProductExpander } from './components'
import axios from 'axios'
import useLoginValidation from 'hooks/useLoginValidation';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: "white",
    height: "100vh"
  },
  list: {
    textTransform: 'capitalize'
  }
}));

const UserFavourites = () => {

  const classes = useStyles()
  const [cookies] = useCookies(['session']);
  const [favourites, setFavourites] = useState([])


  useLoginValidation();

  const userId = {
    id: cookies.session
  }

  const getUserFavourites = async () => {
    const userData = await axios.get('/api/user-data/user-favourites', {
      params: userId
    })
    console.log(userData)
    return userData
  }

  // Sets favourites to user favourites (will stop setting of state if not logged in)
  useEffect(() => {
    let loggedIn = true;
    getUserFavourites()
      .then(product => {
        if (loggedIn) {
          setFavourites(product.data);
        }
      });
    return () => loggedIn = false;
  }, [])

  const updateFavouriteState = (index) => {
    const newFavourites = [...favourites.slice(0, index), ...favourites.slice(index + 1)]
    setFavourites(newFavourites)
  }

  return (
    <Container className={classes.root}>
      <Typography style={{ paddingTop: "20px" }} align='center' variant='h1'>Favorite Items</Typography>
      <div className={classes.list}>
        {
          favourites.map((favourite, index) => (
            <ProductExpander key={index} index={index} updateFavouriteState={updateFavouriteState} favourite={favourite.productName} macros={favourite.macros} apiId={favourite.apiId} />
          ))}
      </div>
    </Container >
  )
}

export default UserFavourites
