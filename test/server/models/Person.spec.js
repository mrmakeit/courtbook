import models from "../../../src/server/models/models";

describe("Person", function () {
    it("should save person", function () {
        const person = {
            name: chance.name(),
            phoneNumber: chance.phone(),
            reminders: [
                {date: new Date()}
            ]
        };

        return models.Person.create(person, {
            include: [
                {model: models.Reminder, as: "reminders"}
            ]
        }).then((actual) => {
            expect(actual.id).to.exist();
            expect(actual.name).to.equal(person.name);
            expect(actual.phoneNumber).to.equal(person.phoneNumber);
            expect(actual.reminders).to.exist();
            expect(actual.reminders).to.have.length(1);
            const actualReminder = actual.reminders[0];
            expect(actualReminder.date + "").to.equal(person.reminders[0].date + "");
            expect(actualReminder.PersonId).to.eql(actual.id);
        });
    });
});
