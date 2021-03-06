import React from "react";
import {connect} from "react-redux";
import {PageHeader, Button} from "react-bootstrap";
import {reduxForm, FieldArray} from "redux-form";
import PersonForm from "./PersonForm";
import RemindersForm from "./RemindersForm";
import {REMINDER_FORM_NAME, createReminders} from "../store/actions/ReminderActions";

const CreateReminders = ({handleSubmit}) => (
    <div>
        <PageHeader>Create Reminders</PageHeader>
        <PersonForm/>
        <FieldArray name="reminders" component={RemindersForm}/>
        <div style={{overflow: "auto"}}>
            <div className="pull-right">
                <Button id="create" bsStyle="primary" onClick={handleSubmit}>Create</Button>
            </div>
        </div>
    </div>
);

export default connect(undefined, undefined)(reduxForm({
    form: REMINDER_FORM_NAME,
    onSubmit: createReminders
})(CreateReminders));
