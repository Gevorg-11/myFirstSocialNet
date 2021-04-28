import React from 'react';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import Post from "./Post/Post";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength20=maxLengthCreator(20)
const MyPosts = (props) => {
    const addPost = (values) => {
        props.addPosts(values.newPost)
    };
    let state=props.profilePage;
    let postElement =
        state.posts.map(m => <Post post={m.post} likesCount={m.likesCount}/>)
    return (<>
        <PostReduxForm onSubmit={addPost}/>
        {postElement}
    </>)
}
const PostRedux=(props)=>{
    return <div className={s.newPost}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'enter new post'} name={'newPost'}
                validate={[required,maxLength20]}/>
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    </div>
}
const PostReduxForm=reduxForm({form:'newPost'})(PostRedux)
export default MyPosts;