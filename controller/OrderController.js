import {OrderRepository} from "../repository/OrderRepository.js";

class OrderController{

    orderRepository = new OrderRepository();

    async create(req, res){
        try{
            const order = {
                status: req.body.status,
                address: req.body.address,
                price: req.body.price,
            }
            const createdOrder = await this.orderRepository.create(order);
            res.status(201).json(createdOrder)
        } catch (error) {
            console.log("exception: OrderController.create");
            return res.status(400).json(error)
        }

    }

    async getAll(req, res){
        try{
            const orders = await this.orderRepository.getAll();
            return res.status(201).json(orders);
        }catch (error) {
            console.log("exception:OrderController.getAll");
            return res.status(400).json(error)
        }

    }

    async getById(req, res){
        try{
            const orderId = req.params.id;
            const order = await this.orderRepository.getById(orderId);
            return res.status(201).json(order);
        }catch (error) {
            console.log("exception: OrderController.getById");
            return res.status(400).json(error)
        }

    }

    async update(req, res){
        try{
            const orderId = req.params.id;
            const order = this.orderRepository.getById(orderId);
            order.status = req.body.status;
            order.address = req.body.address;
            order.price = req.body.price;
            await this.orderRepository.update(order);
        }catch (error) {
            console.log("exception: OrderController.getById");
            return res.status(400).json(error)
        }
    }


    async remove(req, res){
        try{
            const orderId = req.params.id;
            const numberOfRemoved = this.orderRepository.remove(orderId);
            return res.status(201).json(numberOfRemoved);
        }catch (error) {
            console.log("exception: OrderController.getById");
            return res.status(400).json(error)
        }
    }
}

export {OrderController}
