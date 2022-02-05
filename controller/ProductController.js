import {ProductRepository} from "../repository/ProductRepository.js";

class ProductController{

    productRepository = new ProductRepository();

    async create(req, res){
        try{
            const product = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
            }
            const createdProduct = await this.productRepository.create(product);
            res.status(201).json(createdProduct)
        } catch (error) {
            console.log("exception: ProductController.create");
            return res.status(400).json(error)
        }

    }

    async getAll(req, res){
        try{
            const products = await this.productRepository.getAll();
            // return res.status(201).json(products);
            console.log(products)
            // TODO: temp fix
            return res.render('index',{'products': products});
        }catch (error) {
            console.log("exception:ProductController.getAll");
            return res.status(400).json(error)
        }
    }

    async getById(req, res){
        try{
            const productId = req.params.id;
            const product = await this.productRepository.getById(productId)
            return res.status(201).json(product[0]);
        }catch (error) {
            console.log("exception: ProductController.getById");
            return res.status(400).json(error)
        }

    }

    async update(req, res){
        try{
            const productId = req.params.id;
            const product = this.productRepository.getById(productId);
            product.status = req.body.status;
            product.address = req.body.address;
            product.price = req.body.price;
            await this.productRepository.update(product);
        }catch (error) {
            console.log("exception: ProductController.update");
            return res.status(400).json(error)
        }
    }

    async remove(req, res){
        try{
            const productId = req.params.id;
            const numberOfRemoved = await this.productRepository.remove(productId);
            return res.status(201).json(numberOfRemoved);
        }catch (error) {
            console.log("exception: ProductController.remove");
            return res.status(400).json(error)
        }
    }

    async getByName(req, res){
        try{
            const productName = req.query.name;
            const products = await this.productRepository.getByName(productName);
            return res.status(201).json(products)
        }catch (error) {
            console.log("exception: ProductController.getByName");
            return res.status(400).json(error)
        }

    }

    async getByDescription(req, res){
        try {
            const productDescription = req.query.description;
            const products = await this.productRepository.getByDescription(productDescription);
            return res.status(201).json(products)
        }catch (error) {
            console.log("exception: ProductController.getByDescription");
            return res.status(400).json(error)
        }
    }
}

export {ProductController}
