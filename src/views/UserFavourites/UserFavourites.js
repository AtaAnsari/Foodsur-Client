import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { UserFavouritesCard } from './components'
import axios from 'axios'
import useLoginValidation from 'hooks/useLoginValidation';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => {
  root: {
    padding: theme.spacing(4)
  }
})

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
  console.log(favourites)

  return (
    <Container className={classes.root}>
      <Typography align='center' variant='h2'>Favorited Items</Typography>
      {
        favourites.map(favourite => (
          <UserFavouritesCard favourite={favourite} />
        ))}
    </Container >
  )
}

export default UserFavourites
