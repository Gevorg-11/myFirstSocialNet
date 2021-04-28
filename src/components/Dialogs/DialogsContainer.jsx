import React from "react";
import {addMessageCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirectComponents} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{
    return{
            dialogsPage : state.dialogPage,
    }

};
let mapDispatchToProps=(dispatch)=>{
    return {
        addMessages : (dialogs) => {
            dispatch(addMessageCreator(dialogs))
        },
    }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),AuthRedirectComponents)(Dialogs);