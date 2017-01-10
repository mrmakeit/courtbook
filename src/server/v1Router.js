import express from "express";
import {getPeopleByCaseNumber, getReminderByCaseNumberAndName} from "./reminders";

const router = express.Router();

router.route('/v1/case/:caseNumber')
    .get((req, res) => res.send(getPeopleByCaseNumber(req.params.caseNumber)));

router.route('/v1/case/:caseNumber/person/:personName')
    .get((req, res) => res.send(getReminderByCaseNumberAndName(req.params.caseNumber, req.params.personName)));

export default router;
