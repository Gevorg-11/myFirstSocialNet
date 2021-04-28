import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";
const Dialog=(props)=>{
    let path=`/messages/${props.id}`
  return(
      <div className={s.dialog}>
          <NavLink to={path}>{props.dialog}</NavLink>
      </div>
  )
}
export default Dialog;