import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { css } from "@emotion/core";
import { Box, Button, Typography} from '@material-ui/core';
import BarLoader from "react-spinners/BarLoader";
import typography from 'theme/typography';
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

  useEffect(() => {
    const timedButton = setTimeout(() => {
      setSearchAgainButton(true)
    }, 5000);
  }, []);
  const handleBack = function() {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <Box className={classes.container} >
        <Box>  
        <img
              className= {classes.logo}
              alt="Logo"
              src="/images/logos/S-logo-lrg.png"
            />
        </Box>
        <BarLoader
            css={override}
            size={150}
            color={"#79AB2B"}
            loading={spinner}
          />
        {searchAgainButton ?
        <div className={classes.searchAgainButtonContainer}>
                <Typography variant="h5"> Hmm, there seems to be a problem.</Typography>
        <Button variant='contained'
        color='primary'
        className={classes.buttonStyle}
        onClick={handleBack}
        >
        Search Again
        </Button> 
        </div>
  :
        <div></div>}
      </Box>
    </div>
  );
};

export default Loading;
