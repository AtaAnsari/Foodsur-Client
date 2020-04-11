import Scanner from '../Scanner/Scanner';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import "../Scanner/styles.css";
import BlockIcon from '@material-ui/icons/Block';


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
    <div className="App">
      <p>{result ? result : "Scanning..."}</p>

      <Button
          onClick={() => setCamera(!camera)}
          color="primary"
          variant="contained"
          size="large"
          className={classes.scanButton}
        >
          {camera ? <img
            className= {classes.stop}
            alt="STOP"
            src="/images/logos/stop.png"
          /> : <img
            className= {classes.barcode}
            alt="Logo"
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

