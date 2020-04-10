import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Hello</Typography>
    </div>
  )
}

export default Home;
