import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Divider, CardContent, Typography, Button, Box } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  largeIcon: {
    width: "150px",
    height: "150px",
    color: theme.palette.success.main
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  buttonStyle: {
    margin: "10px"
  }

}));

const SummaryCardPass = (props) => {

  const addFavourite = () => {
    const { product } = props
    const { dietTags, healthTags } = product
    const productTags = dietTags.concat(healthTags)

    const productDetails = {
      productName: props.productName,
      api_id: props.productId,
      productTags
    }

    axios.post('/api/user-data/add-favourites', productDetails)

    console.log("PRODUCT DETAILS", productDetails)
  }
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader
          title={props.productName}
        />
        <Divider />
        <CardContent>
          <div className={classes.iconContainer}>
            <CheckCircleOutlineIcon className={classes.largeIcon} />
            <Typography variant="h3">
              Good to Go!
        </Typography>
          </div>
        </CardContent>
      </Card>
      <Card>
        <Box display="flex" justifyContent="center">
          <Button variant='contained'
            color='primary'
            className={classes.buttonStyle}
            onClick={addFavourite}
          >
            Add to Favourites
        </Button>
        </Box>
        {props.divergent}
        {props.shared}
      </Card>
    </div>
  )
}

export default SummaryCardPass
