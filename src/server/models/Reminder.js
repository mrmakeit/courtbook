export default (sequelize, DataTypes) => {
    const Reminder = sequelize.define("Reminder", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        date: DataTypes.DATE
    }, {
        classMethods: {
            associate: function (models) {
                Reminder.belongsTo(models.Person, {as: "person"});
            }
        }
    });

    return Reminder;
};
