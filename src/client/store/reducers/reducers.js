import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import createRemindersReducer from "./createRemindersReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    auth: authReducer,
    createReminders: createRemindersReducer
});

export default rootReducer;
