import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(\'/images/landing-bg.jpg\')',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  content: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  text: {
    width: '60%',
    marginBottom: '4vh',
    padding: '2.5vw',
    backgroundColor: 'rgba(255, 215, 0, .5)',
    borderRadius: '20px'
  },
  logo: {
    width: '43vw',
    marginBottom: '10vh'
  }
}))

export default function DesktopView() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box className={classes.content}>
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
                Please switch to responsive view (iPhone 6/7/8 etc.) or view the app on your mobile phone.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
