import { put, takeEvery, call, all, take } from 'redux-saga/effects';

//import actions
import {
    loginFailed,
    loginSucceed,

    registerFailed,
    registerSucceed,
} from './authActions';

//import api
import * as authApi from './authApi';

export function* authSubscriber() {
    yield all([takeEvery('LOGIN', login)]);
    yield all([takeEvery('REGISTER', register)]);
}

export function* login({ payload: {login, password }}) {
    try {
        const token = yield call( authApi.login, login, password);
        yield put(loginSucceed(token));
    } catch (error) {
        yield put(loginFailed(error));
    }
}

export function* register({ payload: { params}} ) {
    try {
        const user_id = yield call( authApi.register, params );
        yield put(registerSucceed(user_id));
    } catch (error) {
        console.log("error", error);
        yield put(registerFailed(error));
    }
}