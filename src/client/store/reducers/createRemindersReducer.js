import {pendingType, fulfilledType, rejectedType, typeToStatus} from "./actionStatus";
import {CREATE_REMINDER} from "../actions/ReminderActions";

const defaultHandler = (state, action) => ({status: typeToStatus(action.type)});

const handleStatus = (type, {fulfilledFunc = defaultHandler, rejectedFunc = defaultHandler, pendingFunc = defaultHandler}) =>
    (state = {}, action) => {
        console.info("action.type", action.type);
        switch (action.type) {
            case fulfilledType(type):
                return fulfilledFunc(state, action);
            case pendingType(type):
                console.info("pendingType(state, action)", pendingType(state, action));
                return pendingFunc(state, action);
            case rejectedType(type):
                console.info("rejectedFunc(state, action)", rejectedFunc(state, action));
                return rejectedFunc(state, action);
            default:
                return state;
        }
    };

export default handleStatus(CREATE_REMINDER, {
    fulfilledFunc: (state, action) => ({...defaultHandler(state, action), createdReminder: action.payload})
});
