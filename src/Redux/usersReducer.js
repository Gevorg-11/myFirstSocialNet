import {usersApi} from "../api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const IS_FETCHING='IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOOGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
    users: [],
    currentPage:1,
    pageSize:100,
    totalUsersCount:0,
    isFetching:false,
    toggleFetching:[]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:{
            return{
                ...state,users:action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,currentPage:action.page
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,totalUsersCount: action.count
            }
        }
        case IS_FETCHING:{
            return{
                ...state,isFetching:action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                toggleFetching:action.isFetching
                    ?[...state.toggleFetching,action.userId]
                    :[state.toggleFetching.filter(id=>id!=action.userId)]
            }
        }
        default:
            return state
    }
}
    export const followSuccess = (userId) => ({type: FOLLOW,userId});
    export const unfollowSuccess = (userId) => ({type:UNFOLLOW , userId});
    export const setUsers=(users)=>({type:SET_USERS,users});
    export const setCurrentPage=(page)=>({type:SET_CURRENT_PAGE,page});
    export const setTotalUsersCount=(count)=>({type:SET_TOTAL_USERS_COUNT,count});
    export const toggleIsFetching=(isFetching)=>({type:IS_FETCHING,isFetching});
    export const toggleFollowingProgress=(isFetching,userId)=>({type:TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userId});
    export const requestUsers=(page, pageSize)=>{
       return async dispatch=>{
           dispatch(toggleIsFetching(true));
           dispatch(setCurrentPage(page))
           const data=await usersApi.requestUsers(page, pageSize)
                   dispatch(toggleIsFetching(false));
                   dispatch(setUsers(data.items));
                   dispatch(setTotalUsersCount(data.totalCount))
        }
    };
    const followUnfollowFlow=async (dispatch,id,apiMethod,actionCreator)=>{
        dispatch(toggleFollowingProgress(true,id));
        const data=await apiMethod(id)
        if(data.resultCode===0) {
            dispatch(actionCreator(id))
        }
        dispatch(toggleFollowingProgress(false,id))
    }
    export const follow=(id)=>{
        return async (dispatch)=>{
            await followUnfollowFlow(dispatch,id,usersApi.followed.bind(usersApi),followSuccess);
        }
    };
    export const unfollow=(id)=>{
        return async (dispatch)=>{
            await followUnfollowFlow(dispatch,id,usersApi.unfollowed.bind(usersApi),unfollowSuccess);
        }
    };
    export default usersReducer;