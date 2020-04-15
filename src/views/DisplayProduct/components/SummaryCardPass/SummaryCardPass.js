import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Card, CardHeader, Divider, CardContent, Typography, Button, Box} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';



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

  const classes = useStyles();
  return(
  <div>
    <Card>
      <CardHeader
        title={props.productName}
      />
      <Divider />
      <CardContent>
        <div className={classes.iconContainer}>
        <CheckCircleOutlineIcon className={classes.largeIcon}/>
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
