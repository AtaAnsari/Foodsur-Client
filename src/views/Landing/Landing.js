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
  buttonStyle: {
    marginTop: '0.5rem',
    marginBottom: '1rem'
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
        <Button variant='contained'
          color='primary'
          fullWidth={true}
          className={classes.buttonStyle}
          onClick={handleLogin}>
          Login
        </Button>
        <Button
          variant='contained'
          color='primary'
          fullWidth={true}
          className={classes.buttonStyle}
          onClick={handleSignUp}>
          Sign up
        </Button>
        
    </Container >
  )
}

export default Landing;
