//import redux
import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

//create object to hold default data
const defaultState = {
  comments,
  posts
};

//create a store
const store = createStore(rootReducer, defaultState);

//sync the browser history with store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
