import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Divider, CardContent, Typography, Button, Box, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';


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
    margin: "10px",
    "&:hover": {
      backgroundColor: "#5f981a"
    }
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px"
  }

}));

const SummaryCardPass = (props) => {

const [cookies] = useCookies(['session']);
const history = useHistory();

const addFavourite = () => {
    const { product } = props
    const { dietTags, healthTags } = product
    const productTags = dietTags.concat(healthTags)

const productDetails = {
      productName: props.productName,
      api_id: props.productId,
      productTags,
      userId: cookies.session
    }

    axios.post('/api/user-data/add-favourites', productDetails)

    console.log("PRODUCT DETAILS", productDetails)
  }
  const handleBack = function() {
    history.push("/home");
  };
  const classes = useStyles();
  return (
    <div>
      <Card>
        <div style={{display:"flex"}}>
        <div className={classes.backButton}>
        <IconButton onClick={handleBack}>
        <ArrowBackIcon />
        </IconButton>
        </div>
        <CardHeader
          title={props.productName}
        >
        </CardHeader>
        
        </div>
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
