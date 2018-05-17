import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'mobx-react'

import App from './App'
import {AppState,TopicStore} from './store/store'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider,createMuiTheme } from 'material-ui/styles'
import { lightBlue, pink } from 'material-ui/colors'

const appState = new AppState()
const topicStore = new TopicStore()

const theme = createMuiTheme({
  palette:{
      primary: pink,
      accent: lightBlue,
      type: 'light',
  }
})
ReactDOM.render(
  <Provider appState={appState} topicStore={topicStore}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
