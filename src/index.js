import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './assets/fonts/style.css';
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

render(
    <Provider store = { store }>
      <Router history = {history}>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
