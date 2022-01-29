/**
 * REMOVE LATER ONLY FOR TEST
 */
import {Order} from "../model/Order.js";

async function createOne(req, res) {
    console.log('createOne: [POST] /order/')
    try {
        const ORDER_MODEL = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        try {
            const user = await Order.create(ORDER_MODEL)
            console.log('OK createOne order: ', user)
            return res.status(201).json(user)
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

export {getAll, createOne}
