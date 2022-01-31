import {User} from "../model/User.js";

class UserRepository{
    async create(user){
        return User.create(user);
    }

    async getAll(){
        return await User.findAll();
    }

    async getById(userId){
        return await User.findAll({
            where: {
                id: userId
            }
        })
    }

    async update(user){
        return await user.save();
    }

    async remove(userId){
        return await User.destroy({
            where: {
                id: userId
            }
        });
    }
}

export {UserRepository}
