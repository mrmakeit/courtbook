import models from './models/models';

const cases = {
    FAKE1: {
        defendants: [
            {name: "Mickey Mouse"},
            {name: "Minnie Mouse"}
        ],
        events: {
            "Mickey Mouse": [
                {date: "2016-12-30T05:49:20+00:00", description: "PRELIMINARY HEARING ISSUE (PUBLIC DEFENDER)"}
            ],
            "Minnie Mouse": [
                {date: "2016-12-30T05:49:20+00:00", description: "PRELIMINARY HEARING ISSUE (PUBLIC DEFENDER)"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #2"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #3"}
            ]
        }
    },
    FAKE2: {
        defendants: [
            {name: "Donald Duck"},
            {name: "Daisy Duck"}
        ],
        events: {
            "Donald Duck": [],
            "Daisy Duck": []
        }
    },
    FAKE3: {
        defendants: [
            {name: "Scrooge McDuck"}
        ],
        events: {
            "Scrooge McDuck": [
                {date: "2016-12-30T05:49:20+00:00", description: "PRELIMINARY HEARING ISSUE (PUBLIC DEFENDER)"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #2"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #3"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #4"},
                {date: "2016-12-30T05:49:20+00:00", description: "HEARING #5"}
            ]
        }
    }
};

export const createPersonAndReminders = (personAndReminders) => {
    // TODO: Valid person and case don't already exist
    // TODO: Validate id not passed in
    return models.Person.create(personAndReminders, {
        include: [{model: models.Reminder, as: "reminders"}]
    });
};

export const getPeopleByCaseNumber = (caseNumber) => {
    const theCase = cases[caseNumber];
    return theCase ? theCase.defendants : [];
};

export const getReminderByCaseNumberAndName = (caseNumber, personName) => {
    const events = cases[caseNumber] && cases[caseNumber].events ? cases[caseNumber].events[personName] : [];
    return events ? events : [];
};

