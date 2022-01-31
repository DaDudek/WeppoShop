import {Order} from "../model/Order.js";

class OrderRepository{
    async create(order){
        // const createdOrder = await Order.create(order);
        return Order.create(order);
    }

    async getAll(){
        // const orders = await Order.findAll();
        // return orders;
        return await Order.findAll();
    }

    async getById(orderId){
        // const order = await Order.findAll({
        //             where: {
        //                 id: req.params.id
        //             }
        //         })
        // return order

        return await Order.findAll({
                        where: {
                            id: orderId
                        }
                    })
    }

    async update(user){
        return user.save();
    }

    async remove(orderId){
        // const numberOfRemoved
        return await Order.destroy({
                where: {
                    id: orderId
                }
            });
        // return numberOfRemoved;
    }
}

export {OrderRepository}
