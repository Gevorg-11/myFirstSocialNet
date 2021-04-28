import React from 'react';
import {addPostCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{profilePage:state.profilePage}
};
let mapDispatchToProps=(dispatch)=> {
    return {
        addPosts: (newPost) => {
            dispatch(addPostCreator(newPost))
        }
    }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;