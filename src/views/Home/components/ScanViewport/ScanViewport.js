import Scanner from '../Scanner/Scanner';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Typography} from '@material-ui/core';
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
    width: '40vw',
    height: '15vh',
    marginTop: '2rem'
  },
  barcode: {
    width: '30vw'
  },
  stop: {
    width: '15vw'
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
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
};

export default ScanViewport;

