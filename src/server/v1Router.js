import express from "express";
import {createPersonAndReminders, getPeopleByCaseNumber, getReminderByCaseNumberAndName} from "./reminders";

const router = express.Router();

router.route("/v1/reminders")
    .post((req, res) => createPersonAndReminders(req.body)
        .then(
            x => res.send(x),
            err => res.status(500).send("Server side error occurred.")
        ));

router.route('/v1/case/:caseNumber')
    .get((req, res) => res.send(getPeopleByCaseNumber(req.params.caseNumber)));

router.route('/v1/case/:caseNumber/person/:personName')
    .get((req, res) => res.send(getReminderByCaseNumberAndName(req.params.caseNumber, req.params.personName)));

export default router;
