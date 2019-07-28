import { combineReducers } from 'redux'

import languageReducer from './languageReducer';
import isMobileReducer from './isMobileReducer';

export default combineReducers({
  language: languageReducer,
  isMobile: isMobileReducer,
})