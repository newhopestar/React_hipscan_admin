import { createActions } from 'redux-actions';

const {
    login,
    loginFailed,
    loginSucceed,
    logout,
    register,
    registerFailed,
    registerSucceed
} = createActions({
    LOGIN:( login, password ) => ({ login, password }),
    LOGIN_FAILED: error => ({ error }),
    LOGIN_SUCCEED: token => ({ token }),
    LOGOUT:() => ({}),
    REGISTER: params => ({ params}),
    REGISTER_FAILED: error => ({ error }),
    REGISTER_SUCCEED: user_id => ({ user_id }),
})

export {
    login,
    loginFailed,
    loginSucceed,
    logout,
    register,
    registerFailed,
    registerSucceed
};