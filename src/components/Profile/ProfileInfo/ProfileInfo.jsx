import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
const ProfileInfo=(props)=>{
    if(!props.profile){
        return <Preloader/>
    }
    console.log('Gev')
    return(
        <div className={s.info}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}
export default ProfileInfo;