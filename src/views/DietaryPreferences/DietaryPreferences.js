import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DietaryPreferencesTable } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(5)
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3)
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
      <div className={classes.content}>
        <DietaryPreferencesTable />
      </div>
      <Box className={classes.buttonBox}>
        <Button
          color="primary"
          size="large"
          variant="contained"
        >
          Confirm
        </Button>
      </Box>
    </div>
  )
}

export default dietaryPreferences;
