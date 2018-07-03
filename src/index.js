import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import './css/index.css';
import App from './App';

ReactDOM.render(
  <MuiThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
