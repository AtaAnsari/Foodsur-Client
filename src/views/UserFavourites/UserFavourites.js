import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import { ProductExpander } from './components'
import axios from 'axios'
import useLoginValidation from 'hooks/useLoginValidation';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(() => ({

  root: {
    backgroundColor: 'white',
    height: '100vh'
  },
  list: {
    textTransform: 'capitalize'
  },
  subHeading: {
    paddingTop: '17px',
    fontStyle: 'italic',
    paddingBottom: '13px',
    fontSize: '18px',
    color: 'grey'
  }
}));

const UserFavourites = () => {
  const classes = useStyles()
  const [cookies] = useCookies(['session']);

  const [favourites, setFavourites] = useState('')

  useLoginValidation();

  const userId = {
    id: cookies.session
  }

  const getUserFavourites = async() => {
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
    const newFavourites = [...favourites.slice(0, index), ...favourites.slice(index + 1)];
    setFavourites(newFavourites);
  }

  return (
    <Container className={classes.root}>
      <Typography
        align="center"
        style={{ paddingTop: '20px' }}
        variant="h1"
      >Favorite Items
      </Typography>
      <div className={classes.list}>
        {favourites && favourites.length < 1 &&
          <Typography className={classes.subHeading}>
            You dont currently have any favourites
          </Typography>
        }
        {favourites && favourites.length >= 1 &&
          favourites.map((favourite, index) => (
            <ProductExpander
              apiId={favourite.apiId}
              favourite={favourite.productName}
              index={index}
              key={index}
              macros={favourite.macros}
              updateFavouriteState={updateFavouriteState}
            />
          ))}
      </div>
    </Container >
  )
}

export default UserFavourites
