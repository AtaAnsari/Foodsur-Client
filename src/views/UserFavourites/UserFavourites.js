import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { UserFavouritesTable } from './components'
import axios from 'axios'

const useStyles = makeStyles(theme => {
  root: {
    padding: theme.spacing(4)
  }
})

const UserFavourites = () => {

  const classes = useStyles()

  const [favourites, setFavourites] = useState([])

  async function getUserFavourites() {
    const userData = await axios.get('/api/user-data/user-favourites')
    return userData
  }

  useEffect(() => {
    getUserFavourites()
      .then(product => setFavourites(product.data))
  }
    , [])

  return (
    <Container className={classes.root}>
      <Typography align='center' variant='h2'>Favorited Items</Typography>
      <UserFavouritesTable favourites={favourites} />
    </Container >
  )
}

export default UserFavourites
