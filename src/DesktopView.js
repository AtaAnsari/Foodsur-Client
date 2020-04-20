import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(\'/images/landing-bg.jpg\')',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  textContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255, 215, 0, .4)'
  },
  text: {
    width: '60%',
    margin: '60px 0'
  },
  logo: {
    width: '680px'
  }
}))

export default function DesktopView() {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.textContainer}>
        <img
          alt="Foodsur Logo"
          className={classes.logo}
          src="/images/logos/foodsur.png"
        />
        <Box className={classes.text}>
          <Typography
            align={'center'}
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
              Foodsur is a Progressive Web Application that is best viewed on mobile.
          </Typography>
        </Box>
        <Box className={classes.text}>
          <Typography
            align={'center'}
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
              Please switch to responsive view (iPhone 6/7/8 etc.), or view the app on your mobile phone.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
