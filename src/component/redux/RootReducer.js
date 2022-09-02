import {combineReducers} from 'redux';
import { todoReducer } from './todo/TodoReducer';

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer