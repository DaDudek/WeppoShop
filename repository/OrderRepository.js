import {Order} from "../model/Order.js";

class OrderRepository{
    async create(order){
        return Order.create(order);
    }

    async getAll(){
        return await Order.findAll();
    }

    async getById(orderId){
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
        return await Order.destroy({
                where: {
                    id: orderId
                }
            });
    }
}

export {OrderRepository}
