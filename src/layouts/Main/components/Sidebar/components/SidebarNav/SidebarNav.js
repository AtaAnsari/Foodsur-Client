/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '1rem'
  },
  icon: {
    color: theme.palette.icon,
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, logout, closeSidebar, className, ...rest } = props;

  const classes = useStyles();

  const [cookies, setCookie, removeCookie] = useCookies(['session']);

  // Won't show logout link in Sidebar if currently at /landing, /login, /sign-up
  const location = useLocation();
  const loggedIn =
    location.pathname !== '/landing' &&
    location.pathname !== '/login' &&
    location.pathname !== '/sign-up';

  // Removes session cookie if 'Logout' is clicked, and closes the sidebar
  const handleLogout = () => {
    removeCookie('session');
    closeSidebar();
  }

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            onClick={() => closeSidebar()}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
      {loggedIn &&
        <ListItem
          className={classes.item}
          disableGutters
          key={logout.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            onClick={() => handleLogout()}
            to={logout.href}
          >
            <div className={classes.icon}>{logout.icon}</div>
            {logout.title}
          </Button>
        </ListItem>
      }
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
