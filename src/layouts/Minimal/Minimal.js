import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Sidebar, Footer } from '../Main/components';
import { Topbar } from './components';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));


  


const Minimal = props => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = useState(false);
  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const { children } = props;

  const classes = useStyles();


  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className={classes.root}>
      <Topbar onSidebarOpen={handleSidebarOpen}/>
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
