import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

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
const {tag} = props
  const classes = useStyles();
return (
  <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography className={classes.contentPosition} variant="h5">{tag}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ClearIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
)

}
  
export default RestrictionCard
