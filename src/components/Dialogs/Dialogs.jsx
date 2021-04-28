import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import DialogMessages from "./DialogMessages/DialogMessages";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from '../common/FormsControls/FormsControls'
const maxLength20=maxLengthCreator(20)
const Dialogs = (props) => {
    let state=props.dialogsPage;
    let dialogElement =
        state.dialogs.map(d => <Dialog dialog={d.dialog} id={d.id}/>);
    let messageElement =
        state.messages.map(m => <DialogMessages message={m.message}/>);
    const addNewMessage=(values)=>{
        props.addMessages(values.dialogs)
    };
    if(!props.isAuth)return <Redirect to='/login'/>
    return (
        <div className={s.dialogPage}>
            <div>
                {dialogElement}
            </div>
            <div>
                {messageElement}
                <DialogReduxForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}
const DialogsForm=(props)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={'enter a message'}
                   validate={[required,maxLength20]} name={'dialogs'}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    </div>
}
const DialogReduxForm=reduxForm({form:'dialog'})(DialogsForm)
export default Dialogs;