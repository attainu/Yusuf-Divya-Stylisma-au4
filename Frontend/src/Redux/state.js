import { createStore, combineReducers } from 'redux';

let initialState;

let appReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(appReducer);

export default store;
