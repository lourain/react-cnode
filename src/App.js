import React, { Component } from 'react';
import AppBar from "./view/layout/app-bar"
import Routes from './route'

class App extends Component {
  render() {
    return [
    	<AppBar key='bar' />,
        <Routes key="router"/>
      ];
  }
}

export default App;
