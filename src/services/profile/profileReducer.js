import { handleActions } from 'redux-actions';

import {
    getProfile,
    getProfileSucceed,
    getProfileFailed,
    getHipscansFailed,
    getHipscansSucceed,
    addHipscan,
    addHipscanSucceed,
    addHipscanFailed
} from './profileActions';
import { getHashes } from 'crypto';
import { getHipscans } from './profileApi';

const defaultState = {
    profile: null,
    myHipscans:null,
    error:null,
    loading:false,
    message:'',
    success:false,
}

const reducer = handleActions({
    [ getProfile ] (state) {
        return {
            ...state,
            error:null,
            loading:true
        }
    },
    [ getProfileFailed ] ( state, { payload: { error }} ) {
        return {
            ...state,
            error:true,
            loading:false,
            message:" Failed"
        }
    },
    [ getProfileSucceed ] (state, { payload: { profile }}) {
        return {
            ...state,
            loading:false,
            profile
        }
    },
    [ getHipscans ] (state) {
        return {
            ...state,
            error:null,
            loading:true,
        }
    },
    [ getHipscansFailed ] (state, { payload: { error }}) {
        return {
            ...state,
            error:true,
            loading:false,
        }
    },
    [ getHipscansSucceed ] (state, { payload: { myHipscans }}){
        return {
            ...state,
            error:true,
            loading:false,
            myHipscans
        }
    },
    [ addHipscan ] (state, { payload:{params}}) {
        return {
            ...state,
            error:false,
            loading:true,
        }
    },
    [ addHipscanSucceed ] (state) {
        return {
            ...state,
            error:false,
            loading:false,
        }
    },
    [ addHipscanFailed ] (state, {payload: { error }}){
        return {
            ...state,
            error:true,
            loading:false
        }
    }
}, defaultState);

export default reducer;