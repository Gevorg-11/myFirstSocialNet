import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {AuthRedirectComponents} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
            let userId=this.props.match.params.userId;
        if(!userId){
            userId=this.props.authUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
               <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authUserId:state.auth.userId,
    iAuth:state.auth.isAuth
});
    export default compose(connect(mapStateToProps, {getProfile,getStatus,updateStatus}),withRouter,AuthRedirectComponents)(ProfileContainer);