import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import { required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'
const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} placeholder={'email'}
                           validate={[required]}
                           name={'email'}/>
                </div>
                <div>
                    <Field component={Input} placeholder={'password'}
                          type={'password'} validate={[required]}
                           name={'password'}/>
                </div>
                <div>
                    <Field component={Input} type={'checkBox'} name={'rememberMe'}/>remember me
                </div>
                {props.error && <div className={s.formControlCommonError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps=(state)=>({isAuth:state.auth.isAuth})
export default connect(mapStateToProps,{login})(Login);