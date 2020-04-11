import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const dietaryPreferences = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="h3"
      >
        Please choose any dietary preferences that apply to you:
      </Typography>
    </div>
  )
}

export default dietaryPreferences;
