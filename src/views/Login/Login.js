import React, { useState, useContext } from 'react';
import { useHistory, Link as RouterLink, } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container, TextField, Typography, Button, Box, Link } from '@material-ui/core';
import axios from 'axios'
import { useCookies } from 'react-cookie';

import RestrictionsContext from 'context/restrictionsContext';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(10)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  loginButton: {
    margin: theme.spacing(2, 0),
    "&:hover": {
      backgroundColor: "#5f981a"
    }
  },
  logoWidth: {
    height: "100px",
    width: "262px"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
  },
}));

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('')
  const [cookies, setCookie] = useCookies(['session']);

  const { setRestrictions } = useContext(RestrictionsContext);


  const history = useHistory()
  const classes = useStyles();

  // On successful login, set a session cookie with user id and set RestrictionsContext to the users dietary restrictions
  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { email: userEmail }
    axios.post('/api/users/login', userData)
      .then(res => {
        console.log(res)
        if (res.data.success) {
          setCookie('session', res.data.userId, { path: '/' });
          setRestrictions(res.data.userRestrictions);
          history.push('/home');
        } else {
          setError('Error')
        }
      })
  }

  return (
    <Container className={classes.root}>
      <Box className={classes.logoContainer}>
        <img
          className={classes.logoWidth}
          alt="Logo"
          src="/images/logos/foodsur.png"
        />
      </Box>
      <form
        onSubmit={handleLogin}
      >
        <Typography variant='h1' gutterBottom={true} align={'center'} color='black'>
          Login
      </Typography>
        <div>
          <TextField
            className={classes.textField}
            fullWidth
            required
            id="Email Address"
            label="email"
            type='email'
            name='email'
            variant="outlined"
            onChange={event => setUserEmail(event.target.value)} />
        </div>
        <div>
          <TextField
            className={classes.textField}
            fullWidth
            required
            id="password"
            label="Password"
            type='password'
            name='password'
            variant="outlined" />
        </div>
        <Button
          className={classes.loginButton}
          type="submit"
          fullWidth
          variant="contained"
          color="primary">Submit
          </Button>
        {error &&
          <Typography
            color="error"
            variant="h6"
          >
            Please enter a valid username and password
        </Typography>}
        <Typography
          color="textSecondary"
          variant="body1"
        >
          Dont Have an Account?{' '}
          <Link
            component={RouterLink}
            to="/sign-up"
            variant="h6"
          >
            Sign Up
                  </Link>
        </Typography>

      </form>
    </Container >
  )
}

export default Login;
