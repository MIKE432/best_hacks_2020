module.exports = (sequelize, DataTypes) =>
    sequelize.define('petitions', {
        petitionid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: { type: DataTypes.TEXT, allowNull: false },
        descript: { type: DataTypes.TEXT, allowNull: false },
        likecount: { type: DataTypes.INTEGER, allowNull: false },
        petitor: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'petitions',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    })
