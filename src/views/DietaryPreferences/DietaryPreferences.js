import React, { useState } from 'react';
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

const DietaryPreferences = () => {
  const classes = useStyles();

  const [selectedPreferences, setSelectedPreferences] = useState([]);
  
  const handleSelect = id => {
    const selectedIndex = selectedPreferences.indexOf(id);
    let newSelectedPreferences = [];

    if (selectedIndex === -1) {
      newSelectedPreferences = [...selectedPreferences, id];
    } else {
      newSelectedPreferences = [...selectedPreferences.slice(0, selectedIndex), ...selectedPreferences.slice(selectedIndex + 1)];
    }

    setSelectedPreferences(newSelectedPreferences);
  }

  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="h3"
      >
        Please choose any dietary preferences that apply to you:
      </Typography>
      <div className={classes.content}>
        <DietaryPreferencesTable
          handleSelect={handleSelect}
          selectedPreferences={selectedPreferences}
        />
      </div>
      <Box className={classes.buttonBox}>
        <Button
          color="primary"
          onClick={() => console.log(selectedPreferences)}
          size="large"
          variant="contained"
        >
          Confirm
        </Button>
      </Box>
    </div>
  )
}

export default DietaryPreferences;
