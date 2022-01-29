const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    //user and products are needed to be add be relationships later
    sequelize.define('order', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        price: {
            allowNull: false,
            type: DataTypes.FLOAT
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });
};
