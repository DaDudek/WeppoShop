import {Product} from "../model/Product.js";
import * as Sequelize from 'sequelize'

class ProductRepository{
    async create(product){
        return Product.create(product);
    }

    async getAll(){
        return await Product.findAll({
            raw: true
        });
    }

    async getById(productId){
        return await Product.findAll({
            where: {
                id: productId
            },
            raw: true
        })
    }

    async update(product){
        return await product.save();
    }

    async remove(productId){
        return await Product.destroy({
            where: {
                id: productId
            }
        });
    }

    async getByName(productName){
        return await Product.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `%${productName}%`
                }
            }
        })
    }

    async getByDescription(productDescription){
        return await Product.findAll({
            where: {
                description: {
                    [Sequelize.Op.like]: `%${productDescription}%`
                }
            }
        })
    }
}

export {ProductRepository}
