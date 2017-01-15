import setup from "../setup";
import models from "../../src/server/models/models";
import {
    getReminderByCaseNumberAndName,
    getPeopleByCaseNumber
} from "../../src/server/reminders";

describe("reminders", function () {
    const {chance, expect, sandbox} = setup();

    beforeEach(function () {
        sandbox.stub(models.Person);
    });

    describe("getReminderByCaseNumberAndName", function () {
        it("should return empty array when case doesn't exist", function () {

        });
    });
});
