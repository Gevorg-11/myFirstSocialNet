import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../access/user.jpg';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map(p => {
                return <span key={p.id} className={props.currentPage === p && style.activePage}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={style.usersPage}>
        <span className={style.avatar}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img className={style.imgUrl} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>{u.followed
                ? <button disabled={props.toggleFetching.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                : <button disabled={props.toggleFetching.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}</div>
        </span>
                <span className={style.usersInfo}>
            <span className={style.initials}>
                <div className={style.fullName}>{u.name}</div>
                <div className={style.status}>{u.status}</div>
            </span>
            <span className={style.location}>
                <div className={style.country}>{/*u.location.country*/}</div>
                <div className={style.city}>{/*u.location.city*/}</div>
            </span>
        </span>
            </div>)}
    </div>
};
export default Users;