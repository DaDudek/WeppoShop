import {Order} from "./Order.js";
import {Product} from "./Product.js";
import {User} from "./User.js";
import {Role} from "./Role.js";

const initRelations = () => {
    Order.hasMany(Product, {
        onUpdate: 'CASCADE',
    });
    Product.belongsTo(Order)

    User.hasMany(Role,{
        onUpdate: 'CASCADE',
    });
    Role.belongsTo(User)
}

export {initRelations}
