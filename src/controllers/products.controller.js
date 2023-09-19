//importamos la capa de servico
import { ProductsService } from "../services/products.service.js";

import { productSDao } from "../dao/managers/index.js";

export class ProductsController { 
     static getProducts = async (req, res) => {
        try {
            const limit = req.query.limit;
            const products =  await ProductsService.getProducts;
            let resultado = 0;
            if (limit) {
                
                //devolver productos de acuerdo al limite
                const limite = parseInt(req.query.limit);
                console.log("limite: ", limite);
                if (limite > 0) {
                    resultado = products.slice(0,limite);
                } else {
                    resultado = products;
                }
                res.send(resultado);
    
            } else {
                res.json({ status: "success", data: products });
            }
        } catch (error) {
            res.json({ status: "error", message: error.message });
        }
    };

    static getProduct = async (req, res) => {
        try {
            let pid = req.params.pid;
            let result = await productSDao.getProductById(pid);
            res.json({ status: 'success', data: result });
        } catch (error) {
            res.json({ status: 'error', message: error.message });
            //throw new Error(error.message);
        }
    };

    static createProduct = async (req,res)=>{
        try {
            const productInfo = req.body;
            const productsCreate = await ProductsService.createPrtoduct(productInfo);
            res.json({status:"succcess", data:productsCreate, message:"producto creado"})
        } catch (error) {
            res.json({ status: "error", message: error.message });
        }
    };

    static updateProduct = async (req, res) =>{
        try {
            let pid = req.params.pid;
            let product = req.body;
            let result =  await productSDao.updateProduct(pid, product);
            result.id = pid;
            res.json({ status: 'success', data: result });
        } catch (error) {
            res.json({ status: 'error', message: error.message });
            //throw new Error(error.message);
        }
    };

    static deleteProduct = async (req, res) => { 
        try {
            let pid = req.params.pid;
            let result =  await productSDao.deleteProduct(pid);
            res.json({ status: "success", data: deleteProduct, message: "Producto borrado!" });
        } catch (error) {
            res.json({ status: 'error', message: error.message });
        }
    };
    
}