import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { css } from "@emotion/core";
import { Box, Button, Typography} from '@material-ui/core';
import BarLoader from 'react-spinners/BarLoader';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(25)
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: "150px",
    width: "200px"
  },
  buttonStyle: {
    margin: "10px",
    "&:hover": {
      backgroundColor: "#5f981a"
    }
  },
  searchAgainButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px"
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {

  const history = useHistory();
  const classes = useStyles();
  
  const [spinner, setSpinner] = useState(true);
  const [searchAgainButton, setSearchAgainButton] = useState(false);
  const [delayed, setDelayed] = useState(true);

  // Show a "search again" button if loading takes longer than 5 seconds
  useEffect(() => {
    const timedButton = setTimeout(() => {
      setSearchAgainButton(true)
    }, 5000);

    return () => clearTimeout(timedButton);
  }, []);

  // Delay the rendering of loading screen by 300 ms
  useEffect(() => {
    const timeDelay = setTimeout(() => setDelayed(false), 300);
    return () => clearTimeout(timeDelay);
  }, []);

  return (
    <div className={classes.root}>
      {!delayed &&
      <Box className={classes.container} >
        <Box>
          <img
            alt="Logo"
            className= {classes.logo}
            src="/images/logos/S-logo-lrg.png"
          />
        </Box>
        <BarLoader
          color={'#79AB2B'}
          css={override}
          loading={spinner}
          size={150}
        />
        {searchAgainButton ?
          <div className={classes.searchAgainButtonContainer}>
            <Typography variant="h5">
            Hmm, there seems to be a problem.
            </Typography>
            <Button
              className={classes.buttonStyle}
              color="primary"
              onClick={history.goBack}
              variant="contained"
            >
            Search Again
            </Button>
          </div> :
          <div/>}
      </Box>}
    </div>
  );
};

export default Loading;
