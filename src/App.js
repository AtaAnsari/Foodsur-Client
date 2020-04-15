import React, { Component } from 'react';
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

import { CookiesProvider } from 'react-cookie';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  // state = { users: [] }

  // componentDidMount() {
  //   fetch('http://localhost:8080/api/users')
  //     .then(res => {
  //       console.log(res)
  //       return res.json()
  //     })

  //     .then(users => this.setState({ users }))
  // }
  render() {
    return (
      // <div className="App">
      //   <h1>Users</h1>
      //   <ul>
      //     {this.state.users.map(user =>
      //       <li key={user.id}>{user.username}</li>
      //     )}
      //   </ul>
      // </div>

      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </CookiesProvider>
    );
  }
}
