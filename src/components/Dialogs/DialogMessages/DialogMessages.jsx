import React from "react";
import s from './DialogMessages.module.css';
const DialogMessages=(props)=>{
    return(
        <div className={s.messages}>
            <div>{props.message}</div>
        </div>
    )
}
export default DialogMessages;