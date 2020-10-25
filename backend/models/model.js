module.exports = (sequelize, DataTypes) => {
    var petition = sequelize.define('petitions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: { type: DataTypes.CHAR(50), allowNull: false },
    description: { type: DataTypes.INTEGER, allowNull: false},
    likeCount: { type: DataTypes.INTEGER, allowNull: false}
    }, {
        tableName: 'Petitions',
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