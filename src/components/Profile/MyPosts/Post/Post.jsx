import React from 'react';
import s from './Post.module.css'
const Post=(props)=>{
    return(
        <div className={s.posts}>
          <div>{props.post}</div>
          <div>Like: {props.likesCount}</div>
        </div>
    )
}
export default Post;