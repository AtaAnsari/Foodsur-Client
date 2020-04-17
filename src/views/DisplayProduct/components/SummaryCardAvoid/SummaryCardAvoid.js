import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Card, CardHeader, Divider, CardContent, Typography, Button} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
  }

}));

const SummaryCardAvoid = (props) => {

  const classes = useStyles();
  return(
  <div>
    <Card>
      <CardHeader
        title={props.productName}
      />
      <Divider />
      {props.hasHealthRestriction ?
        <CardContent>
        <div className={classes.iconContainer}>
        <NotInterestedIcon className={classes.largeIcon}/>
        <Typography variant="h3">
          Health Restriction Detected
        </Typography>
        </div>
      </CardContent> :
        <CardContent>
        <div className={classes.iconContainer}>
        <ErrorOutlineIcon className={classes.largeIcon} style={{color: "#FFE01B"}}/>
        <Typography variant="h3">
         Doesn't Match Diet Preferences
        </Typography>
        </div>
      </CardContent>}
      
    </Card>
    <Card>
      {props.divergent}
      {props.shared}
    </Card>
  </div>  
  )
}

export default SummaryCardAvoid
