import {Sequelize} from 'sequelize'

const databaseName = 'wepposhop';
const port = 9001;
const host = 'localhost';
const username = 'postgres';
const password = 'password';

const sequelizeInstance = new Sequelize(
    `postgres://${username}:${password}@${host}:${port}/${databaseName}`, {
        dialect: "postgres"
    }
)

export {sequelizeInstance}
