import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments';

const Single = (props) => {
  const i = props.posts.findIndex((post) => post.code === props.params.postId);
  const post = props.posts[i];
  const {postId} = props.params
  const postComments = props.comments[postId] || [];

  return (
    <div className='single-photo'>
      <Photo i={i} post={post} {...props}/>
      <Comments postComments={postComments} {...props}/>
    </div>
  );
}

export default Single;
