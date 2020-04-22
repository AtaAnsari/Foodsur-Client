import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useApiData from 'hooks/useApiData';
import { useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useCookies } from 'react-cookie';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const ProductExpander = (props) => {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [heart, setHeart] = useState(false);
  const { isolateProductData } = useApiData()
  const history = useHistory();
  const [cookies] = useCookies(['session']);


  const handleArrowClick = (productName, apiId) => {
    history.push({
      pathname:'/loading'
    })
    const upcIngredients = {
      "ingredients": [
        {
          "quantity": 1,
          "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "foodId": apiId
        }
      ]
    }

    const product = {
      productName,
      productId: apiId
    }

    isolateProductData(upcIngredients, product)
      .then((productData) => {
        history.replace({
          pathname: '/display-product',
          state: { product: productData }
        })
      });
  }

  const addUserFavourite = () => {

    const productDetails = {
      productName: props.productName,
      userId: cookies.session
    }
    console.log('Prod Details', productDetails)
    axios.post('/api/user-data/add-favourites', productDetails)
  }

  const removeFavourite = () => {
    const userId = {
      userId: cookies.session,
      apiId: props.apiId
    }
    console.log(userId)

    axios.delete('/api/user-data/remove-favourites', {
      params: userId
    })
  }

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {props.rank}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={props.productName}
                secondary={secondary ? 'Secondary text' : null}
                style={{ marginRight: "30px" }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={
                  () => {
                    {
                      if (heart) {
                        setHeart(false)
                        removeFavourite()
                      } else {
                        setHeart(true)
                        addUserFavourite()
                      }
                    }
                  }
                }>
                  {
                    heart ?
                      <FavoriteIcon /> :
                      <FavoriteBorderIcon />
                  }

                </IconButton>
                <IconButton onClick={() => { handleArrowClick(props.productName, props.apiId) }} edge="end" aria-label="delete">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </div>
  )
}

export default ProductExpander
