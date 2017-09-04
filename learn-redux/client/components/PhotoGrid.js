import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo.js';

const PhotoGrid = (props) => {

  return (
    <div className='photo-grid'>
      {props.posts.map((post, i) => (<Photo {...props} key={i} i={i} post={post} comments={props.comments} />))}
    </div>
  );
}

export default PhotoGrid;
