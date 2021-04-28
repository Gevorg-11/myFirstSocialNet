import {profileApi} from "../api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
let initialState = {
    posts: [
        {id: '1', post: 'My name is Gevorg', likesCount: '45'}
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push({id: '2', post: action.newPost, likesCount: '60'});
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPostCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getProfile = (userId) => {
    return async dispatch => {
        const data = await profileApi.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}
export const getStatus = (userId) => {
    return async dispatch => {
        const data = await profileApi.getStatus(userId)
        dispatch(setStatus(data))
    }
}
export const updateStatus = (status) => {
    return async dispatch => {
        const data = await profileApi.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export default profileReducer;