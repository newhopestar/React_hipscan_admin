import { createActions } from 'redux-actions';

const {
    getProfile,
    getProfileSucceed,
    getProfileFailed,

    getHipscans,
    getHipscansSucceed,
    getHipscansFailed,

    addHipscan,
    addHipscanSucceed,
    addHipscanFailed
} = createActions({
    GET_PROFILE: () => ({}),
    GET_PROFILE_SUCCEED: profile => ({ profile }),
    GET_PROFILE_FAILED: error => ({ error }),
    GET_HIPSCANS: () => ({}),
    GET_HIPSCANS_SUCCEED: myHipscans => ({ myHipscans }),
    GET_HIPSCANS_FAILED: error =>({ error }),
    ADD_HIPSCAN: params => ({ params }),
    ADD_HIPSCAN_SUCCEED: () => ({}),
    ADD_HIPSCAN_FAILED: error => ({ error })
});

export {
    getProfile,
    getProfileSucceed,
    getProfileFailed,

    getHipscans,
    getHipscansSucceed,
    getHipscansFailed,

    addHipscan,
    addHipscanSucceed,
    addHipscanFailed
};