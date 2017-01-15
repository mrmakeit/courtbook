import AuthService from "../../utils/AuthService";
import agent from "superagent";
import superagentAsPromised from "superagent-as-promised";
superagentAsPromised(agent, Promise);

export const REMINDER_FORM_NAME = "reminders";
export const CREATE_REMINDER = "CREATE_REMINDER";

    export const createReminders = (personReminders) => {
    console.info("!");
    return {
        type: "CREATE_REMINDER",
        payload: agent
            .post("rest/v1/reminders", personReminders)
            .set("Authorization", `Bearer ${AuthService.getToken()}`)
            .then()
    };
};
