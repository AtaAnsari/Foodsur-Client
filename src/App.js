import React, { Component, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';
import RestrictionsContext from './context/restrictionsContext';

import { CookiesProvider } from 'react-cookie';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default function App() {
  const [restrictions, setRestrictions] = useState({});

  const value = { restrictions, setRestrictions };

  return (
    <CookiesProvider>
      <RestrictionsContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </RestrictionsContext.Provider>
    </CookiesProvider>
  );
}
