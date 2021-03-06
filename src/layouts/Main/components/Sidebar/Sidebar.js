import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Box } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  logo: {
      width: "120px",
      height: "48px"
  },
  edamamLogo: {
    width: '130px'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  edamamContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <HomeIcon />
    },
    {
      title: 'Favourites',
      href: '/user-favourites',
      icon: <FavoriteIcon />
    },
    {
      title: 'Popular',
      href: '/popular-products',
      icon: <StarIcon />
    }
  ];

  const logout =  {
    title: 'Logout',
    href: '/landing',
    icon: <ExitToAppIcon />
  }

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Box className={classes.logoContainer}>
          <img
            alt="Logo"
            className={classes.logo}
            src="/images/logos/foodsur.png"
          />
        </Box>
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          closeSidebar={onClose}
          logout={logout}
          pages={pages}
        />
        <Divider className={classes.divider} />
        <Box className={classes.edamamContainer}>
          <img
            alt="Logo"
            className={classes.edamamLogo}
            src="/images/logos/edamam.png"
          />
        </Box>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
