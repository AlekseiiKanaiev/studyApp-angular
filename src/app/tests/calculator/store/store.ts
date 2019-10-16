import { createStore } from 'redux';
import dispatcher from './dispatcher';

export default createStore(dispatcher);
