import _ from "lodash";
import setup from "../../setup";
import models from "../../../src/server/models/models";

describe("Person", function () {
    const {chance, expect} = setup();

    it("should save person", function () {
        const person = randomPerson();

        return createPerson(person)
            .then((actual) => {
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

    it("should find people by case number", function () {
        const person1 = randomPerson();
        const person2 = randomPerson();
        person2.caseNumber = person1.caseNumber;

        return Promise.all([createPerson(person1), createPerson(person2)])
            .then(() => models.Person.findAll({
                    where: {
                        caseNumber: person1.caseNumber
                    }
                }).then(people => {
                    // console.info("Size", people);
                })
            );
    });

    const createPerson = (person) =>
        models.Person.create(person, {
            include: [{model: models.Reminder, as: "reminders"}]
        });

    const randomPerson = () => ({
        name: chance.name(),
        phoneNumber: chance.phone(),
        caseNumber: chance.guid(),
        reminders: [
            {date: new Date()}
        ]
    });
});
