import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import formReducer from './formReducer';


export default combineReducers({
    commentsReducer:commentsReducer,
    formReducer: formReducer,

})