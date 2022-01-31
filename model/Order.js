import * as Sequelize from 'sequelize'
import {sequelizeInstance} from "../database/db.js";
const Order =
    sequelizeInstance.define('order', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        price: {
            allowNull: false,
            type: Sequelize.DECIMAL(10, 2)
        },
        address: {
            allowNull: false,
            type: Sequelize.STRING
        },
        status: {
            allowNull: false,
            type: Sequelize.STRING
        }
    });
export {Order};
