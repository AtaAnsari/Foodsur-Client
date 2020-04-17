import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.success.main,
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

const PassCard = props => {
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
            <Avatar className={classes.avatar}>
              <DoneIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
)
}
  
export default PassCard
