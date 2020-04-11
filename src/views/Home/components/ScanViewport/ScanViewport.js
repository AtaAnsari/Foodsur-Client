import Scanner from '../Scanner/Scanner';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../Scanner/styles.css';
import {useApiData} from './useApiData'
import axios from "axios"


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  scanButton: {
    padding:'0',
    width: '150px',
    height: '100px',
    marginTop: '50px',
    marginBottom: '50px'
  },
  barcode: {
    width: '125px'
  },
  stop: {
    width: '50px'
  }
}));


const ScanViewport = () => {
  const classes = useStyles();
  const {FetchApiData} = useApiData();
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  

  const onDetected = result => {
    setResult(result);
    FetchApiData(result);
  };

  

  return (
    <div>
      <Typography variant="body1">
        {result}
      </Typography>
      <Box display="flex" justifyContent="center">
      <Button
        className={classes.scanButton}
        color="primary"
        onClick={() => setCamera(!camera)}
        size="large"
        variant="contained"
      >
        {camera ?
          <img
            alt="STOP"
            className= {classes.stop}
            src="/images/logos/stop.png"
          /> :
          <img
            alt="Logo"
            className= {classes.barcode}
            src="/images/logos/barcode.png"
          />}
      </Button>
      </Box>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
};

export default ScanViewport;

