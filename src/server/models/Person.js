export default (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.TEXT,
        phoneNumber: DataTypes.TEXT,
        caseNumber: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                Person.hasMany(models.Reminder, {
                    as: "reminders"
                });
            }
        }
    });

    return Person;
};
