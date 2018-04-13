import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// import { reducer as comments } from './comments';
import { reducer as users } from "./users";

export default combineReducers({ form, users });
