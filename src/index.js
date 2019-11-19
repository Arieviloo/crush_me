import React from 'react';
import ReactDOM from 'react-dom';import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF666F',
      light: '#9575FF',
      dark: '#FF6655',
    },
    secondary: {
      main: '#f6f6f6',
      light: '#fff',
      dark: '#c2c2c2',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
