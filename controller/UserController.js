import bcrypt from "bcrypt";
import {UserRepository} from "../repository/UserRepository.js";

class UserController{
    rounds = 12;
    userRepository = new UserRepository();

    async create(req, res){
        try{
            const password = await bcrypt.hash(req.body.password, this.rounds)
            const user = {
                mail: req.body.mail,
                login: req.body.login,
                password: password,
            }
            const createdUser = await this.userRepository.create(user);
            res.status(201).json(createdUser)
        } catch (error) {
            console.log("exception: UserController.create");
            return res.status(400).json(error)
        }

    }

    async getAll(req, res){
        try{
            const users = this.userRepository.getAll();
            return res.status(201).json(users);
        }catch (error) {
            console.log("exception: UserController.getAll");
            return res.status(400).json(error)
        }

    }

    async getById(req, res){
        try{
            const userId = req.params.id;
            const user = this.userRepository.getById(userId);
            return res.status(201).json(user);
        }catch (error) {
            console.log("exception: UserController.getById");
            return res.status(400).json(error)
        }

    }

    async update(req, res){
        try{
            const userId = req.params.id;
            const user = this.userRepository.getById(userId);
            const password = await bcrypt.hash(req.body.password, this.rounds)
            user.mail = req.body.mail;
            user.login = req.body.login;
            user.password = password;
            await this.userRepository.update(user);
        }catch (error) {
            console.log("exception: UserController.update");
            return res.status(400).json(error)
        }
    }

    async remove(req, res){
        try{
            const userId = req.params.id;
            const numberOfRemoved = this.userRepository(userId);
            return res.status(201).json(numberOfRemoved);
        }catch (error) {
            console.log("exception: UserController.remove");
            return res.status(400).json(error)
        }
    }
}


export {UserController}
