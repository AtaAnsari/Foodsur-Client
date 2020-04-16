import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10)
  },
  inputStyle: {
  }
}));

const Login = () => {
  const [userEmail, setUserEmail] = useState('');

  const [cookies, setCookie] = useCookies(['session']);

  const history = useHistory()
  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { email: userEmail }
    axios.post('http://3853b041.ngrok.io/api/users/login', userData)
      .then(res => {
        if (res.data.success) {
          setCookie('session', res.data.userId, { path: '/' });
          history.push('/home');
        } else {
          console.log('Error');
        }
      })
  }

  return (
    <Container className={classes.root}>
      <form
        onSubmit={handleLogin}
      >
        <Typography variant='h1' gutterBottom={true} align={'center'} color='secondary'>
          Login
      </Typography>
        <TextField
          className={classes.inputStyle}
          fullWidth
          id="Email Address"
          label="email"
          type='email'
          name='email'
          variant="outlined"
          onChange={event => setUserEmail(event.target.value)} />
        <TextField
          fullWidth
          id="password"
          label="Password"
          type='password'
          name='password'
          variant="outlined" />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">Submit</Button>

      </form>
    </Container >
  )
}

export default Login;
