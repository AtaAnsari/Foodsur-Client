import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { css } from "@emotion/core";
import { Box} from '@material-ui/core';
import BarLoader from "react-spinners/BarLoader";

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
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
          loading
          size={150}
        />
      </Box>
    </div>
  );
};

export default Loading;
