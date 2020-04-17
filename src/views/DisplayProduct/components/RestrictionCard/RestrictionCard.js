import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';





const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 25,
    width: 25,
    marginTop: "10px"
  },
  card: {
    padding: "5px",
    margin: "5px"
  },
  contentPosition: {
    paddingTop: "15px"
  },
  content: {
    paddingTop: "5px",
    paddingBottom: "5px",

  }
}));

const RestrictionCard = props => {
const {tag, tagType, cardColour} = props
  const classes = useStyles();
return (
  <Card className={classes.card} style={{backgroundColor: cardColour}}>
      <CardContent className={classes.content}>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography className={classes.contentPosition} variant="h5">{tag}</Typography>
            <Typography component="div">
              <Box fontStyle="italic">
                {tagType}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
          {
            cardColour==="#FEFBE7"? <Avatar className={classes.avatar} style={{backgroundColor: "#FFE01B"}}>
              <PriorityHighIcon />
            </Avatar> :
            <Avatar className={classes.avatar}>
              <ClearIcon className={classes.icon} />
            </Avatar> 
          }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
)

}
  
export default RestrictionCard
