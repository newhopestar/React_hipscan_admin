import { handleActions } from 'redux-actions';

import {
    login,
    loginFailed,
    loginSucceed,
    logout,
    register,
    registerFailed,
    registerSucceed
} from './authActions';

import {
    storeCurrentToken,
    getStoredToken,
    removeCurrentToken
} from './services';

const defaultState = {
    user_id:null,
    error:null,
    loading:null,
    message:'',
    success:false,
}

const reducer = handleActions(
    {
        [login](state) {
            return {
                ...state,
                error:null,
                loading:true,
                token: getStoredToken(),
                
            };
        },
        [loginFailed](state, { payload:{ error }}) {
            return {
                ...state,
                error: error && error.data && error.data.Message ? error.data.Message : 'Error: Something was wrong!',
                loading:false,
                success:false,
            }
        },
        [loginSucceed] ( state, { payload: {token}}) {
            storeCurrentToken(token);
            return {
                ...state,
                token: token,
                error: null,
                loading: false,
                success:true,
                message:'Successfully, Logged in'
            }
        },
        [logout] (state) {
            removeCurrentToken();
            return {
                ...state,
            }
        },
        [ register ](state) {
            return {
                ...state,
                error:null,
                loading:true,
            }
        },
        [registerFailed]( state , {payload: { error }}) {
            return {
                ...state,
                error: error && error.data && error.data.Message ? error.data.Message : 'Error: Something was wrong!',
                loading:false,
                success:false,
            }
        },
        [ registerSucceed ] (state, { payload:{ user_id }}) {
            return {
                ...state,
                error:null,
                loading:false,
                user_id,
                success:true,
                message:'Successfully Sign up'
            }
        }
    },defaultState
);

export default reducer;
