import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DietaryPreferencesTable } from './components'

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
      <DietaryPreferencesTable />
    </div>
  )
}

export default dietaryPreferences;
