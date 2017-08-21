import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './post.js';
import comments from './comments.js';

const rootReducer = combineReducers({posts, comments, routing=routerReducer});

export default rootReducer;
