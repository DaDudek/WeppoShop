import * as Sequelize from 'sequelize'
import {sequelizeInstance} from "../database/db.js";
const User =
    sequelizeInstance.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        mail: {
            allowNull: false,
            type: Sequelize.STRING
        },
        login: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING // we can use string because we only store hash
        },
    });
export {User};
