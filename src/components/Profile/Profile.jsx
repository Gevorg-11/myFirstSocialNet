import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={s.profile}>
            <img src="https://i.pinimg.com/originals/c5/df/30/c5df300e36c864ccd0ed1ca8800ff470.jpg"
                 className={s.wrapper}/>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;