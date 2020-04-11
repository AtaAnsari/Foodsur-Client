import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10)
  },
  buttonStyle: {
    marginTop: '0.5rem',
    marginBottom: '1rem'
  },
  cardStyle: {
    padding: '1rem'
  }
}));

const Login = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Typography variant='h1' gutterBottom={true} align={'center'} color='secondary'>
        Login
      </Typography>
      <TextField fullWidth id="Email Address" label="email" type='email' name='email' variant="outlined" />
      <TextField fullWidth id="password" label="Password" type='password' name='password' variant="outlined" />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary">Submit</Button>
    </Container >
  )
}

export default Login;
