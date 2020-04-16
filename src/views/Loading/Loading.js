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
  const [spinner, setSpinner] = useState(true);

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
    </Box>
    </div>

    
  );
};

export default Loading;