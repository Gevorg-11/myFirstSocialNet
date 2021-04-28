import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', post: 'My name is Gevorg', likesCount: '45'}
            ],
            newPost: ''
        },
        dialogPage: {
            dialogs: [
                {id: '1', dialog: 'Edo'},
                {id: '2', dialog: 'Hendo'}
            ],
            messages: [
                {id: '1', message: 'How are you'}
            ],
            newMessage: ''
        }
    },
    _reDrawDom() {
    },
    subscribe(observer) {
        this._reDrawDom = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        profileReducer(this._state.profilePage,action);
        dialogsReducer(this._state.dialogPage,action);
        this._reDrawDom(this._state)
        }
};
window.store=store;
export default store;