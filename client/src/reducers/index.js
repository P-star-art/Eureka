import { combineReducers } from "redux";

import abstracts from './abstracts';
import auth from './auth';

export default combineReducers({
  abstracts,
  auth
  });