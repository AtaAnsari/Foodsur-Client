import Scanner from '../Scanner/Scanner';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../Scanner/styles.css';
import useApiData from 'hooks/useApiData'
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  scanButton: {
    padding: '0',
    width: '150px',
    height: '100px',
    marginTop: '50px',
    marginBottom: '50px',
    "&:hover": {
      backgroundColor: "#5f981a"
    }
  },
  barcode: {
    width: '125px'
  },
  stop: {
    width: '50px'
  },
  // viewport: {

  // }
}));


const ScanViewport = () => {
  const classes = useStyles();
  const { FetchApiData, isolateProductData } = useApiData();
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const history = useHistory()

  const onDetected = async result => {
    history.push({
          pathname: "/loading"
        })
    const {upcIngredients, product} = await FetchApiData(result)
    setResult(result);
    const res = await isolateProductData(upcIngredients, product)
        history.push({
          pathname: "/display-product",
          state: {
            product: res
          }
        })
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
              className={classes.stop}
              src="/images/logos/stop.png"
            /> :
            <img
              alt="Logo"
              className={classes.barcode}
              src="/images/logos/barcode.png"
            />}
        </Button>
      </Box>
      {camera? <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div> : <div></div>}
    </div>
  );
};

export default ScanViewport;


