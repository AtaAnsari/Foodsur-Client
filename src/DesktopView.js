import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(\'/images/landing-bg.jpg\')',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justtifyContent: 'center'
  },
  backgroundFilter: {
    backgroundColor: fade('#444444', 0.8)
  }
}))

export default function DesktopView() {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid>
        <Box className={classes.backgroundFilter}>
          <Box width="70%" >
            <Typography
              align={'center'}
              className={classes.textStyle}
              color="white"
              gutterBottom
              variant="h2"
            >
          Hello
            </Typography>
          </Box>
        </Box>
      </Grid>

    </Box>
  )
}
