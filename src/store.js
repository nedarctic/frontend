// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Redux thunk middleware for handling asynchronous actions
import projectReducer from './reducers/projectReducer'; // Assuming you have a projectReducer

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  project: projectReducer,
  // Add other reducers here if needed
});

// Create the Redux store with combined reducers and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

