import {sequelizeInstance} from "./database/db.js";
import {createOne, getAll, test_table} from "./controller/tmp.js";
import * as http from "http";
import express from 'express'
import {initRelations} from "./model/relations.js";
import bodyParser from 'body-parser';

let app = express();

let server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//
// app.use( (req, res) => {
//     res.render('index', {username: 'foo'});
// });

initRelations();

app.get('/order', getAll);
app.post('/order', (req, res) => {
    createOne(req,res)
});

app.get('/init', (req, res) => {
    test_table(req, res);
});

const start = async () => {
    try {
        await sequelizeInstance.sync(
            { force: false } // Reset db every time
        );
        server.listen(process.env.PORT || 3000);
    } catch (error) {
        console.log(error);
    }
};

start();
