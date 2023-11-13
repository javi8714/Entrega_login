import { ProductManagerMongo } from '../dao/managers/productManagerMongo.js';
const p = new ProductManagerMongo();
export class ProductService{
    static categories = async()=>{
        return await pm.categories();
    }
    static getProducts = async({ category }, options)=>{
        return await p.getProducts({ category }, options);
    }
    static getProductByID = async(pid)=>{
        return await p.getProductById(pid);
    }
    static addProduct = async(obj)=>{
        return await p.addProduct(obj);
    }
    static updateProduct = async(pid,obj)=>{
        return await p.updateProduct(pid,obj);
    }
    static deleteProduct = async(id)=>{
        return await p.deleteProduct(id);
    }
    
}