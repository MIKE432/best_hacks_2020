// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    var petition = sequelize.define('petitions', {
    petitionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: { type: DataTypes.CHAR(50), allowNull: false },
    descript: { type: DataTypes.TEXT, allowNull: false},
    likecount: { type: DataTypes.INTEGER, allowNull: false}
    }, {
        tableName: 'petitions',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });

    petition.associate = function(models) {
        petition.hasMany(models.user, {
            foreignKey: 'id'
        })
    }
    return petition;
}