module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true    
        },          
        username: { type: DataTypes.CHAR(25), allowNull: false},
        firstname: { type: DataTypes.CHAR(50), allowNull: false},
        surname: { type: DataTypes.CHAR(50), allowNull: false}
    }, {
        tableName: 'users',
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