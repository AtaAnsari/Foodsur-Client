import Scanner from '../Scanner/Scanner';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../Scanner/styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  scanButton: {
    padding:'0',
    width: '300px',
    height: '200px'
  },
  barcode: {
    width: '250px'
  },
  stop: {
    width: '100px'
  },
  scannerContainer: {
    position: 'relative'
  }
}));


const ScanViewport = () => {
  const classes = useStyles();

  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div>
      <p>{result ? result : 'Scanning...'}</p>

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
      <div className={classes.scannerContainer}>
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
};

export default ScanViewport;

