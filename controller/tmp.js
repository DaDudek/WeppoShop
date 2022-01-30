/**
 * REMOVE LATER ONLY FOR TEST
 */
import {Order} from "../model/Order.js";
import {Product} from "../model/Product.js";
import {Role} from "../model/Role.js";
import {User} from "../model/User.js";

async function test_table(req, res){
    try{
        const ORDER_MODEL = {
            price: 5.034423,
            address: "Example",
            status: "example",
        }

        const PRODUCT_EXAMPLE = {
            name: "example",
            description: "example",
            price: 2.5
        };
        const order = await Order.create(ORDER_MODEL)
        PRODUCT_EXAMPLE.orderId = order.id;
        await Product.create(PRODUCT_EXAMPLE);

        const ROLE_EXAMPLE = {
            name: "example"
        };
        await Role.create(ROLE_EXAMPLE);

        const USER_EXAMPLE = {
            mail: "example",
            login: "example",
            password: 'example'
        };
        const user = await User.create(USER_EXAMPLE);
        return res.status(201).json(user)
    }catch (error) {
        return res.status(400).json(error)
    }

}

async function createOne(req, res) {
    console.log('createOne: [POST] /order/')
    try {
        const ORDER_MODEL = {
            price: req.body.price,
            address: req.body.address,
            status: req.body.status,
        }
        try {
            const order = await Order.create(ORDER_MODEL)
            console.log('OK createOne order: ', order)
            return res.status(201).json(order)
        } catch (error) {
            console.log('ERROR in createOne ' + 'order:', error)
            return res.status(500).json(error)
        }
    } catch (error) {
        return res.status(400).json('Bad Request')
    }
}


async function getAll(req, res) {
    console.log('getAll: [GET] /order/')
    try {
        const ALL = await Order.findAll()
        console.log(
            'OK getAll order: ',
            ALL.map(el => el.dataValues),
        )
        return res.status(200).json(ALL)
    } catch (error) {
        console.log('ERROR in getAll ' + 'order:', error)
        return res.status(500).json(error)
    }
}

export {getAll, createOne, test_table}
