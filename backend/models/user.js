module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true    
        },          
        username: { type: DataTypes.TEXT, allowNull: false},
        firstname: { type: DataTypes.TEXT, allowNull: false},
        surname: { type: DataTypes.TEXT, allowNull: false}
    }, {
        tableName: 'users',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });

    user.associate = function(models) {
        user.belongsTo(models.petition, {
            foreignKey: 'id'
        })
    }
    return user;
}