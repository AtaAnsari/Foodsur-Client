import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import axios from 'axios'

const useStyle = makeStyles(theme => {

})

const UserFavourites = () => {

  const getUserFavourites = () => {
    axios.get('/api/user-data/user-favourites')
      .then(res => console.log(res.data))
  }

  useEffect(() => getUserFavourites(), [])

  return (
    <Container>
      <h1> Hello</ h1>

    </Container>
  )
}

export default UserFavourites
