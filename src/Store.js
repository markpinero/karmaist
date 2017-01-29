import { createStore, applyMiddleware } from 'redux';
import {middleware as reduxMiddleware } from 'redux-pack';
import Reducer from './Reducers';
import thunk from 'redux-thunk';

export default createStore(Reducer, applyMiddleware(thunk, reduxMiddleware));