import React from "react";
import {Field} from "redux-form";
import {Col, Row, Glyphicon, Button} from "react-bootstrap";
import {FieldGroup} from "./FieldGroup";

const RemindersForm = ({member, index}) => {
    const dateLabel = `Reminder date ${index + 1}`;
    const descLabel = `Reminder description ${index + 1}`;
    const removeButtonTitle = `Remove reminder ${index + 1}`;

    return (
        <Row>
            <Col md={3}>
                <Button aria-label={removeButtonTitle} bsStyle="link"><Glyphicon glyph="trash"/></Button>
                <div className="form-control-static pull-right">
                    <label>Reminder {index + 1}</label>
                </div>
            </Col>
            <Col md={3}>
                <Field name={`${member}.date`} id={`${member}.date`} label={dateLabel}
                       placeholder="Date" srOnly={true} required={true} component={FieldGroup}/>
            </Col>
            <Col md={5}>
                <Field name={`${member}.description`} id={`${member}.description`} label={descLabel}
                       placeholder="Description" srOnly={true} required={true} component={FieldGroup}/>
            </Col>
        </Row>
    );
};

export default RemindersForm;
