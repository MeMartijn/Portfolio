import { combineReducers } from 'redux';

import animationReducer from './animationReducer';

export default combineReducers({
    animations: animationReducer
});