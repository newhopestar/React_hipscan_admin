import { put, takeEvery, call, all } from 'redux-saga/effects';

//import actions
import {
    getProfileSucceed,
    getProfileFailed,

    getHipscansSucceed,
    getHipscansFailed,
    addHipscanSucceed,
    addHipscanFailed
} from './profileActions';

//import api
import * as profileApi from './profileApi';

export function* profileSubscriber() {
    yield all([takeEvery('GET_PROFILE', getProfile)]);
    yield all([takeEvery('GET_HIPSCANS', getHipscans)]);
    yield all([takeEvery('ADD_HIPSCAN', addHipscan )]);
}

export function* getProfile() {
    try {
        const profile = yield call( profileApi.getProfile );
        yield put(getProfileSucceed(profile));
    } catch (error) {
        yield put(getProfileFailed(error));
    }
}

export function* getHipscans() {
    try {
        const myHipscans = yield call(profileApi.getHipscans );
        yield put(getHipscansSucceed(myHipscans));
    } catch (error) {
        yield put(getHipscansFailed(error));
    }
}

export function* addHipscan({ payload: { params }}) {
    try {
        yield call(profileApi.addHipscan, params );
        yield put(addHipscanSucceed());
    } catch (error) {
        yield put(addHipscanFailed(error));
    }
}