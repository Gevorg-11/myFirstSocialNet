import {headerApi} from "../api";
import {stopSubmit} from 'redux-form'

const SET_USER_LOGIN = 'SET_USER_LOGIN'
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state
    }
}
export const setUserLogin = (userId, login, email, isAuth) => ({
    type: SET_USER_LOGIN,
    payload: {userId, login, email, isAuth}
});
export const authSelect = () => {
    return async (dispatch) => {
        const data = await headerApi.getMe()
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserLogin(id, login, email, true))
        }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await headerApi.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authSelect)
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const data = await headerApi.logout()
        if (data.resultCode === 0) {
            dispatch(setUserLogin(null, null, null, false))
        }
    }
}
export default authReducer