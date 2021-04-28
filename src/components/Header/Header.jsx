import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header=(props)=> {
    return (
        <div className={s.header}>
            <img alt=''
                src="https://listcarbrands.com/wp-content/uploads/2016/02/Dodge-Symbol.jpg"
                className={s.logo}/>

                <div className={s.login}>
                    {props.isAuth?<div>{props.login} <button onClick={props.logout}> Logout</button></div>:
                    <NavLink to='/login'>Login </NavLink>}
                    </div>

        </div>
    )
}

export default Header;