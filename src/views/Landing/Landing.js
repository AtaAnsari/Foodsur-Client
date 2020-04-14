import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Container, Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(25),
    backgroundImage: "url('/images/landing-bg.jpg')",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  loginButtonStyle: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    width: "200px",
    position: 'absolute', 
        left: '27%', 
        top: '50%',
  },
  signupButtonStyle: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    width: "200px",
    position: 'absolute', 
        left: '27%', 
        top: '58%',
  },
  cardStyle: {
    padding: '1rem'
  },
  backgroundFilter: {
    backgroundColor: fade(theme.palette.primary.main, 0.5)
  },
    tagLine: {
      color: theme.palette.black
    }
  
}));


const Landing = () => {

  const history = useHistory()

  const handleLogin = () => {
    history.push("/login")
  };

  const handleSignUp = () => {
    history.push("/sign-up")
  }

  const classes = useStyles()
  return (
    <Container className={classes.root}>
        <div className={classes.backgroundFilter}>
          <Typography className={classes.tagLine} variant='h1' gutterBottom={true} align={'center'} color={'text'}>
            Find the Right Food For You
          </Typography>
        </div>
        {/* <Box display="flex" flexDirection="column" justifyContent="center"> */}
        <Button variant='contained'
          color='primary'
          fullWidth={true}
          className={classes.loginButtonStyle}
          onClick={handleLogin}>
          Login
        </Button>
        <Button
          variant='contained'
          color='primary'
          fullWidth={true}
          className={classes.signupButtonStyle}
          onClick={handleSignUp}>
          Sign up
        </Button>
        {/* </Box> */}
        
    </Container >
  )
}

export default Landing;
