import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Divider, CardContent, Typography, Button, Box, IconButton } from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useCookies } from 'react-cookie';
import axios from 'axios'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  largeIcon: {
    width: "150px",
    height: "150px",
    color: theme.palette.error.main
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  buttonStyle: {
    margin: "10px"
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px"
  },
  productName: {
    textTransform: 'capitalize'
  }
}));

const SummaryCardAvoid = (props) => {


  const [cookies] = useCookies(['session']);
  const [favourite, setFavourite] = useState(false)
  const history = useHistory();

  const addFavourite = () => {
    const { product } = props
    console.log(' product', product);
    const { dietTags, healthTags } = product
    const productTags = dietTags.concat(healthTags)

    setFavourite(true)

    const productDetails = {
      productName: props.productName,
      api_id: props.productId,
      productTags,
      userId: cookies.session
    }

    axios.post('/api/user-data/add-favourites', productDetails)

    console.log("PRODUCT DETAILS", productDetails)
  }

  const removeFavourite = () => {
    const userId = { id: cookies.session }

    axios.delete('/api/user-data/remove-favourites', {
      params: userId
    })
      .then(res => setFavourite(false))
  }

  const classes = useStyles();
  return (
    <div>
      <Card>
        <div style={{ display: "flex" }}>
          <div className={classes.backButton}>
            <IconButton onClick={history.goBack}>
              <ArrowBackIcon />
            </IconButton>
          </div>
          <CardHeader
            className={classes.productName}
            title={props.productName.toLowerCase()}
            titleTypographyProps={{ variant: 'h4' }}
          >
          </CardHeader>

        </div>
        <Divider />
        {props.hasHealthRestriction ?
          <CardContent>
            <div className={classes.iconContainer}>
              <NotInterestedIcon className={classes.largeIcon} />
              <Typography variant="h3">
                Health Restriction Detected
        </Typography>
            </div>
          </CardContent> :
          <CardContent>
            <div className={classes.iconContainer}>
              <ErrorOutlineIcon className={classes.largeIcon} style={{ color: "#FFE01B" }} />
              <Typography variant="h3">
                Doesn't Match Diet Preferences
        </Typography>
            </div>
          </CardContent>}

      </Card>
      <Card>
        {
          !props.hasHealthRestriction ?
            <Box display="flex" justifyContent="center">
              {
                favourite ?
                  <Button variant='contained'
                    color='secondary'
                    className={classes.buttonStyle}
                    onClick={removeFavourite}
                  >
                    Remove From Favourites
        </Button> :
                  <Button variant='contained'
                    color='primary'
                    className={classes.buttonStyle}
                    onClick={addFavourite}
                  >
                    Add to Favourites
        </Button>

              }
            </Box> :
            <div></div>
        }
        {props.divergent}
        {props.shared}
      </Card>
    </div>
  )
}

export default SummaryCardAvoid
