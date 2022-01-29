import {sequelizeInstance} from "./database/db.js";
import {createOne, getAll} from "./controller/tmp.js";
import * as http from "http";
import express from 'express'

let app = express();

let server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');
//
// app.use( (req, res) => {
//     res.render('index', {username: 'foo'});
// });


app.get('/order', getAll);
app.post('/order', createOne);

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
