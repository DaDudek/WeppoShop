import * as Sequelize from 'sequelize'
import {sequelizeInstance} from "../database/db.js";
const Role =
    sequelizeInstance.define('role', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    });
export {Role};
