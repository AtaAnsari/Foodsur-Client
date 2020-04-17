import React from 'react'
import { Card, CardContent, Grid, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

const UserFavouritesCard = props => {
  const classes = useStyles()
  const { favourite } = props

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography className={classes.contentPosition} variant="h5">{favourite.productName}</Typography>
          </Grid>
          <Grid item>
            < IconButton >
              <AddCircleOutlineIcon />
            </IconButton >
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserFavouritesCard

