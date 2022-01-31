import {sequelizeInstance} from "./database/db.js";
import {createOne, getAll, test_table} from "./controller/tmp.js";
import * as http from "http";
import express from 'express'
import {initRelations} from "./model/relations.js";
import bodyParser from 'body-parser';
import {UserController} from "./controller/UserController.js"
import {ProductController} from "./controller/ProductController.js";
import {OrderController} from "./controller/OrderController.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();

let server = http.createServer(app);
let userController = new UserController();
let productController = new ProductController();
let orderController = new OrderController();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(__dirname + "/assets"));

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

// USER
app.get('/user', (req, res) => {
    userController.getAll(req, res);
})

app.post('/user', (req, res) => {
    userController.create(req, res);
})

app.delete('/user/:id', (req, res) => {
    userController.remove(req, res);
})

app.get('/user/:id', (req, res) => {
    userController.getById(req, res);
})

//PRODUCT
app.get('/product', (req, res) => {
    if (req.query.name){
        return productController.getByName(req, res);
    }
    if (req.query.description){
        return productController.getByDescription(req, res)
    }
    return productController.getAll(req, res);
})

app.post('/product', (req, res) => {
    productController.create(req, res);
})

app.delete('/product/:id', (req, res) => {
    productController.remove(req, res);
})

app.get('/product/:id', (req, res) => {
    productController.getById(req, res);
})


//ORDER
app.get('/order', (req, res) => {
    orderController.getAll(req, res);
})

app.post('/order', (req, res) => {
    orderController.create(req, res);
})

app.delete('/order/:id', (req, res) => {
    orderController.remove(req, res);
})

app.get('/order/:id', (req, res) => {
    orderController.getById(req, res);
})


app.get('/view/product', (req, res) => {
    const products = productController.getAll(req, res)
        .then(res => console.log(res.json()));
    // console.log(products);
    //res.render('product', products);
})

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
