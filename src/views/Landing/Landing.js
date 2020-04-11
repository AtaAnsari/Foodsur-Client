import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Container, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(20),
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
      <Typography variant='h1' gutterBottom={true} align={'center'} color={'text'}>
        Find the Right Food For You
      </Typography>
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
