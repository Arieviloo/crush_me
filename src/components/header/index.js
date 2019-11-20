import React, { Component } from 'react';
import { Box, AppBar } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../images/logo.png'

import './style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  toggleDrawer = value => this.setState({ drawerOpen: value });

  render() {
    return (
      <AppBar position="fixed">
        <ToolBar className="header">
         <Box />
        <Box className="header-title"><img className="logo"src={logo} alt="Logo"/></Box>

          
        </ToolBar>
      </AppBar>
    );
  }
}