//importar la capa de persistencia
import { productSDao } from "../dao/managers/index.js";

export class ProductsService{
    static getProducts = async()=>{
        return await productSDao.get();
    };

    static createPrtoduct = async(productInfo)=>{
        return await productSDao.save(productInfo);
    };

    static updateProduct = 

}