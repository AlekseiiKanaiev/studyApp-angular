import { createStore } from 'redux';
import dispatcher from './dispatcher';

console.log(dispatcher);
export default createStore(dispatcher);
