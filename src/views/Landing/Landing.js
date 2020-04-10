import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Landing = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Typography variant='h1' className={classes.header} gutterBottom={true} align={'center'}>
        Find the Right Food For You
      </Typography>
      <Button variant='contained' color='primary'>Login</Button>
      <Button variant='contained' color='primary'>Sign up</Button>
    </Container>

  )
}

export default Landing;
