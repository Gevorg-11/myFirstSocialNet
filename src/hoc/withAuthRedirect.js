import React from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
let connectedMapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
});
export const AuthRedirectComponents=(Component)=>{
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
            return connect(connectedMapStateToProps)(RedirectComponent)
}