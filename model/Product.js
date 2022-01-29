import * as Sequelize from 'sequelize'
import {sequelizeInstance} from "../database/db.js";

const Product =
    sequelizeInstance.define('product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        description: {
            allowNull: false,
            type: Sequelize.STRING
        },
        price: {
            allowNull: false,
            type: Sequelize.FLOAT
        },
    });
export {Product};
