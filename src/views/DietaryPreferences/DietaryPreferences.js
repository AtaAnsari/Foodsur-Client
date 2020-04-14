import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DietaryPreferencesTable } from './components'
import getDietaryPreferences from 'helpers/getDietaryPreferences'
import axios from 'axios'


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
  const history = useHistory()

  const [preferences, setPreferences] = useState('');
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  // Fetch dietary preferences from database and set to state
  useEffect(() => {
    getDietaryPreferences()
      .then(newPreferences => setPreferences(newPreferences.data));
  }, []);

  // Sets the current selected preferences to state
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

  const storePreferences = () => {
    const userPreferences = { selectedPreferences }
    axios.post('http://localhost:8080/api/user-data/user-preferences', userPreferences)
      .then(res => {
        if (res.data === 'Success') {
          history.push('/home')
        }
      })
  }

  return (
    <div className={classes.root}>
      {preferences &&
        <>
          <Typography
            align="center"
            variant="h3"
          >
            Please choose any dietary preferences that apply to you:
          </Typography>
          <div className={classes.content}>
            <DietaryPreferencesTable
              handleSelect={handleSelect}
              preferences={preferences}
              selectedPreferences={selectedPreferences}
            />
          </div>
          <Box className={classes.buttonBox}>
            <Button
              color="primary"
              onClick={storePreferences}
              size="large"
              variant="contained"
            >
              Confirm
            </Button>
          </Box>
        </>}
    </div>
  )
}

export default DietaryPreferences;
