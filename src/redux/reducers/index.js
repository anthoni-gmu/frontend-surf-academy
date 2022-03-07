import { combineReducers } from "redux";

import Auth from "./auth";
import Alert from "./alert";
import Student from "./student";

export default combineReducers({
    Auth, 
    Alert,
    Student
})