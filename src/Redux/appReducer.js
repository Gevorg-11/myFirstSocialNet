import {authSelect} from "./authReducer";
const SET_INITIALIZATION='SET_INITIALIZATION'
let initialState = {
    initialized:false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION: {
            return {...state,
                initialized: true
            };
        }
        default:
            return state
    }
}
    export const setInitialization = () => ({type: SET_INITIALIZATION});
    export const initializedApp=()=> {
        return dispatch => {
            let promise=dispatch(authSelect());
            Promise.all([promise]).then(()=>{
                dispatch(setInitialization())
            })
        }
    }
    export default appReducer;