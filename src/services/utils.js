import axios from 'axios';

//import settings
import settings from '../config/settings.js';
import store from '../store';

//import logout action
import { logout } from './auth/authActions';

export const wrapRequest = func => {
    return async (...args) => {
      const res = await func(...args);
      if (
        res &&
        res.status &&
        res.status !== 200 &&
        res.status !== 201 &&
        res.status !== 204
      ) {
        throw res;
      } else {
        return res.data;
      }
    };
};

export const xapi = () => {
   let token = JSON.parse(localStorage.getItem('token'));
    let headers = {
      'X-Requested-With': 'XMLHttpRequest',
      Accept: 'application/json',
      charset: 'UTF-8',
    };
  
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token.token}`
      };
    }
  
    let xapi = axios.create({
      baseURL: settings.BASE_URL,
      headers: headers
    });
  
    // Check expired token
    xapi.interceptors.response.use(undefined, function(err) {
      if (err.response && err.response.status === 401) {
        store.dispatch(logout());
      }
  
      if (typeof err.response === 'undefined') {
        throw err;
      }
  
      if (err.response && err.response.status !== 200) {
        throw err.response;
      }
    });
  
    return xapi;
  };
  
  export const errorMsg = error => {
    let errorMsg = {
      title: null,
      message: ''
    };
  
    if (typeof error === 'object' && error !== null) {
      if (error.data && error.data.message) {
        errorMsg.title = error.data.message;
        let errors = error.data.errors;
        if (errors) {
          for (let key in errors) {
            /* eslint-disable-next-line  */
            if (errors[key]) {
              /* eslint-disable-next-line  */
              errors[key].map(msg => {
                errorMsg.message += msg + '\n';
              });
            }
          }
        }
      }
    } else {
      errorMsg.title = error;
    }
  
    return errorMsg;
};
  