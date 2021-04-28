const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState= {
    dialogs: [
        {id: '1', dialog: 'Edo'},
        {id: '2', dialog: 'Hendo'}
    ],
        messages: [
        {id: '1', message: 'How are you'}
    ]
};
const dialogsReducer=(state=initialState,action)=> {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: '2', message: action.dialogs});
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addMessageCreator = (dialogs) => ({type: ADD_MESSAGE,dialogs});
export default dialogsReducer;